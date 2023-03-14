const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let newArray = [];
  const length = array.length;
  let searchMiddleIndex = Math.floor(length / 2);
  
  if (length > 2 && length % 2 !== 0) {
    searchMiddleIndex;
    newArray.push(array[searchMiddleIndex]);
  } else if (length > 2 && length % 2 === 0) {
    searchMiddleIndex;
    let searchSecondMiddleIndex = Math.floor((length - 1) / 2);
    newArray.push(array[searchSecondMiddleIndex], array[searchMiddleIndex]);
  }
  return newArray;
};

module.exports = middle;
