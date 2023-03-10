// return all the indices in the string where each character is found
// return an array of the indices for each letter
// output is an object with arrays as values for the properties

// Write a function

// Write a buffer

// Loop through the parameter(sentence)
// Condition - if new object does not have that letter, add it to the object and count it
// Fi


// Return buffer

//
const eqArrays = function(list1, list2) {
  for (let i = 0; i < list1.length; i++) {
    if (list1[i] !== list2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return `✅✅✅ Assertion Passed`;
  } else {
    return `🛑🛑🛑 Assertion Failed`;
  }
};

const letterPositions = function(sentence) {
  const results = {};

  const newSentence = sentence.toLowerCase().split(' ').join('');
  for (let index in newSentence) {
    const value = newSentence[index];

    if (!results[value]) {
      results[value] = [];
    }
      //Happy Path
      results[value].push(index);
    
  } return results;
};

console.log(letterPositions("Hello World"));


console.log(assertArraysEqual(letterPositions("hello").e, [1]));




