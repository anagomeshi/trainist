var CACHE_NAME = 'trainist-v1.3';
var urlsToCache = [
    'icon/gear.svg',
    'icon/schedule.png',
    'index.html',
    'script.js',
    'style.css'
];

// インストール処理
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
                return cache.addAll(urlsToCache);
        })
    );
    self.skipWaiting();
});

// アクティベート処理
self.addEventListener('activate', function(event) {
    var cacheWhitelist = [CACHE_NAME];

    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(function(){
            return self.clients.claim();
        })
    );
});

// リソースフェッチ時のキャッシュロード処理
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function(response) {
                return response || fetch(event.request);
            })
    );
});
