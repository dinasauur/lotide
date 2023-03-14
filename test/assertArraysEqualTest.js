//const eqArray = require('../eqArray');
const assertArraysEqual = require('../assertArraysEqual');

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // should pass
console.log(assertArraysEqual([1, 2, 3], [1, 2, 4])); // should fail
console.log(assertArraysEqual([1, 2, 3], [1, 2, '3'])); // should fail
