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