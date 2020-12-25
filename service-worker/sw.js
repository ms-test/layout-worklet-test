// vim: set ts=2 sw=2 tw=0 et :

self.addEventListener('install', event => {
  event.waitUntil(caches.open('v1').then(cache => cache.addAll([
    './default.html',
    './default.css',
    './default.js',
  ])));
});

const excludedChildPaths = [
'index.html',
'service-worker.js',
]

function dummiedURL(url) {
  return url.startsWith(self.registration.scope) && excludedChildPaths.every(path => url != new URL(path, self.location));
  //return url == new URL('index.html', location) || url == new URL('service-worker.js', location);
}

self.addEventListener('fetch', event => {
  if ( dummiedURL(event.request.url) ) {
    return event.respondWith(new Response('dummy'));
  } else {
    console.log(event);
  }
});
