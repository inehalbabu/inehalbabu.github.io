'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6b1cdc4ec85e2a2f626da60df51166ab",
"assets/AssetManifest.bin.json": "96b99626362a2df65317bbe986ceba8b",
"assets/AssetManifest.json": "1193d34b6ac8c74060fb72c322d4882f",
"assets/assets/animations/intro_animation.riv": "a61dfb298b1099ae5160671ef3cf7249",
"assets/assets/fonts/Preahvihear-Regular.ttf": "b728ff1cdead5239b67535d2073baf70",
"assets/assets/icons/aws.svg": "71a20edd4b10d155a634d7efc6827532",
"assets/assets/icons/docker.svg": "8fd5c2c8ba202e03937af0ee5bceac6a",
"assets/assets/icons/firebase.svg": "ab7d48c559d630e419778d14e228988b",
"assets/assets/icons/flutter.svg": "9df4f9d9c9a790e3d95e72f1584e2187",
"assets/assets/icons/git.png": "91e38c1fb4b2410c06d56542d09086d0",
"assets/assets/icons/github.svg": "b8aeb451034beeaf0148cfbd7d9d8226",
"assets/assets/icons/go.png": "4121d0e7d0eabfd18efc3cc2c49744b9",
"assets/assets/icons/insta.svg": "97bbc4283f38a1eb007226e05da1d86b",
"assets/assets/icons/k8.svg": "92f74c5387269bc2c41d44935990fb75",
"assets/assets/icons/linkedin.svg": "681c4fa9689d5e3c0a36270793d71244",
"assets/assets/icons/linux.png": "e1e82f42a889005f38806051f50b58c9",
"assets/assets/icons/mongo.svg": "5929aeee3ce5495b9475613e2fae694f",
"assets/assets/icons/node.svg": "805c64b7e3dcac55f50a38d7d13c6621",
"assets/assets/icons/python.svg": "0b948ab5dd3f9e988cd9130da860408f",
"assets/assets/icons/tf.svg": "a8e1846d166da9c0f14034a265c87986",
"assets/assets/icons/ts.svg": "265f332738c918914d039db95271af46",
"assets/assets/icons/wave-logo.png": "729699e60bfd97e25b8dd646103306e6",
"assets/assets/icons/youtube.svg": "052394d191ee28ed25bf1adf50121bcf",
"assets/assets/images/bookmark_image.png": "37c960601041899f682a60d84e4587c7",
"assets/assets/images/bulb_image.png": "3a63566961962814a4655345b630457e",
"assets/assets/images/cup_image.png": "ec0c90ea4804d05bf8855c3164ad5825",
"assets/assets/images/picker_image.png": "a4a5d9191de6dfd8776bee2968f95ba4",
"assets/assets/images/self.jpg": "63fcbf05260974170336ec537619af1f",
"assets/FontManifest.json": "91a3b378b34fa885f5a6700f6894d35b",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "dffb1f3d927d723cf32a537921ffc973",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/social_media_flutter/fonts/icons.ttf": "7dae615e8df7bf5bf381bf713850ac33",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "34b82bf5eaf0baa3e4905bb96d8898cd",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "bf468bd653ca4cdbfe2c73d47e6824ee",
"icons/Icon-192.png": "6773ac602fab9ab89c0d1345cea61057",
"icons/Icon-512.png": "d749e14e4486bd260f2478a22dab9290",
"icons/Icon-maskable-192.png": "6773ac602fab9ab89c0d1345cea61057",
"icons/Icon-maskable-512.png": "d749e14e4486bd260f2478a22dab9290",
"index.html": "09e421ef335dbab6a87e49be5deefbc8",
"/": "09e421ef335dbab6a87e49be5deefbc8",
"main.dart.js": "9eee0a41ebae6c210dd713343b708dab",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
