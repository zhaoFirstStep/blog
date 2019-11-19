/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6cf29246e62f10eb751cc101d37c9e34"
  },
  {
    "url": "assets/css/0.styles.406b7617.css",
    "revision": "0815a432aa7a66e507662ef24622353a"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.dbc8ad2f.js",
    "revision": "06fb72e18c4285cd86f5f70a7a5ed5bf"
  },
  {
    "url": "assets/js/11.11099c88.js",
    "revision": "e4cbeba41e091d5975d37dd4abf4a17f"
  },
  {
    "url": "assets/js/12.94b20fec.js",
    "revision": "16700766d786874e9b755dbd86972dfc"
  },
  {
    "url": "assets/js/13.f361f7a0.js",
    "revision": "32b371167e2072f9df0868c945a26b1a"
  },
  {
    "url": "assets/js/14.55c9cf96.js",
    "revision": "4548e2d046e57766aa5ad2c7728a4b68"
  },
  {
    "url": "assets/js/15.6c986dc2.js",
    "revision": "b4621f50be2ceabf28b5641405ececc6"
  },
  {
    "url": "assets/js/16.b61eef65.js",
    "revision": "9688a51f9f97a04a3fa45556132ab102"
  },
  {
    "url": "assets/js/2.b301fd54.js",
    "revision": "9310b783e03fd19cca039382e1e2bc24"
  },
  {
    "url": "assets/js/3.b261ec4b.js",
    "revision": "46d63d55546d63001cf4222a013873a6"
  },
  {
    "url": "assets/js/4.01a4a3b3.js",
    "revision": "92665fe2f48cb7796ad9e40fc8761f72"
  },
  {
    "url": "assets/js/5.62e429fc.js",
    "revision": "ce645325534b01003ca0dc4e316299a4"
  },
  {
    "url": "assets/js/6.9580a7e6.js",
    "revision": "93ade694a5a4ba1cb34d24b8f1b0a432"
  },
  {
    "url": "assets/js/7.e84ac7ef.js",
    "revision": "c8466b6566f1e7848d82536ac5eab420"
  },
  {
    "url": "assets/js/8.3f934994.js",
    "revision": "4881ef1f508ba87171c06e008c2a5ec6"
  },
  {
    "url": "assets/js/9.86bf622e.js",
    "revision": "81631f0a9d850c719117419d4685c693"
  },
  {
    "url": "assets/js/app.7c607334.js",
    "revision": "5756f560f0b014e1804137e22049f804"
  },
  {
    "url": "docs/about/index.html",
    "revision": "e661eec07854cb66eba83a1c98e5c847"
  },
  {
    "url": "docs/AI/index.html",
    "revision": "84d7f6f548dd7888c80171f9ba863bd5"
  },
  {
    "url": "docs/algorithm/index.html",
    "revision": "0bee2e905f3990902975544d587b487b"
  },
  {
    "url": "docs/life/index.html",
    "revision": "34a157ff129b55b46b9c07eb481b1fa3"
  },
  {
    "url": "docs/node/index.html",
    "revision": "c2895f7c4c225ea54af6769fc25f12c1"
  },
  {
    "url": "docs/web/index.html",
    "revision": "69738b65e77ec4ba78ced13d735cc50b"
  },
  {
    "url": "images/index.jpg",
    "revision": "b03fe1661d6982d5c2b970c6e4cf66ff"
  },
  {
    "url": "index.html",
    "revision": "4abe8f7010db04b467be099974bf2651"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
