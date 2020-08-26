var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [];

self.addEventListener('install', function(event) {
	// Perform install steps
	event.waitUntil(
		caches
			.open(CACHE_NAME)
			.then(function(cache) {
				console.log('Opened cache');
				return cache.addAll(arr(urlsToCache));
			})
			.catch((err) => console.log('err', err))
	);
});

self.addEventListener('fetch', function(event) {
	if (!navigator.onLine) {
		event.respondWith(
			caches
				.match(event.request)
				.then(function(response) {
					// Cache hit - return response
					if (response) {
						return response;
					}
					let requestUrl = event.request.clone();
					return fetch(requestUrl);
				})
				.catch((err) => console.log('err', err))
		);
	}
});
