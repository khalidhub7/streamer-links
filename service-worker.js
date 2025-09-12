// Basic service worker for caching static assets
const CACHE_NAME = 'vinsmoke-links-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/img/wallpaperflare.com_wallpaper.jpg',
  '/img/logoo.jpeg',
  '/img/icons/instagram-optimized.png',
  '/img/icons/kick-optimized.png',
  '/img/icons/whatsapp-optimized.png',
  '/img/icons/tik-tok-optimized.png',
  '/img/icons/discord-optimized.png'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});