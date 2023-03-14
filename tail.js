const tail = function(arr) {
  let newArr = [];

  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  } return newArr;
};

module.exports = tail;

/*
//Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
const numbers = [1, 3]
console.log(tail(numbers)); // no need to capture the return value since we are not checking it
//assertEqual(words.length, 3); // original array should still have 3 elements!

/*
Solution from a peer. Need to go over this portion again to fully understand:

for(let i = 1; i < words.length; i++){
  assertEqual(words[i], tail(words)[i-1]);
}

*/