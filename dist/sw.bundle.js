if(!self.define){let e,i={};const n=(n,a)=>(n=new URL(n+".js",a).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let r={};const d=e=>n(e,s),f={module:{uri:s},exports:r,require:d};i[s]=Promise.all(a.map((e=>f[e]||d(e)))).then((e=>(c(...e),r)))}}define(["./workbox-234b72bb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"311.bundle.js",revision:"bb2029dda5b795b8181855bc0ed024e9"},{url:"608.bundle.js",revision:"150492a456338223aafd6851548d2911"},{url:"app.webmanifest",revision:"3fe9a3bd53e110202123deb1a60ca5f0"},{url:"app~309f7e27.bundle.js",revision:"f7c328e4b5d8a2ca2d1614629e0b1232"},{url:"app~309f7e27.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~4e5ec22b.bundle.js",revision:"b90e0057514ba2a077efd6879439cc9e"},{url:"app~a51fa3f5.bundle.js",revision:"dc98f727e08cadaed65972479ce04967"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"998a513f91de75a98c7229536d734f8d"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"64e109a88fbb30366c636dd335e34a6c"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"favicon.png",revision:"2231c73b3cb0515b5978dcc411a9a31d"},{url:"icons/icon-128x128.png",revision:"2231c73b3cb0515b5978dcc411a9a31d"},{url:"icons/icon-256x256.png",revision:"9930d0596f4a1ebaf14a93caf76c82a6"},{url:"icons/icon-32x32.png",revision:"53721dabc86a4df424025efab5035943"},{url:"icons/icon-512x512.png",revision:"d1678bcc876fc1441c2a37a9dc496525"},{url:"icons/icon-64x64.png",revision:"f5bbcb11c8679c751f3bc969687f5f34"},{url:"index.html",revision:"e0bcbec8588267833fe5f71084347901"},{url:"logos/gm.png",revision:"9afebfb6613f79c2f65af357d565a313"},{url:"logos/ig.png",revision:"ec3aacfd1f3ba5593f1d654e9a5b9cb1"},{url:"logos/linkedin.png",revision:"5db53c0ac5f894f447bd604c28c73dc7"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev")),new e.StaleWhileRevalidate({cacheName:"resto-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/medium/")),new e.StaleWhileRevalidate({cacheName:"resto-image-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
