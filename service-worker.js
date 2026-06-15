const CACHE_NAME = 'neon-mobility-v1';
// Hafızaya alınacak dosyaların listesi
const ASSETS = [
  './',
  './index.html'
];

// Uygulama yüklenirken dosyaları hafızaya al
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// İnternet yoksa verileri hafızadan getir
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});