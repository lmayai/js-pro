const VERSION = "v1";

self.addEventListener("install", event => {
  event.waitUntil(precache());
});

self.addEventListener("fetch", event => {
  const request = event.request;

  //get
  if (request.method !== "GET") {
    return;
  }

  //Buscar en cache
  event.respondWith(cachedResponse(request));

  //actualizar el cache
  event.waitUntil(updateCache(request));
});

async function precache() {
  const cache = await caches.open(VERSION);
  return cache.addAll([
    // "/",
    // "/index.html",
    // "/assets/index.js",
    // "/assets/MediaPlayer.js",
    // "/assets/plugins/AutoPlay.js",
    // "/assets/plugins/AutoPause.ts",
    // "/assets/index.css",
    // "/assets/BigBuckBunnyA.mp4"
  ]);
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request); //Le corresponde algo en el cache
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request); //Le corresponde algo en el cache
  return cache.put(request, response);
}