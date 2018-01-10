var CACHE_NAME = '{{CACHE_NAME}}';
var urlsToCache = [
  '{{CACHE_URLS}}',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('{{CACHE_NAME}}')
      .then(cache => {
        console.log('Opened cache:', cache)
        return cache.addAll(urlsToCache)
      })
  )
})
