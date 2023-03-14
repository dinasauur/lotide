const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

const eqArrays = function(list1, list2) {
  for (let i = 0; i < list1.length; i++) {
    if (list1[i] !== list2[i]) {
      return false;
    }
  } return true;
};

//METHOD 1 - calling the eqArrays function inside the asserArraysEqual function.

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

module.exports = map;

/*

const results1 = map(words, word => word[0]);

console.log(assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']));
*/