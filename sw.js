/* Ciel · Corbion — service worker
   Stratégie : cache du shell applicatif, réseau d'abord pour les données. */
const CACHE = "ciel-corbion-v1";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icon.svg"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Les données météo/air/radar/tuiles : toujours réseau (jamais de cache périmé).
  const liveHosts = ["open-meteo.com", "rainviewer.com", "tile.openstreetmap.org", "lightningmaps.org"];
  if (liveHosts.some(h => url.hostname.includes(h))) {
    e.respondWith(fetch(req).catch(() => caches.match(req)));
    return;
  }

  // Shell + CDN (fonts, leaflet, suncalc) : cache d'abord, réseau en secours.
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
      return res;
    }).catch(() => hit))
  );
});
