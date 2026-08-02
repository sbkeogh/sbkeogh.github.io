/* Registers the trip service worker so these pages work with no signal.
 *
 * Loaded from every encrypted page. StatiCrypt injects the decrypted page with
 * document.write(), which does run <script src> tags, so this fires normally
 * once the passphrase has been accepted.
 *
 * If a page contains an element with id="offline-status", it gets a short
 * human-readable state written into it.
 */
(function () {
  var el = function () { return document.getElementById('offline-status'); };

  var say = function (msg, cls) {
    var n = el();
    if (!n) return;
    n.textContent = msg;
    if (cls) n.className = cls;
  };

  if (!('serviceWorker' in navigator)) {
    say('This browser can’t store the pages for offline use.', 'off-warn');
    return;
  }

  // Only meaningful over https (or localhost); GitHub Pages is https.
  navigator.serviceWorker.register('sw.js').then(function (reg) {
    if (navigator.serviceWorker.controller) {
      say('Saved for offline use — these pages will open without a signal.', 'off-ok');
    } else {
      say('Saving these pages for offline use…', 'off-pending');
      // First visit: the worker installs and precaches in the background.
      if (reg.installing) {
        reg.installing.addEventListener('statechange', function () {
          if (this.state === 'activated') {
            say('Saved for offline use — these pages will open without a signal.', 'off-ok');
          }
        });
      }
    }
  }).catch(function () {
    say('Couldn’t save these pages for offline use.', 'off-warn');
  });

  // Reflect connectivity, so it's obvious when you're reading a cached copy.
  var flag = function () {
    var n = el();
    if (!n) return;
    if (!navigator.onLine && n.className !== 'off-warn') {
      say('Offline — showing the saved copy of this page.', 'off-ok');
    }
  };
  window.addEventListener('offline', flag);
  window.addEventListener('online', function () {
    if (navigator.serviceWorker.controller) {
      say('Saved for offline use — these pages will open without a signal.', 'off-ok');
    }
  });
  flag();
})();

/* ---------------------------------------------------------------------------
 * "Prepare everything" — one tap to make the whole trip work with no signal.
 *
 * Why this needs to exist: the four walking tours each register their OWN
 * service worker on their own scope, so visiting the landing page caches the
 * pages but none of the tours. Getting everything offline used to mean opening
 * five things and pressing five buttons, which is easy to half-do and then
 * discover on a hillside in Alfama.
 *
 * How it reaches into the tours: Cache Storage is per-ORIGIN, not per-scope, so
 * this page can populate a tour's caches directly. Names and bounds are read
 * out of each tour's own sw.js and data.js rather than duplicated here, so
 * bumping a tour's SHELL_CACHE can't silently leave this behind.
 *
 * The tour service workers answer same-origin requests with a global
 * caches.match(), so shell files and narration land in the shell cache; map
 * tiles are looked up in a NAMED cache, so those must go in the right one.
 */
