const eqArrays = function (list1, list2){
  for (let i = 0; i < list1.length; i++) {
    if (middle(list1)[i] !== list2[i]){
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

const middle = function(array) {
  let newArray = [];
  const length = array.length;
  
  if (length > 2 && length % 2 !== 0) {
    let searchMiddleIndex = Math.floor(length/2);
    newArray.push(array[searchMiddleIndex]);
  } else if (length > 2 && length % 2 === 0) {
    searchMiddleIndex = Math.floor(length/2);
    let searchSecondMiddleIndex = Math.floor((length-1)/2);
    newArray.push(array[searchSecondMiddleIndex], array[searchMiddleIndex]);
  }
  return newArray;
};

//TEST CODE

console.log(assertArraysEqual([1, 2, 3, 4, 5], [ 3 ])); // Should pass
console.log(assertArraysEqual([1, 2, 3, 4], [ 2, 3 ])); // Should pass
console.log(assertArraysEqual([1, 2, 3, 4], [ 2, 4 ])); // Should fail
console.log(assertArraysEqual([1], [ ])); // Should pass
console.log(assertArraysEqual([1, 2], [ ])); // Should pass


//TEST CODE for just the middle function
//console.log(middle([1])); // => []
//console.log(middle([1, 2])); // => [];
//console.log(middle([1, 2, 3])); // => [2]
//console.log(middle([1, 2, 3, 4, 5])); // => [3]
//console.log(middle([1, 2, 3, 4])); // => [2, 3]
//console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]