const assert = require('chai').assert;
const middle = require('../middle');

describe(`#middle`, () => {
  it(`returns both middle elements when array is even, example - [2, 3] for [1, 2, 3, 4]`, () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it(`returns the middle element when array is odd, example - [3] for [1, 2, 3, 4, 5]`, () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it(`returns empty array when the array has 2 or less elements`, () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it(`returns assertion failed if answer is [3] for [1, 2, 3, 4]`, () => {
    assert.notDeepEqual(middle([1, 2, 3, 4], [3]))
  });

  it(`returns assertion failed if the answer is [1, 2, 3, 4] for [1, 2, 3, 4]`, () => {
    assert.notDeepEqual(middle(([1, 2, 3, 4]), [1, 2, 3, 4]))
  });
});

/*
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

console.log(assertArraysEqual(middle([1, 2, 3, 4]), [ 3 ])); // Should fail
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [ 2, 3 ])); // Should pass
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [ 1, 2, 3, 4 ])); // Should fail
console.log(assertArraysEqual(middle([1]), [ ])); // Should pass
console.log(assertArraysEqual(middle([1, 2]), [ ])); // Should pass
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])); // Should pass

/*
//TEST RUN FOR JUST MIDDLE 
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => [];
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
*/
