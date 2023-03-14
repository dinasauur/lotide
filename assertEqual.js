const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
    return;  //adding a return here stops the bottom console.log to run as well
  }
  //Happy Path
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
};

module.exports = assertEqual;