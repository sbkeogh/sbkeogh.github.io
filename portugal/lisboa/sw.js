/* Lisbon tour service worker — precache the app shell, cache-first for map tiles. */
/* Bump SHELL_CACHE whenever data.js / app.js change — the fetch handler below is
 * cache-first, so without a new cache name an installed tour keeps serving the old
 * data.js and the new stops never appear. v1: initial build. */
var SHELL_CACHE = 'lisboa-shell-v2';
var TILE_CACHE = 'lisboa-tiles-v1';
var SHELL = [
  './',
  'index.html',
  'styles.css',
  'app.js',
  'data.js',
  'manifest.webmanifest',
  'icon-180.png',
  'icon-192.png',
  'icon-512.png',
  'vendor/leaflet.js',
  'vendor/leaflet.css',
  'vendor/images/marker-icon.png',
  'vendor/images/marker-icon-2x.png',
  'vendor/images/marker-shadow.png',
  'vendor/images/layers.png',
  'vendor/images/layers-2x.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(SHELL_CACHE).then(function (c) { return c.addAll(SHELL); }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        if (k !== SHELL_CACHE && k !== TILE_CACHE) return caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var url = new URL(e.request.url);

  // Map tiles: cache-first, then network (and store what we fetch).
  if (url.hostname === 'tile.openstreetmap.org') {
    e.respondWith(
      caches.open(TILE_CACHE).then(function (cache) {
        return cache.match(e.request).then(function (hit) {
          if (hit) return hit;
          return fetch(e.request).then(function (resp) {
            if (resp.ok) cache.put(e.request, resp.clone());
            return resp;
          });
        });
      })
    );
    return;
  }

  // Same-origin shell: cache-first with network fallback + refresh.
  if (url.origin === self.location.origin) {
    e.respondWith(
      caches.match(e.request).then(function (hit) {
        var net = fetch(e.request).then(function (resp) {
          if (resp.ok) {
            var copy = resp.clone();
            caches.open(SHELL_CACHE).then(function (c) { c.put(e.request, copy); });
          }
          return resp;
        }).catch(function () { return hit; });
        return hit || net;
      })
    );
  }
});
