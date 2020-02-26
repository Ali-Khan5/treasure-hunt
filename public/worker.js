// let CACHE_NAME = 'Treasure Finding';
// let urlsToCache = [
//   '/',
//   '/completed'
// ];

// // Install a service worker
// self.addEventListener('install', event => {
//   // Perform install steps
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then(function(cache) {
//         console.log('Opened cache');
//         return cache.addAll(urlsToCache);
//       })
//   );
// });

// // Cache and return requests
// self.addEventListener('fetch', event => {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function(response) {
//         // Cache hit - return response
//         if (response) {
//           return response;
//         }
//         return fetch(event.request);
//       }
//     )
//   );
// });

// // Update a service worker
// self.addEventListener('activate', event => {
//   let cacheWhitelist = ['Treasure Finding'];
//   event.waitUntil(
//     caches.keys().then(cacheNames => {
//       return Promise.all(
//         cacheNames.map(cacheName => {
//           if (cacheWhitelist.indexOf(cacheName) === -1) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });

self.addEventListener('install',function(event){
    console.log('service working is installing,',event)
})
self.addEventListener('activate',function(event){
    console.log('service worker activating ',event);
    return self.clients.claim();
})

self.addEventListener('fetch',function(event){
    console.log('fetching something',event);
    event.respondWith(fetch(event.request))})