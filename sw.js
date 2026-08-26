const CACHE='iva-time-v6';
const APP=['./','./index.html','./style.css?v=6','./features.css?v=6','./header-fixes.css?v=6','./design-polish.css?v=6','./app.js?v=6','./features.js?v=6','./manifest.webmanifest','./wiki/','./wiki/wiki.css','./wiki/wiki.js','./wiki/Home.md','./assets/favicon.svg','./assets/iva-logo.svg','./assets/fonts/Vazirmatn-Variable.woff2'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(APP)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r;}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))));});
