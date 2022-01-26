//SW test-vue

const CACHE_NAME = "v7_counter_app";
const urlsToCache = [
    "./styles/styles.css",
    "./js/main.js",
    "./icons/favicon.png",
    "./icons/icon.png"
];

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
         return cache.addAll(urlsToCache);
        }).catch(
            err => console.log(err)
        )
    )
});

// Cache First Policy
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {  // CACHE HIT
                    return response;
                } else {    // CACHE MISS
                    return fetch(event.request);
                }
            })
    );
});