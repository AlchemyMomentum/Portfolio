//website last modified 
var modify = document.lastModified;
var modifyStyle = document.getElementById("lastModified");
modifyStyle.innerHTML = modify;


//clear cache website
this.addEventListener('activate', function (event) {
  var cacheWhitelist = ['v2'];

  event.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(keyList.map(function (key) {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});
