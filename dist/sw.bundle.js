if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,o)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let r={};const a=e=>n(e,s),d={module:{uri:s},exports:r,require:a};i[s]=Promise.all(c.map((e=>d[e]||a(e)))).then((e=>(o(...e),r)))}}define(["./workbox-234b72bb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app.bundle.js",revision:"e51ebcf94cf3b8111e95b84dd2e72895"},{url:"app.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app.webmanifest",revision:"3fe9a3bd53e110202123deb1a60ca5f0"},{url:"favicon.png",revision:"2231c73b3cb0515b5978dcc411a9a31d"},{url:"icons/icon-128x128.png",revision:"2231c73b3cb0515b5978dcc411a9a31d"},{url:"icons/icon-256x256.png",revision:"9930d0596f4a1ebaf14a93caf76c82a6"},{url:"icons/icon-32x32.png",revision:"53721dabc86a4df424025efab5035943"},{url:"icons/icon-512x512.png",revision:"d1678bcc876fc1441c2a37a9dc496525"},{url:"icons/icon-64x64.png",revision:"f5bbcb11c8679c751f3bc969687f5f34"},{url:"index.html",revision:"98b923f9b52b0722bcab3b76acc47503"},{url:"logos/gm.png",revision:"9afebfb6613f79c2f65af357d565a313"},{url:"logos/ig.png",revision:"ec3aacfd1f3ba5593f1d654e9a5b9cb1"},{url:"logos/linkedin.png",revision:"5db53c0ac5f894f447bd604c28c73dc7"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev")),new e.StaleWhileRevalidate({cacheName:"resto-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/medium/")),new e.StaleWhileRevalidate({cacheName:"resto-image-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
