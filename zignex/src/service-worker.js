importScripts("ngsw-worker.js");
importScripts("https://unpkg.com/dexie@2.0.3/dist/dexie.js");

let idxData;
const db = new Dexie("zxStore");
db.version(1).stores({
  routeData:
    "++id,cusno,cnm,dow,rno,sqno,sz,srvtm,stm,etm,hno,snm,cty,zp,st,sdow,srno",
});
// Default options are marked with *
function fetchText() {
  fetch('http://localhost:3000/data')
    .then((response) => response)
    .then((data) => console.log(data));
}
self.addEventListener("sync", (event) => {
  if (event.tag === "sync-idb") {
    fetchText();
  }
});

self.addEventListener("error", function (e) {
  console.log("event-error:", e);
});

self.onerror = function (message) {
  console.log("self-onerror", message);
};

throw new Error();
