const eqArrays = function (list1, list2){
  for (let i = 0; i < list1.length; i++) {
    if (list1[i] !== list2[i]){
      return false;
    } 
  } return true;
};



const assertArraysEqual = function (answer) {

  if(answer) {
    return `✅✅✅ Assertion Passed: ${answer}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${answer}`;
  } 
};

console.log(assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3])));
