const assets = ["/web/images/fav.ico", "https://pyscript.net/alpha/pyscript.css", "https://pyscript.net/alpha/pyscript.js", "/web/src/main.py", "/web/src/main.js"];
//const assets = ["web/src/registerSW.js", "web/manifest.json", "/web/images/fav.ico", "/web/", "/web/index.html", "https://pyscript.net/alpha/pyscript.css", "https://pyscript.net/alpha/pyscript.js", "/web/src/main.py", "/web/src/main.js"];
//const assets = ["https://pyscript.net/alpha/pyscript.css", "https://pyscript.net/alpha/pyscript.js", "/web/src/main.py", "/web/src/main.js"];


console.log("maurice file sw.js FULL ASSETS"); 


self.addEventListener("install", installEvent => {
    console.log("EVENT INSTALL");
    installEvent.waitUntil(caches.open("pwa")
    .then((cache) => {return cache.addAll(assets);}).catch((err) => console.log("Error INSTALL", err)));
    console.log("INSTALL COMPLETED");
    
});

self.addEventListener("fetch", fetchEvent => {
    console.log("EVENT FETCH");
    fetchEvent.respondWith(caches.match(fetchEvent.request).then(res=>{return res || fetch(fetchEvent.request)}));
    console.log("FETCH COMPLETED");

});

