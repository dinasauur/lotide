const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetter = function(string) {
  let count = {};
  let newString = string.split(' ').join('');

  for (const alphabet of newString) {
    if (!count[alphabet]) {
      count[alphabet] = 0;
    } 
      count[alphabet]++;
    /*
    if (count[alphabet]) {
      count[alphabet]++;
    } else {
      count[alphabet] = 1;
    } */
  } return count;
};

module.exports = countLetter;

/*

let str = "lighthouse in the house";

const result = countLetter(str);

assertEqual(result.l, 1); // Should pass
assertEqual(result.i, 2); // Should pass
assertEqual(result.g, 2); // Should fail

*/

// Notes for my own understanding
// Example - string = "I love rock n roll!"
// string.split()
// .split() returns an array of the entire string --> [I love rock n roll!]
// .split('') returns an array of the string split up entirely to each alphabet -->
//[
//  'I', ' ', 'l', 'o', 'v',
//  'e', ' ', 'r', 'o', 'c',
// 'k', ' ', 'n', ' ', 'r',
// 'o', 'l', 'l', '!'
//]
// .split(' ') returns an array of the string split up according to the words
// --> [ 'I', 'love', 'rock', 'n', 'roll!' ]
//
// array.join() joins an array into a string
// .join() will join the elements in an array followed by a comma;
// --> Example [1, 2, 3] --> "1,2,3"
// --> Example ['W','O','WOW'] --> "W,O,WOW"
// .join('') will join the elements in an arry without commas separating them --> "123" "WOWW"
// .join(' ') wll join the elements in an array without commas but with space between them
// --> [123, 2, 3,'W','O','WOW'] --> "123 2 3 W O WOW"