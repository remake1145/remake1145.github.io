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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "533ff9b1f7e2b7e3b29890c815b3c73c"
  },
  {
    "url": "ACM/Data_Structure/index.html",
    "revision": "95faae20f3785d70a55e57ff86c51118"
  },
  {
    "url": "ACM/DP/index.html",
    "revision": "8771f23d7b3ad4eaa1c30e458521c9af"
  },
  {
    "url": "ACM/Graph/index.html",
    "revision": "de3a1f523c5bf8bac62aabcfa38a22b0"
  },
  {
    "url": "ACM/index.html",
    "revision": "0e2ba9251f2836b694a8c9815c1b3531"
  },
  {
    "url": "ACM/SS/Search/index.html",
    "revision": "1ee7d910e71a596a00ac8c75c589338a"
  },
  {
    "url": "ACM/SS/String/index.html",
    "revision": "0329a11f237d5adb8a6ac70a86eb991e"
  },
  {
    "url": "assets/css/0.styles.f7e6a5d9.css",
    "revision": "d02d3ae2be8242e7f2e4d42fc528ad0c"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e57373fe.js",
    "revision": "b6417dab4d55ca5e6909104a72d2742a"
  },
  {
    "url": "assets/js/11.bd5fd62a.js",
    "revision": "ba5190ec72f4dfade727c60ec8ace4c0"
  },
  {
    "url": "assets/js/12.a57a7d02.js",
    "revision": "d3980d097d45d137dd304217f030223f"
  },
  {
    "url": "assets/js/13.3cd91c15.js",
    "revision": "6d3a1291cdc41520ed973d03e8d97462"
  },
  {
    "url": "assets/js/14.0099d861.js",
    "revision": "dc4e3e82fc7e370d6aab880a7e196964"
  },
  {
    "url": "assets/js/15.12d2f312.js",
    "revision": "42cb61ad9eb0d1f84907526acd3dd756"
  },
  {
    "url": "assets/js/16.169f7962.js",
    "revision": "6c3f5d3efe95d8c58d8258a5840d3739"
  },
  {
    "url": "assets/js/17.9fc212c2.js",
    "revision": "801435df051570c8018d4cc461ae6533"
  },
  {
    "url": "assets/js/18.040d8c06.js",
    "revision": "a50caa3d497bed05a0eee740cd2825bc"
  },
  {
    "url": "assets/js/19.b85bb81e.js",
    "revision": "1862322040c4e9462a5126bb88900b0e"
  },
  {
    "url": "assets/js/2.73ed5b02.js",
    "revision": "dfa4fcab0845f8d1a5eb6d62c7566965"
  },
  {
    "url": "assets/js/20.d79ac96f.js",
    "revision": "ce8bfb4d45043f04df5af76affa72a1d"
  },
  {
    "url": "assets/js/3.2a924b8b.js",
    "revision": "caa9b292e186ea1816d8fdf0245d1bfc"
  },
  {
    "url": "assets/js/4.bae7abaf.js",
    "revision": "b20731feee1d470ac03fedf6a3694da6"
  },
  {
    "url": "assets/js/5.c0a2144f.js",
    "revision": "0568901bb2e7d43e68d13dc20ef32d64"
  },
  {
    "url": "assets/js/6.810fddd7.js",
    "revision": "283b0eaaf3ffaf544ad96ca4bb29d30c"
  },
  {
    "url": "assets/js/7.a009ae4e.js",
    "revision": "1d42728695ce359acc65e37cacc5905c"
  },
  {
    "url": "assets/js/8.f08be128.js",
    "revision": "31e6050da93461c955df7322f16655d3"
  },
  {
    "url": "assets/js/9.4ca89c83.js",
    "revision": "27569a31f52f57b6518fc9aaf18a3815"
  },
  {
    "url": "assets/js/app.6f8b3300.js",
    "revision": "d156804f43610cc90e77a39270b48a05"
  },
  {
    "url": "images/logo_nav.png",
    "revision": "c8430d373e0cf55e18abff850b198ced"
  },
  {
    "url": "index.html",
    "revision": "fbe0860f237bb5b7fcbedcd71a2a9468"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "c8209619f9a8260aee66ce7691c9f2ad"
  },
  {
    "url": "myVuePress/First/index.html",
    "revision": "6713f287944eed5a3cab5b90d4e97b2d"
  },
  {
    "url": "myVuePress/index.html",
    "revision": "43849d27dc7dfcd2bcdefcc28493b794"
  }
].concat(self.__precacheManifest || []);
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
