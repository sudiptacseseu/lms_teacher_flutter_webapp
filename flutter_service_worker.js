'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2b3725265051416dddb8a9536ca0ad69",
".git/config": "a185382d75c3abe2c3cd5e7eb472e714",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "07682225e8d1541e7d223d6d4d18d395",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "31668a73567d63dc7ef3ddce2b32d0a9",
".git/logs/refs/heads/master": "31668a73567d63dc7ef3ddce2b32d0a9",
".git/logs/refs/remotes/origin/master": "9e72d9f4d8d754078efd0b45ea6c8c3c",
".git/objects/00/30dd7645f0f828eb6fef304f19a8c6e4fa332c": "a33af3a0dba1409f2b45af22c0c2fed1",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/14/b9dcfa9e2f9aca4846653218610146dad3b3f7": "db0cd70cd51fd90b15fc6ac1bee543d4",
".git/objects/18/c4ad9da3a132b4b1eee2fa6f34dc785012961b": "f54910b926475a9dca766b93d3a98575",
".git/objects/20/3776b86f58af73c4150843c17c7b42159ab5d0": "ebadae5e2b4589f955720efce1745e33",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/27/ba17cc62034fcffa3e3437d198ee3fa784b051": "fc50453c7db534ac9ca5e95a950f4708",
".git/objects/28/2997b4befa7e386975b43d3d59976393b3ebf4": "e582b8c5d1050bb3035444ce497c8ce6",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/38/1a6f632937e2aac863dc1e11ab943d85f786b8": "6a99975a81c24a4c46b1120fcee0403f",
".git/objects/39/dd1710ca1ee4f12a270e62b53c170d1886b2e5": "d7839acb980699c49e9d72f31d9b94a1",
".git/objects/3a/37c8c0e99f94d2bc443b3c9cb0c027aeda60a0": "8252f2d506ceade18b003ef6050980af",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/40/5918b10a118fa54d834d4c3fadea3a6bcf9c1c": "bc38be73e50892810165cb3257e9c654",
".git/objects/41/20a4626eb9762b23cd62d48a50983e23659d76": "d13dfe0d78a1d2d12847b4b91741cdc9",
".git/objects/4d/cf7e73d8b740be4f871c3ad66c13464565af44": "4c3dd70214b92ff20b2b4f68829b2ad8",
".git/objects/53/d9fc1dd1913dafe48da3ae103baac25c44e13d": "2532e09d8155af58f8da05accef6966d",
".git/objects/58/cff410f31363bc910b58b7c5beb53c71de8ca7": "aeb456da638e5185041d70180ecdce09",
".git/objects/59/653bd5cafe0f6bef41a4415da2816c9129af9c": "06f251c82fd70dc2086cd26bf1a28f70",
".git/objects/5a/f4ecec53b27d5e5408c8629161ec95943efd66": "0aa0884fa49bd84df213fb75b26f2d4f",
".git/objects/5b/107282708746b6a826f28cdde41309c237a778": "70672c5432efa8600e717cd1e89bd4bd",
".git/objects/5b/2c54ce0f2011f2587c8b9ac6cf28ef930b41c2": "3f48571b504e803d98641442312011f6",
".git/objects/5d/43b9d520c493e79767bc522df9445df14da8e2": "fda4f7ba577f19cfd124ffa68a1eeacb",
".git/objects/61/a1e579a41dc9382380ec5b1e1aaddd46eb97fa": "063560b63c4dda83e2e026c3d3a30853",
".git/objects/66/3e44b61ce28ece0955de9e36343b76a87a013f": "a4ba7976584ba39fb07f3ab07b702498",
".git/objects/78/50056cb93b55577781c7752619f93313eb57ef": "314c820e90927255ea23e8b9da5f4c85",
".git/objects/78/caacf35cc61d9afecc712a6f7c2de7b79078bf": "afa3fa443a1d02a30a002cebedd4133c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/84/88ba9ff9b07d7253d1be50ffddd9b88b015139": "2b509bc0ef3c75ba722169b83ccd0ddf",
".git/objects/87/3917cccb14e857b9ee103d1bc972943833e2f1": "7a486517fd06116365bc6a2a7ef3ce5c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/34c1220207b965e9fda5f185821b55bf5a06e7": "626a4f03a7f366d835978647ef0b0fba",
".git/objects/92/1c7dde8503f70b7a9cd7fda9918af4bb7b7c9b": "a1d993a214f50d05807c2c3d5facb999",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/e5cef9379ca926f12d07c1a005618540d29fda": "60fae1e048ca95f34225940b4f74d9a5",
".git/objects/ab/1c6326abb11a20ea8fcbdb3b9cc7bf9b3d86f8": "3d013cdb8be2348193086d5d0ea18510",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/af/34299ec9552bccd0570223bce03156fefc4c34": "1d5c30613f8ba323760ab2222ffb7a2e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/3b9e137618232baed09929e5cbd1a8c3bc91bf": "37d1add4d0060eba62a50cbc07dd17be",
".git/objects/c1/4978d2bffd423033396185056f027538e474ee": "bef200ba0156ae44af282f691688a418",
".git/objects/cf/f0500cc0993c850ace0288efa40d62b569935d": "2eb4542da2706ba1b576a0208ba52024",
".git/objects/d1/9fc52f51f3338e0e288fc36d0bcfea254eed7a": "031543ff812637063c6fed1189a72a82",
".git/objects/d2/f00159cde8c1f48c7335ae9b0d8293789b12d9": "c532301d03b6be7d0d71ebe03eb81ecc",
".git/objects/d5/c379420f20c063972b89a3702cbabed7633677": "2da1095689f1d68177c4b7157d24cf38",
".git/objects/e3/3eea88a77911bacbcfae756b50cbab278a97d2": "7a576fc1ea106bc342b647b8e06a88c7",
".git/objects/e5/217fa51b0aa0811122a1813b116e37eed86ff6": "b24bd17ad46396f68e6f418d8c27dc79",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ef/ad2494b8e55ec9fb899a487da9a84cac1bd47a": "8de12f8549fb3d8151e4edd08284d0b2",
".git/objects/f0/a659572ebe5f85998d075fa520a832a5a5ee27": "65bf434852e2d252ef8db4baea9c5538",
".git/objects/f1/58339c49f252144b0e665ab8aed9b52b99dca3": "fba69544fe09d78646ccfa6606e51ef6",
".git/objects/f2/5ab45722705d49c292418896373227ef2535c6": "b563105bbf7f46ae344e97b2847db47d",
".git/objects/f4/cccec0b9b26ebc5f68cbe0b79b0c79accc8747": "ce1e278319892c824261beeee3ed2a9b",
".git/refs/heads/master": "5f642812497ecf6d08b4da0c4f1d0d2e",
".git/refs/remotes/origin/master": "5f642812497ecf6d08b4da0c4f1d0d2e",
"assets/AssetManifest.json": "c12bd29930d46d88294f9846a16b030b",
"assets/FontManifest.json": "e1c6f9d16f071e06dffcdeb72a245ff5",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/lib/assets/fonts/Lobster-Regular.ttf": "9406d0ab606cf8cb91c41b65556bd836",
"assets/lib/assets/images/attendance.png": "b71af31d079eaa6763984eba53237ef5",
"assets/lib/assets/images/bengali.png": "4f98e3efc66725254fe3ef87d38351b3",
"assets/lib/assets/images/english.png": "31c1790253f7d16e8eb001861614f3d7",
"assets/lib/assets/images/enrolled.png": "a077b8de43426f8458ddc5ce70146450",
"assets/lib/assets/images/exams.png": "574451b20322d84f155ca5efb712fc9c",
"assets/lib/assets/images/math.png": "fa6063906138cd3c68022031d2c58d70",
"assets/lib/assets/images/pending.png": "ef46d5a84c3d9220e83c0dcaa86f4376",
"assets/lib/assets/images/subject_background_blue.png": "e6c1402ecc5336517a455c4d577be0d3",
"assets/lib/assets/images/subject_background_green.png": "afd0500c07622e7ba52cf6ac686eabc3",
"assets/lib/assets/images/subject_background_purple.png": "9be4151e487a38d7ed87a8556f655abd",
"assets/lib/assets/images/top_graphic_sign_in.png": "07e61af7fec29d6b466135fc741c0539",
"assets/lib/assets/images/unregistered_leaves.png": "b152aeec29805e1d776253c7fb21c429",
"assets/lib/assets/images/user_icon.png": "33834be995c4ac9491adb91bcde89dba",
"assets/NOTICES": "445319ec3566c6676a1f6e8d799c5b6d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/im_stepper/assets/me.jpg": "487511e754834bdf2e6771376d59707e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "894ccd1b42db3e7d6b352e51b9dcef1a",
"/": "894ccd1b42db3e7d6b352e51b9dcef1a",
"main.dart.js": "2ac9fec9116b0dae884db4ed8bf8fa3f",
"manifest.json": "751fa33104e6d64c191379d0082afcac",
"version.json": "473da6c267f5c60edfde3a4b5584c7cb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
