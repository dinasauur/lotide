const eqArrays = function(list1, list2) {
  for (let i = 0; i < list1.length; i++) {
    if (list1[i] !== list2[i]) {
      return false;
    }
  } return true;
};

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  } else if (keys1.length === keys2.length) {
    for (let key of keys1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        eqArrays(object1[key], object2[key]);
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    } return true;
  }
};

const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    return `✅✅✅ Assertion Passed! Horrah!`;
  } else {
    return `🛑🛑🛑 Assertion Failed! Sad face :(`;
  }
};

// TEST RUN PRIMITIVE VALUES
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };


console.log(assertObjectsEqual(longSleeveShirtObject, anotherShirtObject)); // Should fail
console.log(assertObjectsEqual(shirtObject, anotherShirtObject)); // Should pass

// TEST RUN ARRAYS AS VALUES IN OBJECTS

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

console.log(assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject)); // Should fail
console.log(assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject)); // Should pass