define(["esri/core/promiseUtils"], function(promiseUtils) {

  // when loaded, the workers framework will create new `Calculator`
  var Calculator = function Calculator() {};

  // any method on "Calculator" module can be invoked
  // from the main thread
  Calculator.prototype.max = function(data) {
    return Math.max.apply(null, data.numbers)
  }

  return Calculator;
});