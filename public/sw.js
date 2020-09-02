var CACHE_NAME = 'expense-tracker-v1';
var urlsToCache = [
	'./static/js/bundle.js',
	'./static/js/0.chunk.js',
	'./static/js/main.chunk.js',
	'./static/js/5.chunk.js',
	'./static/js/2.chunk.js',
	'./static/js/3.chunk.js',
	'./static/js/1.chunk.js',
	'./static/js/4.chunk.js',
	'./manifest.json',
	'./favicon2.ico',
	'./',
	'./index.html',
	'./sw.js'
];

// Install
self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			return cache.addAll(urlsToCache);
		})
	);
});

// Activate
self.addEventListener('activate', function(event) {
	event.waitUntil(
		caches.keys().then(function(cacheNames) {
			return Promise.all(
				cacheNames.filter(function(cacheName) {}).map(function(cacheName) {
					return caches.delete(cacheName);
				})
			);
		})
	);
});

// Fetch
self.addEventListener('fetch', (event) => {
	event.respondWith(
		caches.match(event.request).then(function(resposne) {
			if (response) {
				console.log('Found In Cache');
				console.log(event.request);
				console.log(response);
				return resposne;
			}
			console.log('Not found in cache');
			console.log(event.request);
			return fetch(event.request);
		})
	);
});

// self.addEventListener('install', function(event) {
// 	// Perform install steps
// 	event.waitUntil(
// 		caches
// 			.open(CACHE_NAME)
// 			.then(function(cache) {
// 				console.log('Opened cache');
// 				return cache.addAll(urlsToCache);
// 			})
// 			.catch((err) => console.log('err', err))
// 	);
// });

// self.addEventListener('fetch', function(event) {
// 	if (!navigator.onLine) {
// 		event.respondWith(
// 			caches
// 				.match(event.request)
// 				.then(function(response) {
// 					// Cache hit - return response
// 					if (response) {
// 						return response;
// 					}
// 					let requestUrl = event.request.clone();
// 					return fetch(requestUrl);
// 				})
// 				.catch((err) => console.log('err', err))
// 		);
// 	}
// });

// addEventListener('fetch', function(event) {
// 	if (!navigator.onLine) {
// 		event.respondWith(
// 			caches.match(event.request).then(function(response) {
// 				if (response) {
// 					return response; // if valid response is found in cache return it
// 				} else {
// 					return fetch(event.request) //fetch from internet
// 						.then(function(res) {
// 							return caches.open(CACHE_NAME).then(function(cache) {
// 								cache.put(event.request.url, res.clone()); //save the response for future
// 								return res; // return the fetched data
// 							});
// 						})
// 						.catch(function(err) {
// 							// fallback mechanism
// 							return caches
// 								.open(CACHE_CONTAINING_ERROR_MESSAGES)
// 								.then(function(cache) {
// 									return cache.match('/offline.html');
// 								})
// 								.catch((err) => console.log('err', err));
// 						});
// 				}
// 			})
// 		);
// 	}
// });
