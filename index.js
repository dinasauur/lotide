const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertEqual = require('./middle');
const eqArray = require('./eqArray');
const assertArraysEqual = require('./assertArraysEqual');
const without = require('./without');
const countOnly = require('./countOnly');
const countLetter = require('./countLetter');
const letterPositions = require('./letterPositions');
const findKeyByValue = require('./findKeyByValue');
const eqObjects = require('./eqObjects');
const assertObjectsEqual = require('./assertObjectsEqual');
const map = require('./map');
const takeUntil = require('./takeUntil');
const findKey = require('./findKey');

module.exports = {
  head,
  tail,
  middle,
  assertEqual,
  eqArray,
  assertArraysEqual,
  without,
  countOnly,
  countLetter,
  letterPositions,
  findKeyByValue,
  eqObjects,
  assertObjectsEqual,
  map,
  takeUntil,
  findKey
};