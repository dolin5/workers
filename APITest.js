define([
  "esri/config",
  "esri/core/promiseUtils",
  "esri/geometry/geometryEngine",
  "esri/geometry/Extent",
  "esri/geometry/Polygon"
],
function(
  esriConfig,
  promiseUtils,
  geometryEngine, Extent, Polygon
  ) {
  class MyWorker {
    magic({message}, {proxy}) {
      proxy.connection.invoke("progress", "starting");
      const mymessage = message+message+message;
      proxy.connection.invoke("progress", "polygon created");
      proxy.connection.invoke("progress", "starting buffer creation");
      proxy.connection.invoke("progress", "buffer creation done");
      return promiseUtils.resolve({ data: mymessage });
    }
  }
  /*
  const MyWorker = function MyWorker() {};
  MyWorker.prototype.magic = function magic({ extent }, { proxy }) {}
  */
  return MyWorker;
});