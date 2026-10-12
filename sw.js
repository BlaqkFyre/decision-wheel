// Decision Wheel offline support.
// The app page and its data files (data/*.js) are fetched fresh whenever you're online (so you always get the latest version),
// and the last copies are kept so the app still opens with no internet.
const CACHE = "decision-wheel-v2";
const DATA = ["./data/topics.js", "./data/people.js", "./data/research.js", "./data/reading.js", "./data/churches.js"];
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png", ...DATA];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// network first (skipping the browser's short-term cache), falling back to the saved copy when offline.
// Saved under the address without "?v=", so an offline copy is found whatever version number the page asks for.
function fresh(req, key) {
  return fetch(req, { cache: "no-cache" }).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(key, copy)); }
    return res;
  }).catch(() => caches.match(key));
}
self.addEventListener("fetch", e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== location.origin) return; // only this site's own files
  if (req.mode === "navigate" || url.pathname.endsWith("/index.html")) { e.respondWith(fresh(req, "./index.html")); return; }
  if (/\/data\/[a-z]+\.js$/.test(url.pathname)) { e.respondWith(fresh(req, "./data/" + url.pathname.split("/").pop())); return; }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req)));
});
