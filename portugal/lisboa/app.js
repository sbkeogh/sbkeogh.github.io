/* Porto historical walking tour — map, geolocation, narration, offline. */
(function () {
  'use strict';

  var ARRIVE_RADIUS_M = 40;      // auto-open a stop when this close
  var TILE_URL = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
  var stops = window.TOUR.stops;
  var state = {
    current: -1,
    watching: false,
    watchId: null,
    userPos: null,
    speaking: false,
    utterQueue: [],
    visited: loadVisited(),
    arrivedAnnounced: {}
  };

  /* ---------- Map ---------- */
  var map = L.map('map', { zoomControl: false }).setView(window.TOUR.center, 16);
  L.control.zoom({ position: 'topright' }).addTo(map);
  L.tileLayer(TILE_URL, {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Walking route line
  L.polyline(stops.map(function (s) { return s.coords; }), {
    color: '#14477e', weight: 3, opacity: 0.55, dashArray: '6 8'
  }).addTo(map);

  var markers = stops.map(function (s, i) {
    var m = L.marker(s.coords, { icon: markerIcon(i), title: s.name }).addTo(map);
    m.on('click', function () { openStop(i, true); });
    return m;
  });

  function markerIcon(i) {
    var cls = 'stop-marker';
    if (state.visited[stops[i].id]) cls += ' visited';
    if (i === state.current) cls += ' active';
    return L.divIcon({ className: cls, html: String(i + 1), iconSize: [30, 30], iconAnchor: [15, 15] });
  }
  function refreshMarkers() {
    markers.forEach(function (m, i) { m.setIcon(markerIcon(i)); });
  }

  var userMarker = null, accCircle = null;

  /* ---------- Stop card ---------- */
  var sheet = document.getElementById('sheet');

  function openStop(i, panTo) {
    state.current = i;
    var s = stops[i];
    document.getElementById('sheet-num').textContent = 'Stop ' + (i + 1) + ' of ' + stops.length;
    document.getElementById('sheet-era').textContent = s.era;
    document.getElementById('sheet-title').textContent = s.name;
    document.getElementById('sheet-body').innerHTML = s.story.map(function (p) {
      return '<p>' + p + '</p>';
    }).join('');
    var nextEl = document.getElementById('sheet-next');
    if (s.next) { nextEl.textContent = '➜ ' + s.next; nextEl.classList.remove('hidden'); }
    else { nextEl.classList.add('hidden'); }
    var walkEl = document.getElementById('sheet-walk');
    if (s.walk && s.walk.length) {
      document.getElementById('sheet-walk-body').innerHTML = s.walk.map(function (p) {
        return '<p>' + p + '</p>';
      }).join('');
      walkEl.classList.remove('hidden');
    } else {
      walkEl.classList.add('hidden');
    }
    document.getElementById('btn-prev').disabled = i === 0;
    document.getElementById('btn-next').disabled = i === stops.length - 1;
    updateSheetDistance();
    sheet.classList.remove('hidden');
    sheet.classList.remove('collapsed');
    stopSpeaking();
    markVisited(s.id);
    refreshMarkers();
    if (panTo) map.panTo(s.coords);
  }

  function updateSheetDistance() {
    var el = document.getElementById('sheet-dist');
    if (state.current < 0 || !state.userPos) { el.textContent = ''; return; }
    var d = distanceM(state.userPos, stops[state.current].coords);
    el.textContent = fmtDist(d) + ' away';
  }

  document.getElementById('btn-sheet-close').addEventListener('click', function () {
    sheet.classList.add('hidden');
    stopSpeaking();
    state.current = -1;
    refreshMarkers();
  });
  document.getElementById('sheet-grip').addEventListener('click', function () {
    sheet.classList.toggle('collapsed');
  });
  document.getElementById('btn-prev').addEventListener('click', function () {
    if (state.current > 0) openStop(state.current - 1, true);
  });
  document.getElementById('btn-next').addEventListener('click', function () {
    if (state.current < stops.length - 1) openStop(state.current + 1, true);
  });

  /* ---------- Narration (recorded audio, speech-synthesis fallback) ---------- */
  var playBtn = document.getElementById('btn-play');
  var audioEl = new Audio();
  audioEl.preload = 'none';
  audioEl.addEventListener('ended', function () { stopSpeaking(); });

  playBtn.addEventListener('click', function () {
    if (state.speaking) { stopSpeaking(); return; }
    if (state.current >= 0) speakStop(stops[state.current]);
  });

  function audioUrl(s) { return 'audio/' + s.id + '.mp3'; }

  function playRecorded(s) {
    audioEl.src = audioUrl(s);
    return audioEl.play().then(function () {
      state.speaking = true;
      playBtn.textContent = '◼ Stop narration';
      playBtn.classList.add('playing');
      return true;
    });
  }

  function pickVoice() {
    var voices = window.speechSynthesis ? speechSynthesis.getVoices() : [];
    var preferred = ['en-GB', 'en-US', 'en'];
    for (var p = 0; p < preferred.length; p++) {
      for (var v = 0; v < voices.length; v++) {
        if (voices[v].lang && voices[v].lang.indexOf(preferred[p]) === 0) return voices[v];
      }
    }
    return null;
  }

  function speakStop(s) {
    stopSpeaking();
    // Prefer a recorded narration file; fall back to speech synthesis.
    playRecorded(s).catch(function () { speakSynth(s); });
  }

  function speakSynth(s) {
    if (!window.speechSynthesis) {
      showStatus('Speech synthesis is not available on this device.');
      return;
    }
    // Chunk by sentence: iOS Safari silently cuts off long utterances.
    var text = s.name + '. ' + s.story.join(' ');
    if (s.next) text += ' ' + s.next;
    if (s.walk && s.walk.length) text += ' On the way: ' + s.walk.join(' ');
    var plain = text.replace(/<[^>]+>/g, '');
    var sentences = plain.match(/[^.!?]+[.!?]+["']?\s*/g) || [plain];
    var voice = pickVoice();
    state.utterQueue = sentences.map(function (sent) {
      var u = new SpeechSynthesisUtterance(sent.trim());
      if (voice) u.voice = voice;
      u.rate = 0.95;
      u.pitch = 1.0;
      return u;
    });
    state.speaking = true;
    playBtn.textContent = '◼ Stop narration';
    playBtn.classList.add('playing');
    var idx = 0;
    function next() {
      if (!state.speaking || idx >= state.utterQueue.length) { stopSpeaking(); return; }
      var u = state.utterQueue[idx++];
      u.onend = next;
      u.onerror = next;
      speechSynthesis.speak(u);
    }
    next();
  }

  function stopSpeaking() {
    state.speaking = false;
    state.utterQueue = [];
    if (window.speechSynthesis) speechSynthesis.cancel();
    if (!audioEl.paused) audioEl.pause();
    audioEl.removeAttribute('src');
    playBtn.textContent = '▶ Play narration';
    playBtn.classList.remove('playing');
  }

  // Voices load async on some browsers.
  if (window.speechSynthesis && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = function () {};
  }

  /* ---------- Geolocation ---------- */
  var locateBtn = document.getElementById('btn-locate');
  locateBtn.addEventListener('click', function () {
    if (state.watching) { stopWatching(); return; }
    startWatching();
  });

  function startWatching() {
    if (!navigator.geolocation) { showStatus('Geolocation is not available on this device.'); return; }
    state.watchId = navigator.geolocation.watchPosition(onPosition, onPosError, {
      enableHighAccuracy: true, maximumAge: 5000, timeout: 15000
    });
    state.watching = true;
    locateBtn.classList.add('on');
    locateBtn.textContent = '🧭';
    showStatus('GPS tracking on — walk toward a stop and its story will open.');
  }

  function stopWatching() {
    if (state.watchId !== null) navigator.geolocation.clearWatch(state.watchId);
    state.watchId = null;
    state.watching = false;
    locateBtn.classList.remove('on');
    locateBtn.textContent = '📍';
    showStatus('GPS tracking off.');
  }

  function onPosition(pos) {
    var p = [pos.coords.latitude, pos.coords.longitude];
    state.userPos = p;
    if (!userMarker) {
      userMarker = L.marker(p, {
        icon: L.divIcon({ className: 'user-dot', iconSize: [18, 18], iconAnchor: [9, 9] }),
        zIndexOffset: 1000
      }).addTo(map);
      accCircle = L.circle(p, { radius: pos.coords.accuracy, weight: 1, color: '#1d7bf0', opacity: 0.3, fillOpacity: 0.08 }).addTo(map);
      map.setView(p, 17);
    } else {
      userMarker.setLatLng(p);
      accCircle.setLatLng(p).setRadius(pos.coords.accuracy);
    }
    updateSheetDistance();
    updateListDistances();

    // Proximity: nearest unannounced stop within radius
    var nearest = -1, nearestD = Infinity;
    stops.forEach(function (s, i) {
      var d = distanceM(p, s.coords);
      if (d < nearestD) { nearestD = d; nearest = i; }
    });
    if (nearest >= 0 && nearestD <= ARRIVE_RADIUS_M) {
      var id = stops[nearest].id;
      if (!state.arrivedAnnounced[id]) {
        state.arrivedAnnounced[id] = true;
        openStop(nearest, false);
        showStatus('You have arrived: ' + stops[nearest].name);
        if (document.getElementById('chk-autoplay').checked) speakStop(stops[nearest]);
      }
    }
  }

  function onPosError(err) {
    showStatus('GPS error: ' + err.message);
  }

  /* ---------- Stop list drawer ---------- */
  var drawer = document.getElementById('drawer');
  document.getElementById('btn-list').addEventListener('click', function () {
    renderList();
    drawer.classList.remove('hidden');
  });
  document.getElementById('btn-drawer-close').addEventListener('click', function () {
    drawer.classList.add('hidden');
  });
  document.getElementById('tour-intro').textContent = window.TOUR.intro;

  function renderList() {
    var ol = document.getElementById('stop-list');
    ol.innerHTML = '';
    stops.forEach(function (s, i) {
      var li = document.createElement('li');
      if (state.visited[s.id]) li.className = 'visited';
      var d = state.userPos ? fmtDist(distanceM(state.userPos, s.coords)) : '';
      li.innerHTML =
        '<span class="num">' + (i + 1) + '</span>' +
        '<span class="meta"><span class="name">' + s.name + '</span><br><span class="era">' + s.era + '</span></span>' +
        '<span class="listdist" data-i="' + i + '">' + d + '</span>';
      li.addEventListener('click', function () {
        drawer.classList.add('hidden');
        openStop(i, true);
      });
      ol.appendChild(li);
    });
  }
  function updateListDistances() {
    if (drawer.classList.contains('hidden') || !state.userPos) return;
    var els = drawer.querySelectorAll('.listdist');
    els.forEach(function (el) {
      var i = parseInt(el.getAttribute('data-i'), 10);
      el.textContent = fmtDist(distanceM(state.userPos, stops[i].coords));
    });
  }

  document.getElementById('btn-reset').addEventListener('click', function () {
    state.visited = {};
    state.arrivedAnnounced = {};
    saveVisited();
    refreshMarkers();
    renderList();
  });

  /* ---------- Offline download ---------- */
  document.getElementById('btn-offline').addEventListener('click', downloadOffline);

  function tileRange(z, bounds) {
    function lon2x(lon) { return Math.floor((lon + 180) / 360 * Math.pow(2, z)); }
    function lat2y(lat) {
      var r = lat * Math.PI / 180;
      return Math.floor((1 - Math.log(Math.tan(r) + 1 / Math.cos(r)) / Math.PI) / 2 * Math.pow(2, z));
    }
    return {
      xMin: lon2x(bounds.west), xMax: lon2x(bounds.east),
      yMin: lat2y(bounds.north), yMax: lat2y(bounds.south)
    };
  }

  function downloadOffline() {
    if (!('caches' in window)) { showStatus('Offline caching not supported on this browser.'); return; }
    var b = window.TOUR.bounds;
    var urls = [];
    for (var z = 13; z <= 17; z++) {
      var r = tileRange(z, b);
      for (var x = r.xMin; x <= r.xMax; x++) {
        for (var y = r.yMin; y <= r.yMax; y++) {
          urls.push(TILE_URL.replace('{z}', z).replace('{x}', x).replace('{y}', y));
        }
      }
    }
    // Also pull any recorded narration files into the cache (missing ones are fine).
    stops.forEach(function (s) {
      fetch(audioUrl(s)).catch(function () {});
    });
    showStatus('Downloading offline map (' + urls.length + ' tiles)…');
    caches.open(window.TOUR.tileCache || 'porto-tiles-v1').then(function (cache) {
      var done = 0, failed = 0;
      // Fetch sequentially in small batches to be polite to the tile server.
      function batch(i) {
        if (i >= urls.length) {
          showStatus('Offline map ready — ' + done + ' tiles cached' + (failed ? ' (' + failed + ' failed)' : '') + '. The tour now works without a connection.');
          return;
        }
        var slice = urls.slice(i, i + 4);
        Promise.all(slice.map(function (u) {
          return cache.match(u).then(function (hit) {
            if (hit) { done++; return; }
            return fetch(u, { mode: 'cors' }).then(function (resp) {
              if (resp.ok) { done++; return cache.put(u, resp); }
              failed++;
            }).catch(function () { failed++; });
          });
        })).then(function () {
          if ((i / 4) % 10 === 0) showStatus('Downloading offline map… ' + Math.round(100 * (done + failed) / urls.length) + '%');
          setTimeout(function () { batch(i + 4); }, 120);
        });
      }
      batch(0);
    });
  }

  /* ---------- Helpers ---------- */
  function distanceM(a, b) {
    var R = 6371000, toRad = Math.PI / 180;
    var dLat = (b[0] - a[0]) * toRad, dLon = (b[1] - a[1]) * toRad;
    var s = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(a[0] * toRad) * Math.cos(b[0] * toRad) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return R * 2 * Math.atan2(Math.sqrt(s), Math.sqrt(1 - s));
  }
  function fmtDist(m) {
    return m < 1000 ? Math.round(m) + ' m' : (m / 1000).toFixed(1) + ' km';
  }

  var statusTimer = null;
  function showStatus(msg) {
    var el = document.getElementById('status-pill');
    el.textContent = msg;
    el.classList.remove('hidden');
    clearTimeout(statusTimer);
    statusTimer = setTimeout(function () { el.classList.add('hidden'); }, 5000);
  }

  function loadVisited() {
    try { return JSON.parse(localStorage.getItem('porto-visited') || '{}'); }
    catch (e) { return {}; }
  }
  function saveVisited() {
    try { localStorage.setItem('porto-visited', JSON.stringify(state.visited)); } catch (e) {}
  }
  function markVisited(id) {
    state.visited[id] = true;
    saveVisited();
  }

  /* ---------- Service worker ---------- */
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(function () {});
  }
})();
