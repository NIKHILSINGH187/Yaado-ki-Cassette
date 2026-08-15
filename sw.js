// Minimal service worker — required for the browser to treat this as an installable PWA.
// It doesn't cache anything yet; safe to expand later for offline support.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // pass-through for now
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
