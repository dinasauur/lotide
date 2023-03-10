const eqArrays = function(list1, list2) {

  for (let i = 0; i < list1.length; i++) {

    if (list1[i] !== list2[i]) {
      return false;
    }
  } return true;
};

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }
  return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {

  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {

    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {

      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
      continue;
    }

    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;

/* TEST RUN
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };


const result1 = eqObjects(shirtObject , longSleeveShirtObject);

console.log(assertEqual(result1, true)); // => assertion failed


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const result1 = eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true
console.log(assertEqual(result1, true));

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
const result2 = eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false
console.log(assertEqual(result2, true));

*/