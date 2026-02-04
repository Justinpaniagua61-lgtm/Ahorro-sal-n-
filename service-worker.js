self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("ahorro-ios").then(cache => {
      return cache.addAll([
        "./ahorro_tesoreria.html",
        "./manifest.json"
      ]);
    })
  );
});
