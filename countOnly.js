const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// output: how many instances of each string were found in the allItems array of strings
const countOnly = function(allItems, itemsToCount) {
  let countedItems = {};

  for (const name of allItems) {
    //if (itemsToCount.hasOwnProperty(name)) --> this condition meant if the object has the same name in their property. 
    //(cont.) So even if the object's property value showed false, it will count that name.
    //condition - if the name exists (meaning it is true) in the object itemsToCount. Confirm this!!
    if (itemsToCount[name]) {
      if (countedItems[name]) {
        countedItems[name]++;
      } else {
        countedItems[name] = 1;
      }
    }
  } return countedItems;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1.Jason, 1); 
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);