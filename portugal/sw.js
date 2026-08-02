/* Portugal trip service worker.
 *
 * Scope: /portugal/  — the encrypted trip pages.
 * NOT the walking tours: each of /portugal/porto/, /portugal/evora/, /portugal/lisboa/
 * and /portugal/caldas/ registers its own service worker with a narrower scope, which
 * therefore controls those pages. This one stays out of all four.
 *
 * Why this exists: StatiCrypt decrypts entirely in the browser, so once a page's
 * bytes are cached and the passphrase is remembered in localStorage, the page opens
 * with no network at all. That is the point — the itinerary and confirmation numbers
 * need to work on a train in the Douro with no signal.
 *
 * Strategy: precache every page on install; then network-first with cache fallback,
 * so a rebuild is picked up when there IS signal but nothing breaks when there isn't.
 */

var VERSION = 'trip-v4';
var CACHE = 'portugal-' + VERSION;

var PAGES = [
  './',
  'index.html',
  'itinerary.html',
  'documents.html',
  'packing.html',
  'watch.html',
  'getting-around.html',
  'book-ahead.html',
  'phrases.html',
  'evora.html',
  'porto.html',
  'lisbon.html',
  'caldas.html',
  'history-evora.html',
  'history-porto.html',
  'history-lisbon.html',
  'art-lisbon.html',
  'art-porto.html',
  'history-caldas.html',
  'credits.html',
  'offline.js',
  'trip.css'
];

/* Pictures. All public domain, all local — see credits.html. Precached with the
 * pages because a trip site that loses its illustrations the moment the signal
 * goes is not much of an improvement on one that never had any. ~1.9 MB total,
 * which is the whole point of opening this once on wifi before flying. */
var IMAGES = [
  'img/map-portugal-1801.webp', 'img/map-portugal-1747.webp', 'img/map-south-1775.webp',
  'img/lisbon-port-plan.webp', 'img/evora-sargent.webp', 'img/evora-templo-1890.webp',
  'img/evora-porta-aviz.webp', 'img/evora-plan-1677.webp', 'img/porto-ponte-1883.webp',
  'img/porto-ponte-pensil.webp', 'img/porto-cloister-1892.webp', 'img/douro-pinhao.webp',
  'img/lisbon-tagus.webp', 'img/lisbon-se-1757.webp', 'img/lisbon-patriarcal-1757.webp',
  'img/lisbon-opera-1757.webp', 'img/lisbon-arco.webp', 'img/caldas-jarra-1895.webp',
  'img/caldas-ze-povinho.webp', 'img/caldas-fabrica-1881.webp'
];
PAGES = PAGES.concat(IMAGES);

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
  // Leave each walking tour entirely to its own service worker.
  if (url.pathname.indexOf('/portugal/porto/') === 0) return;
  if (url.pathname.indexOf('/portugal/evora/') === 0) return;
  if (url.pathname.indexOf('/portugal/lisboa/') === 0) return;
  if (url.pathname.indexOf('/portugal/caldas/') === 0) return;
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
