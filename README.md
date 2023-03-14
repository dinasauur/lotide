# Lotide
A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This libraru was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dina_/lotide`

**Require it:**

`const _ = require('@dina_/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*`head(arr)`: The head function returns the first element (NOT as an array!) of the array.

*`tail(arr)`: Returns the "tail" of an array in a new array, which is everything except for the first item of the provided array. It does not modify the array that is passed in.

*`middle(array)`: This function takes in an array and returns the middle value. If the array is even, it returns the two value in the middle. If the array is 2 or less, it returns an empty array. 

*`assertEqual(actual, expected)`: This is a test code that compares two values it takes in and determines if there are failed or passed assertions.

*`eqArray(list1, list2)`: This function takes in two arrays and returns true or false, based on a perfect match.

*`assertArraysEqual(actual, expected)`: This is a test code that compares two arrays it takes in and determines if there are failed or passed assertions.

*`without(source, itemsToRemove)`: This function takes in a source array and an itemsToRemove array and returns a new array with only those elements from source that are not present in the itemsToRemove array. It does not modify the original array.

*`countOnly(allItems, itemsToCount)`: This function should take in a collection of items and return counts for a specific subset of those items. It won't count everything. It will also be given an idea of which items are wanted and the function will only count those, ignoring the others. **_Items_** in our case will be limited to **_strings_.**

*`countLetter(string)`: The function takes in a sentence (as a string) and then return a count of each of the letters in that sentence. 

*`letterPositions(sentence)`: This function is similar to countLetter() but for objects. It will return all the indices (zero-based positions) in the string where each character is found.

*`findKeyByValue(movieObj, arg)`: This function will help us search for a key on an object where its value matches a given value. If no key with that given value is found, then it returns undefined.

*`eqObjects(object1, object2)`: It takes in two objects and returns true or false, based on a perfect match.

*`assertObjectsEqual(actual, expected)`: This is a test code that takes in two objects and returns an appropriate message to the console.

*`map(array, callback)`: This function is similar to the map() method, but it is a higher-order function that can call the callback function.

*`takeUntil(array, callback)`: The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

*`findKey(object, callback)`: This function scans the object and returns the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.


