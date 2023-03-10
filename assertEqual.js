const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

assertEqual('Bootcamp', 'bootcamp');
assertEqual(4, 1);
assertEqual('2', 2);

/*

if (actual !== expected) {
  console.log("Not equal")
  return;                     //adding a return here stops the bottom console.log to run as well
}
//Happy Path
  console.log("Equal")

