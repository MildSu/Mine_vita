const CACHE='mine-vita-v2-20260917';
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(async cache=>{const response=await fetch('/',{cache:'reload'});if(!response.ok)throw Error('App shell unavailable');const html=await response.clone().text();await cache.put('/',response);const assets=[...html.matchAll(/(?:src|href)="(\/assets\/[^\"]+)"/g)].map(m=>m[1]);await cache.addAll([...new Set([...assets,'/manifest.webmanifest','/icon-192.png','/icon-512.png'])]);})));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('mine-vita')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{const url=new URL(event.request.url);if(event.request.method!=='GET'||url.origin!==self.location.origin)return;
if(event.request.mode==='navigate'){event.respondWith(fetch(event.request).catch(()=>caches.match('/')));return;}
event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{if(response.ok&&url.pathname.startsWith('/assets/')){const copy=response.clone();caches.open(CACHE).then(c=>c.put(event.request,copy));}return response;})));
});
