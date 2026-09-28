/* Client Interview Practice — browser app. Vanilla JS, no build step. */
(() => {
  'use strict';
  const API = window.CLINIC_API_BASE || '';
  const $ = (s) => document.querySelector(s);
  const views = { gate: $('#view-gate'), pick: $('#view-pick'), room: $('#view-room'), done: $('#view-done') };
  const el = {
    gateForm: $('#gate-form'), gatePass: $('#gate-pass'), gateError: $('#gate-error'),
    studentName: $('#student-name'), personaList: $('#persona-list'), pickError: $('#pick-error'),
    avatar: $('#avatar'), initials: $('#avatar-initials'), clientName: $('#client-name'), clientMeta: $('#client-meta'), clientIntake: $('#client-intake'),
    status: $('#status'), transcript: $('#transcript'), caption: $('#live-caption'),
    talk: $('#btn-talk'), talkLabel: $('#talk-label'), typeInput: $('#type-input'), send: $('#btn-send'), micNote: $('#mic-note'), roomError: $('#room-error'), end: $('#btn-end'),
    doneText: $('#done-transcript'), copy: $('#btn-copy'), download: $('#btn-download'), again: $('#btn-again'),
  };

  const state = {
    pass: sessionStorage.getItem('clinic.pass') || '',
    session: null, persona: null, tts: 'browser', voicePref: null,
    busy: false, listening: false, holding: false, finalText: '', interimText: '',
  };

  // ---------- plumbing ----------
  async function api(path, { method = 'GET', body, headers = {} } = {}) {
    const res = await fetch(API + path, {
      method, headers: { 'content-type': 'application/json', 'x-clinic-pass': state.pass, ...headers },
      body: body === undefined ? undefined : JSON.stringify(body),
    });
    let data = {};
    try { data = await res.json(); } catch { /* non-JSON */ }
    if (res.status === 401) { state.pass = ''; sessionStorage.removeItem('clinic.pass'); show('gate'); }
    if (!res.ok) throw Object.assign(new Error(data.error || `Request failed (${res.status})`), { status: res.status, code: data.code });
    return data;
  }
  function show(name) { for (const [k, v] of Object.entries(views)) v.hidden = k !== name; window.scrollTo({ top: 0 }); }
  function setError(node, msg) { node.textContent = msg || ''; node.hidden = !msg; }
  function setStatus(msg) { el.status.textContent = msg; }
  function initialsOf(name) { return name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join(''); }

  // ---------- audio out ----------
  const player = new Audio();
  player.preload = 'auto';
  let unlocked = false;
  const SILENT = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=';
  function unlockAudio() { // iOS: the first play() must happen inside a user gesture
    if (unlocked) return; unlocked = true;
    try { player.src = SILENT; player.play().catch(() => {}); } catch { /* ignore */ }
    try { if ('speechSynthesis' in window) { const u = new SpeechSynthesisUtterance(' '); u.volume = 0; speechSynthesis.speak(u); } } catch { /* ignore */ }
  }
  function stopSpeaking() {
    try { player.pause(); player.currentTime = 0; } catch { /* ignore */ }
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    el.avatar.classList.remove('speaking');
  }
  function speak(text, audio, mime) {
    stopSpeaking();
    return new Promise((resolve) => {
      const done = () => { el.avatar.classList.remove('speaking'); resolve(); };
      if (audio) {
        player.src = `data:${mime || 'audio/mpeg'};base64,${audio}`;
        player.onplay = () => el.avatar.classList.add('speaking');
        player.onended = done; player.onerror = () => { browserSpeak(text).then(done); };
        player.play().catch(() => { el.avatar.classList.remove('speaking'); resolve(); });
      } else {
        browserSpeak(text).then(done);
      }
    });
  }
  function browserSpeak(text) {
    return new Promise((resolve) => {
      if (!('speechSynthesis' in window)) return resolve();
      const u = new SpeechSynthesisUtterance(text);
      const pref = state.voicePref || {};
      u.lang = pref.lang || 'en-US'; u.rate = pref.rate || 0.9; u.pitch = pref.pitch || 1;
      const voices = speechSynthesis.getVoices();
      const wanted = (pref.preferNames || []);
      const v = wanted.map((n) => voices.find((x) => x.name === n || x.name.startsWith(n))).find(Boolean)
        || voices.find((x) => x.lang === u.lang && /female|samantha|karen|victoria|allison|ava/i.test(x.name))
        || voices.find((x) => x.lang === u.lang) || voices.find((x) => x.lang.startsWith('en'));
      if (v) u.voice = v;
      u.onstart = () => el.avatar.classList.add('speaking');
      u.onend = resolve; u.onerror = resolve;
      speechSynthesis.speak(u);
    });
  }
  if ('speechSynthesis' in window) speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();

  // ---------- speech in ----------
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  let rec = null;
  function ensureRecognizer() {
    if (rec || !SR) return rec;
    rec = new SR();
    rec.lang = 'en-US'; rec.continuous = true; rec.interimResults = true; rec.maxAlternatives = 1;
    rec.onresult = (e) => {
      let interim = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const r = e.results[i];
        if (r.isFinal) state.finalText += (state.finalText ? ' ' : '') + r[0].transcript.trim();
        else interim += r[0].transcript;
      }
      state.interimText = interim.trim();
      const shown = [state.finalText, state.interimText].filter(Boolean).join(' ');
      el.caption.textContent = shown ? `“${shown}”` : 'Listening…'; el.caption.hidden = false;
    };
    rec.onerror = (e) => {
      if (e.error === 'not-allowed' || e.error === 'service-not-allowed') {
        micUnavailable('The microphone is blocked for this page. Allow it in your browser’s site settings, or type your questions below.');
        stopListening(false);
      } else if (e.error !== 'no-speech' && e.error !== 'aborted') {
        setError(el.roomError, `Speech recognition problem (${e.error}). You can type instead.`);
      }
    };
    rec.onend = () => {
      if (state.listening && state.holding) { try { rec.start(); } catch { /* already restarting */ } return; } // Safari stops on silence; keep going while held
      if (state.listening) finishListening();
    };
    return rec;
  }
  function micUnavailable(msg) { el.talk.disabled = true; el.talkLabel.textContent = 'Type below'; el.micNote.textContent = msg; el.micNote.hidden = false; el.typeInput.focus(); }
  function startListening() {
    if (state.busy || state.listening || !ensureRecognizer()) return;
    unlockAudio(); cancelQueue();
    state.finalText = ''; state.interimText = ''; state.listening = true; state.holding = true;
    el.talk.classList.add('listening'); el.talk.setAttribute('aria-pressed', 'true'); el.talkLabel.textContent = 'Listening…';
    el.caption.textContent = 'Listening…'; el.caption.hidden = false; setStatus('Listening…'); setError(el.roomError, '');
    try { rec.start(); } catch { /* start() throws if already started */ }
  }
  function stopListening(send = true) {
    if (!state.listening) return;
    state.holding = false;
    if (!send) { state.listening = false; try { rec.abort(); } catch { /* ignore */ } resetTalkButton(); return; }
    try { rec.stop(); } catch { finishListening(); }
    // Do not wait for the recognizer to wind down: give a final result a quarter second to land,
    // then send whatever we have (final plus interim text). Waiting for onend cost up to a second.
    setTimeout(() => { if (state.listening && !state.holding) finishListening(); }, 250);
  }
  function finishListening() {
    if (!state.listening) return;
    state.listening = false; resetTalkButton();
    try { rec.abort(); } catch { /* ignore */ }
    const text = [state.finalText, state.interimText].filter(Boolean).join(' ').trim();
    el.caption.hidden = true; el.caption.textContent = '';
    if (text) sendTurn(text); else setStatus('I didn’t catch that. Hold the button and try again, or type.');
  }
  function resetTalkButton() { el.talk.classList.remove('listening'); el.talk.setAttribute('aria-pressed', 'false'); el.talkLabel.textContent = 'Hold to talk'; }

  // hold-to-talk: pointer + space bar
  el.talk.addEventListener('pointerdown', (e) => { e.preventDefault(); el.talk.setPointerCapture?.(e.pointerId); startListening(); });
  const release = (e) => { e.preventDefault?.(); if (state.holding) stopListening(true); };
  el.talk.addEventListener('pointerup', release); el.talk.addEventListener('pointercancel', release); el.talk.addEventListener('pointerleave', (e) => { if (state.holding && e.pointerType === 'mouse' && e.buttons === 0) release(e); });
  el.talk.addEventListener('contextmenu', (e) => e.preventDefault());
  document.addEventListener('keydown', (e) => {
    if (e.code !== 'Space' || e.repeat || views.room.hidden) return;
    const t = e.target; if (t && (t.tagName === 'TEXTAREA' || t.tagName === 'INPUT' || t.isContentEditable)) return;
    e.preventDefault(); startListening();
  });
  document.addEventListener('keyup', (e) => { if (e.code === 'Space' && state.holding) { e.preventDefault(); stopListening(true); } });
  window.addEventListener('blur', () => { if (state.holding) stopListening(true); });

  // typing
  el.send.addEventListener('click', () => { const t = el.typeInput.value.trim(); if (t) { unlockAudio(); el.typeInput.value = ''; sendTurn(t); } });
  el.typeInput.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); el.send.click(); } });

  // ---------- transcript ----------
  function addBubble(role, text, { replay = false } = {}) {
    const li = document.createElement('li');
    li.className = `bubble ${role}`;
    if (role !== 'system') {
      const who = document.createElement('span'); who.className = 'who';
      who.textContent = role === 'student' ? (state.session?.studentName || 'You') : (state.persona?.preferredName || state.persona?.name || 'Client');
      li.appendChild(who);
    }
    li.appendChild(document.createTextNode(text));
    if (replay && role === 'client') {
      const b = document.createElement('button'); b.className = 'replay'; b.type = 'button'; b.title = 'Play again'; b.setAttribute('aria-label', 'Play this line again'); b.textContent = '↻';
      b.addEventListener('click', async () => { unlockAudio(); if (state.busy) return; cancelQueue(); await speakStreamed(text); });
      li.appendChild(b);
    }
    el.transcript.appendChild(li);
    el.transcript.scrollTop = el.transcript.scrollHeight;
    return li;
  }

  // ---------- streamed playback ----------
  // Sentences arrive as the client "thinks"; each is spoken as soon as its audio is ready, in order.
  const queue = { items: [], playing: false, cancelled: false, resolveDrain: null };
  function enqueue(item) { queue.items.push(item); if (!queue.playing) playNext(); }
  async function playNext() {
    if (queue.cancelled) { queue.items = []; queue.playing = false; queue.resolveDrain?.(); return; }
    const item = queue.items.shift();
    if (!item) { queue.playing = false; queue.resolveDrain?.(); return; }
    queue.playing = true;
    await speak(item.text, item.audio, item.mime);
    playNext();
  }
  function cancelQueue() { queue.cancelled = true; queue.items = []; stopSpeaking(); }
  function drained() { return queue.playing ? new Promise((r) => { queue.resolveDrain = r; }) : Promise.resolve(); }

  // Parse a fetch() body as Server-Sent Events. onEvent(name, data) for each event.
  async function readSse(res, onEvent) {
    const reader = res.body.getReader(); const dec = new TextDecoder(); let buf = '';
    for (;;) {
      const { value, done } = await reader.read();
      if (done) break;
      buf += dec.decode(value, { stream: true });
      let idx;
      while ((idx = buf.indexOf('\n\n')) >= 0) {
        const chunk = buf.slice(0, idx); buf = buf.slice(idx + 2);
        let name = 'message'; const dataLines = [];
        for (const line of chunk.split('\n')) { if (line.startsWith('event:')) name = line.slice(6).trim(); else if (line.startsWith('data:')) dataLines.push(line.slice(5).trim()); }
        if (dataLines.length) { try { onEvent(name, JSON.parse(dataLines.join('\n'))); } catch { /* ignore malformed */ } }
      }
    }
  }

  // ---------- flow ----------
  async function sendTurn(text) {
    if (state.busy || !state.session) return;
    state.busy = true; el.talk.disabled = true; el.send.disabled = true; setError(el.roomError, '');
    addBubble('student', text);
    const who = state.persona.preferredName || state.persona.name;
    setStatus(`${who} is thinking…`); el.avatar.classList.add('thinking');
    queue.cancelled = false; queue.items = [];
    let bubble = null; const spoken = new Map(); let finalText = '';
    // If the first sentence is slow to arrive, play one of the client's short "thinking" sounds so
    // the pause feels human. One per turn, never the same one twice running.
    let gotFirst = false;
    const fillerTimer = setTimeout(() => {
      if (gotFirst || !state.fillers?.length) return;
      const choices = state.fillers.filter((f) => f.text !== state.lastFiller);
      const f = choices[Math.floor(Math.random() * choices.length)] || state.fillers[0];
      state.lastFiller = f.text;
      enqueue({ text: '', audio: f.audio, mime: f.mime });
    }, 550);
    try {
      const res = await fetch(API + '/api/turn/stream', { method: 'POST', headers: { 'content-type': 'application/json', 'x-clinic-pass': state.pass }, body: JSON.stringify({ sessionId: state.session.id, text }) });
      if (!res.ok || !res.body || !(res.headers.get('content-type') || '').includes('text/event-stream')) {
        // older server or an error status: fall back to the one-shot endpoint
        let data = {}; try { data = await res.json(); } catch { /* ignore */ }
        if (res.status === 401) { state.pass = ''; sessionStorage.removeItem('clinic.pass'); show('gate'); }
        if (!res.ok) throw Object.assign(new Error(data.error || `Request failed (${res.status})`), { status: res.status, code: data.code });
        const r = await api('/api/turn', { method: 'POST', body: { sessionId: state.session.id, text } });
        el.avatar.classList.remove('thinking'); addBubble('client', r.text, { replay: true }); setStatus(`${who} is speaking…`);
        await speak(r.text, r.audio, r.mime); finalText = r.text;
        setStatus(r.remaining <= 5 ? `Your turn. (${r.remaining} exchanges left in this interview.)` : 'Your turn.');
        return;
      }
      let remaining = null; let streamError = null;
      await readSse(res, (name, data) => {
        if (name === 'sentence') {
          gotFirst = true; clearTimeout(fillerTimer);
          el.avatar.classList.remove('thinking');
          if (!bubble) { bubble = addBubble('client', data.text, { replay: false }); } else { bubble.append(' ' + data.text); el.transcript.scrollTop = el.transcript.scrollHeight; }
          spoken.set(data.i, { text: data.text });
        } else if (name === 'audio') {
          const s = spoken.get(data.i) || { text: '' };
          setStatus(`${who} is speaking…`);
          enqueue({ text: s.text, audio: data.audio, mime: data.mime });
        } else if (name === 'done') {
          finalText = data.text; remaining = data.remaining;
        } else if (name === 'error') { streamError = new Error(data.error); }
      });
      if (streamError) throw streamError;
      await drained();
      if (bubble && finalText) { // make the bubble match the saved transcript and add the replay control
        const li = bubble; li.remove(); addBubble('client', finalText, { replay: true });
      }
      setStatus(remaining !== null && remaining <= 5 ? `Your turn. (${remaining} exchanges left in this interview.)` : 'Your turn.');
    } catch (err) {
      clearTimeout(fillerTimer);
      el.avatar.classList.remove('thinking');
      if (err.code === 'ended' || err.code === 'session_limit') { setStatus(err.message); addBubble('system', err.message); }
      else { setError(el.roomError, err.message); setStatus('Something went wrong. Try again.'); }
    } finally {
      clearTimeout(fillerTimer);
      state.busy = false; if (SR && !el.micNote.textContent) el.talk.disabled = false; el.send.disabled = false;
    }
  }

  // Speak a known client line (opening or replay) sentence by sentence through the audio queue.
  async function speakStreamed(text) {
    queue.cancelled = false; queue.items = [];
    const parts = new Map();
    try {
      const res = await fetch(API + '/api/speak/stream', { method: 'POST', headers: { 'content-type': 'application/json', 'x-clinic-pass': state.pass }, body: JSON.stringify({ sessionId: state.session.id, text }) });
      if (!res.ok || !res.body || !(res.headers.get('content-type') || '').includes('text/event-stream')) { await speak(text, null); return; }
      await readSse(res, (name, data) => {
        if (name === 'sentence') parts.set(data.i, data.text);
        else if (name === 'audio') enqueue({ text: parts.get(data.i) || '', audio: data.audio, mime: data.mime });
      });
      await drained();
    } catch { await speak(text, null); }
  }

  async function startSession(personaId) {
    setError(el.pickError, '');
    unlockAudio();
    const studentName = el.studentName.value.trim();
    if (studentName) sessionStorage.setItem('clinic.student', studentName);
    try {
      const r = await api('/api/session', { method: 'POST', body: { personaId, studentName, stream: true } });
      enterRoom(r.session); state.fillers = r.fillers || [];
      addBubble('client', r.opening.text, { replay: true });
      setStatus(`${state.persona.preferredName || state.persona.name} is speaking…`);
      if (r.opening.audio) await speak(r.opening.text, r.opening.audio, r.opening.mime); else await speakStreamed(r.opening.text);
      setStatus('Your turn. Hold the button and introduce yourself.');
    } catch (err) { setError(el.pickError, err.message); }
  }

  function enterRoom(session) {
    state.session = session; state.persona = session.persona; state.tts = session.tts; state.voicePref = session.voice;
    sessionStorage.setItem('clinic.session', session.id);
    el.initials.textContent = initialsOf(session.persona.name);
    el.clientName.textContent = session.persona.name;
    el.clientMeta.textContent = `${session.persona.age} · ${session.persona.town}`;
    el.clientIntake.textContent = session.persona.intakeNote;
    el.transcript.innerHTML = ''; setError(el.roomError, ''); el.caption.hidden = true;
    if (!SR) micUnavailable('Voice input is not supported in this browser. Chrome, Edge, or Safari can listen to you; here, type your questions below.');
    else { el.talk.disabled = false; el.micNote.hidden = true; el.micNote.textContent = ''; el.talkLabel.textContent = 'Hold to talk'; }
    show('room');
  }

  async function resumeSession(id) {
    try {
      const r = await api(`/api/session/${id}`);
      if (r.session.ended) { sessionStorage.removeItem('clinic.session'); return false; }
      enterRoom(r.session); state.fillers = r.fillers || [];
      for (const t of r.session.turns) addBubble(t.role, t.text, { replay: t.role === 'client' });
      addBubble('system', 'Interview resumed.');
      setStatus('Your turn.');
      return true;
    } catch { sessionStorage.removeItem('clinic.session'); return false; }
  }

  let endArmed = null;
  async function endSession() {
    if (!state.session) return;
    if (!endArmed) { // two taps, no native dialog: first arms, second within 5 s confirms
      el.end.textContent = 'Tap again to end';
      endArmed = setTimeout(() => { endArmed = null; el.end.textContent = 'End interview'; }, 5000);
      return;
    }
    clearTimeout(endArmed); endArmed = null; el.end.textContent = 'End interview';
    cancelQueue(); if (state.listening) stopListening(false);
    try {
      const r = await api(`/api/session/${state.session.id}/end`, { method: 'POST' });
      el.doneText.textContent = r.transcript;
      const blob = new Blob([r.transcript], { type: 'text/plain' });
      el.download.href = URL.createObjectURL(blob); el.download.download = `interview-${state.session.id}.txt`;
      sessionStorage.removeItem('clinic.session'); state.session = null;
      show('done');
    } catch (err) { setError(el.roomError, err.message); }
  }

  async function loadPersonas() {
    setError(el.pickError, '');
    const r = await api('/api/personas');
    state.tts = r.tts;
    el.personaList.innerHTML = '';
    for (const p of r.personas) {
      const card = document.createElement('article'); card.className = 'pcard';
      const h = document.createElement('h3'); h.textContent = p.name; card.appendChild(h);
      const meta = document.createElement('div'); meta.className = 'meta'; meta.textContent = `${p.age} · ${p.town}`; card.appendChild(meta);
      const note = document.createElement('p'); note.className = 'intake-note'; note.textContent = p.intakeNote; card.appendChild(note);
      const b = document.createElement('button'); b.className = 'btn primary'; b.textContent = 'Begin interview'; b.addEventListener('click', () => startSession(p.id)); card.appendChild(b);
      el.personaList.appendChild(card);
    }
    el.studentName.value = sessionStorage.getItem('clinic.student') || '';
    show('pick');
  }

  el.gateForm.addEventListener('submit', async (e) => {
    e.preventDefault(); setError(el.gateError, '');
    const pass = el.gatePass.value;
    try {
      await api('/api/login', { method: 'POST', body: { passcode: pass }, headers: { 'x-clinic-pass': pass } });
      state.pass = pass; sessionStorage.setItem('clinic.pass', pass); el.gatePass.value = '';
      await loadPersonas();
    } catch (err) { setError(el.gateError, err.message); }
  });
  el.end.addEventListener('click', endSession);
  el.again.addEventListener('click', () => loadPersonas().catch((err) => setError(el.pickError, err.message)));
  el.copy.addEventListener('click', async () => { try { await navigator.clipboard.writeText(el.doneText.textContent); el.copy.textContent = 'Copied'; setTimeout(() => (el.copy.textContent = 'Copy transcript'), 1500); } catch { /* ignore */ } });

  // ---------- boot ----------
  (async () => {
    const existing = sessionStorage.getItem('clinic.session');
    try {
      if (!state.pass) { const probe = await api('/api/login', { method: 'POST', body: { passcode: '' } }); if (probe.gated) return show('gate'); } // no stored passcode: is there a gate?
      if (existing && await resumeSession(existing)) return;
      await loadPersonas();
    } catch { show('gate'); }
  })();
})();
