if(!self.define){let e,i={};const c=(c,a)=>(c=new URL(c+".js",a).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,n)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let r={};const f=e=>c(e,s),b={module:{uri:s},exports:r,require:f};i[s]=Promise.all(a.map((e=>b[e]||f(e)))).then((e=>(n(...e),r)))}}define(["./workbox-234b72bb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"949.bundle.js",revision:"b1f6e08b51c344830392b599a015aca6"},{url:"app.webmanifest",revision:"3fe9a3bd53e110202123deb1a60ca5f0"},{url:"app~309f7e27.bundle.js",revision:"8fb4b864bbaea00c3cc97c6af5752b59"},{url:"app~309f7e27.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~4e5ec22b.bundle.js",revision:"6e0598ebc486f73c16f9241ba83f0302"},{url:"app~4e5ec22b.css",revision:"57ea156a50d2174c28b1b31c00e05a2c"},{url:"app~a51fa3f5.bundle.js",revision:"6f099c82ce314b40be8b0d908ad7d4e3"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"998a513f91de75a98c7229536d734f8d"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"64e109a88fbb30366c636dd335e34a6c"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"favicon.png",revision:"2231c73b3cb0515b5978dcc411a9a31d"},{url:"icons/icon-128x128.png",revision:"2231c73b3cb0515b5978dcc411a9a31d"},{url:"icons/icon-256x256.png",revision:"9930d0596f4a1ebaf14a93caf76c82a6"},{url:"icons/icon-32x32.png",revision:"53721dabc86a4df424025efab5035943"},{url:"icons/icon-512x512.png",revision:"d1678bcc876fc1441c2a37a9dc496525"},{url:"icons/icon-64x64.png",revision:"f5bbcb11c8679c751f3bc969687f5f34"},{url:"index.html",revision:"ba580ece7d5bedc2494dbc5638a29ff3"},{url:"logos/gm.png",revision:"9afebfb6613f79c2f65af357d565a313"},{url:"logos/ig.png",revision:"ec3aacfd1f3ba5593f1d654e9a5b9cb1"},{url:"logos/linkedin.png",revision:"5db53c0ac5f894f447bd604c28c73dc7"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev")),new e.StaleWhileRevalidate({cacheName:"resto-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/medium/")),new e.StaleWhileRevalidate({cacheName:"resto-image-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