(function () {
  var btn = document.getElementById('prep-btn');
  if (!btn || !('caches' in window)) return;
  var out = document.getElementById('prep-status');

  var TOURS = ['porto', 'evora', 'lisboa', 'caldas'];
  var TOUR_SHELL = ['', 'index.html', 'styles.css', 'app.js', 'data.js',
    'manifest.webmanifest', 'icon-180.png', 'icon-192.png', 'icon-512.png',
    'vendor/leaflet.js', 'vendor/leaflet.css', 'vendor/images/marker-icon.png',
    'vendor/images/marker-icon-2x.png', 'vendor/images/marker-shadow.png',
    'vendor/images/layers.png', 'vendor/images/layers-2x.png'];
  var TILE = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
  var done = 0, total = 0, failed = 0;

  function say(msg, cls) {
    if (!out) return;
    out.textContent = msg;
    out.className = cls || '';
  }
  function tick(label) {
    say(label + ' — ' + done + ' of ' + total + ' items saved…', 'prep-busy');
  }

  // Run jobs a few at a time: polite to the tile server, and it keeps the
  // progress readout moving instead of stalling on one big burst.
  function pool(jobs, label, width) {
    var i = 0;
    function next() {
      if (i >= jobs.length) return Promise.resolve();
      var job = jobs[i++];
      return job().then(function () { done++; }, function () { done++; failed++; })
        .then(function () { tick(label); return next(); });
    }
    var runners = [];
    for (var n = 0; n < (width || 6); n++) runners.push(next());
    return Promise.all(runners);
  }

  function cacheInto(cache, url) {
    return cache.match(url).then(function (hit) {
      if (hit) return;
      return fetch(url, { cache: 'reload' }).then(function (r) {
        if (r && (r.ok || r.type === 'opaque')) return cache.put(url, r.clone());
        throw new Error('bad response');
      });
    });
  }

  function tileRange(z, b) {
    function x(lon) { return Math.floor((lon + 180) / 360 * Math.pow(2, z)); }
    function y(lat) {
      var r = lat * Math.PI / 180;
      return Math.floor((1 - Math.log(Math.tan(r) + 1 / Math.cos(r)) / Math.PI) / 2 * Math.pow(2, z));
    }
    return { x0: x(b.west), x1: x(b.east), y0: y(b.north), y1: y(b.south) };
  }

  function readTour(slug) {
    return Promise.all([
      fetch(slug + '/sw.js', { cache: 'reload' }).then(function (r) { return r.text(); }),
      fetch(slug + '/data.js', { cache: 'reload' }).then(function (r) { return r.text(); })
    ]).then(function (t) {
      var shell = /SHELL_CACHE = '([^']+)'/.exec(t[0]);
      var tiles = /TILE_CACHE = '([^']+)'/.exec(t[0]);
      var w = {};
      new Function('window', t[1])(w);       // data.js only assigns window.TOUR
      return {
        slug: slug,
        shellCache: shell ? shell[1] : slug + '-shell',
        tileCache: tiles ? tiles[1] : slug + '-tiles-v1',
        tour: w.TOUR
      };
    });
  }

  function prepareTour(info) {
    var slug = info.slug, T = info.tour;
    var urls = TOUR_SHELL.map(function (f) { return slug + '/' + f; });
    (T.stops || []).forEach(function (s) { urls.push(slug + '/audio/' + s.id + '.mp3'); });

    var tiles = [];
    if (T.bounds) {
      for (var z = 13; z <= 17; z++) {
        var r = tileRange(z, T.bounds);
        for (var x = r.x0; x <= r.x1; x++) {
          for (var y = r.y0; y <= r.y1; y++) {
            tiles.push(TILE.replace('{z}', z).replace('{x}', x).replace('{y}', y));
          }
        }
      }
    }
    total += urls.length + tiles.length;

    return caches.open(info.shellCache).then(function (sc) {
      return pool(urls.map(function (u) { return function () { return cacheInto(sc, u); }; }),
                  'Saving the ' + slug + ' tour');
    }).then(function () {
      return caches.open(info.tileCache).then(function (tc) {
        return pool(tiles.map(function (u) { return function () { return cacheInto(tc, u); }; }),
                    'Saving the ' + slug + ' map', 4);
      });
    });
  }

  // The trip pages are precached by this page's own service worker on install;
  // fetching any that are missing lets it pick them up and keeps the count honest.
  function preparePages() {
    return fetch('sw.js', { cache: 'reload' }).then(function (r) { return r.text(); })
      .then(function (txt) {
        var list = [];
        (txt.match(/'[^']+\.(?:html|css|js|webp|mp3)'/g) || []).forEach(function (q) {
          var u = q.slice(1, -1);
          if (list.indexOf(u) < 0 && u.indexOf('sw.js') < 0) list.push(u);
        });
        total += list.length;
        return pool(list.map(function (u) {
          return function () {
            return caches.match(u).then(function (hit) {
              if (hit) return;
              return fetch(u, { cache: 'reload' });   // the page SW caches it
            });
          };
        }), 'Saving the trip pages');
      });
  }

  btn.addEventListener('click', function () {
    if (btn.disabled) return;
    btn.disabled = true;
    done = 0; total = 0; failed = 0;
    say('Starting…', 'prep-busy');

    preparePages()
      .then(function () {
        var chain = Promise.resolve();
        TOURS.forEach(function (slug) {
          chain = chain.then(function () {
            return readTour(slug).then(prepareTour).catch(function () { failed++; });
          });
        });
        return chain;
      })
      .then(function () {
        btn.disabled = false;
        btn.textContent = 'Saved for offline use — run again any time';
        say(failed
          ? 'Saved ' + (done - failed) + ' of ' + total + ' items. ' + failed +
            ' didn’t save — run it again on a better connection.'
          : 'Ready. All ' + total + ' items are saved: the pages, the pictures, ' +
            'and all four walking tours with their narration and maps. ' +
            'This will now work with no signal at all.',
          failed ? 'prep-warn' : 'prep-ok');
      })
      .catch(function () {
        btn.disabled = false;
        say('Something went wrong saving for offline use. Try again on wifi.', 'prep-warn');
      });
  });
})();
