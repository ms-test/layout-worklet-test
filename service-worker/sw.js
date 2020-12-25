// vim: set ts=2 sw=2 tw=0 et :

self.addEventListener('install', event => {
  event.waitUntil(caches.open('v1').then(cache => cache.addAll([
    './default.html',
    './default.css',
    './default.js',
  ])));
});

self.addEventListener('fetch', event => {
});
