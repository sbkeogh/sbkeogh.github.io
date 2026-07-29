/* Portugal trip service worker.
 *
 * Scope: /portugal/  — the encrypted trip pages.
 * NOT the walking tour: /portugal/porto/ registers its own service worker with a
 * narrower scope, which therefore controls those pages. This one stays out of it.
 *
 * Why this exists: StatiCrypt decrypts entirely in the browser, so once a page's
 * bytes are cached and the passphrase is remembered in localStorage, the page opens
 * with no network at all. That is the point — the itinerary and confirmation numbers
 * need to work on a train in the Douro with no signal.
 *
 * Strategy: precache every page on install; then network-first with cache fallback,
 * so a rebuild is picked up when there IS signal but nothing breaks when there isn't.
 */

var VERSION = 'trip-v1';
var CACHE = 'portugal-' + VERSION;

var PAGES = [
  './',
  'index.html',
  'itinerary.html',
  'documents.html',
  'packing.html',
  'watch.html',
  'evora.html',
  'porto.html',
  'lisbon.html',
  'caldas.html',
  'history-evora.html',
  'history-porto.html',
  'history-lisbon.html',
  'history-caldas.html',
  'offline.js'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      // addAll is all-or-nothing; cache individually so one 404 can't sink the install.
      return Promise.all(PAGES.map(function (p) {
        return c.add(new Request(p, { cache: 'reload' })).catch(function () {});
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        if (k.indexOf('portugal-') === 0 && k !== CACHE) return caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;

  var url;
  try { url = new URL(req.url); } catch (err) { return; }

  if (url.origin !== self.location.origin) return;
  // Leave the walking tour entirely to its own service worker.
  if (url.pathname.indexOf('/portugal/porto/') === 0) return;
  if (url.pathname.indexOf('/portugal/') !== 0) return;

  e.respondWith(
    fetch(req).then(function (res) {
      if (res && res.ok && res.type === 'basic') {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(req, copy); });
      }
      return res;
    }).catch(function () {
      return caches.match(req).then(function (hit) {
        if (hit) return hit;
        // A bare directory request offline should still land on the index.
        if (req.mode === 'navigate') {
          return caches.match('index.html') || caches.match('./');
        }
        return Response.error();
      });
    })
  );
});
