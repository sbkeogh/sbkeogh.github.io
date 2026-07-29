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
