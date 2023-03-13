const assertEqual = require('../assertEqual');
const eqArray = require('../eqArray');

assertEqual(eqArray([1, 2, 3], [1, 2, 3, 4]), false); // => should PASS
assertEqual(eqArray([1, 2, 3], [1, 2, 5]), false);  // => should PASS
assertEqual(eqArray(["1", "2", "3"], ["1", "2", "3"]), true);  // => should PASS
assertEqual(eqArray(["1", "2", "3"], ["1", "2", 3]), false);  // => should PASS
assertEqual(eqArray([1, 2, 3], [1, 2, "3"]), true); // => should FAIL