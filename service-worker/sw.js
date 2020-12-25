// vim: set ts=2 sw=2 tw=0 et :

self.addEventListener('install', event => {
  event.waitUntil(caches.open('v1').then(cache => cache.addAll([
    './default.html',
    './default.css',
    './default.js',
  ])));
});

self.addEventListener('fetch', event => {
  if ( ! event.request.url.startsWith(self.registration.scope) ) {
    console.log(event);
  } else if ( event.request.url != new URL('index.html', location) && event.request.url != new URL('service-worker.js', location) ) {
    console.log(event);
  } else {
    return event.respondWith(new Response('dummy'));
  }
});
