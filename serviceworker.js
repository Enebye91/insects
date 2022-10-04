// Den gør ikke noget, men SKAL være der! 
// for at være installable. 

// self.addEventListener("fetch", function (event) {
//    event.respondWith(fetch(event.request)); 
// }); 

const cacheName = "cache-insects";
self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(["/insects/", "/insects/butterflies.jpg", "/insects/butterfly.jpg", "/insects/dragonfly.jpg"])
        })
    )
})

// hvis websitet indlæses, cache 

self.addEventListener("fetch", function(event) {
    event.responWith(
        fetch(event.request).catch(() =>
        caches.open(cacheName).then(cache=>cache.match(event.request))
        )
    )
}) 