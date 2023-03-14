const eqArray = require('./eqArray');

//METHOD 1 - calling the eqArrays function inside the asserArraysEqual function.

const assertArraysEqual = function(actual,expected){
  if (eqArray(actual, expected)) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  
  } 
  return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
};

module.exports = assertArraysEqual;


/*
METHOD 2

const assertArraysEqual = function (answer) {

  if(answer) {
    return `✅✅✅ Assertion Passed: ${answer}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${answer}`;
  }
};

console.log(assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3])));
*/