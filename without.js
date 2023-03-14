const without = function(source, itemsToRemove) {
  let arrayToReturn = [];

  source.forEach(element => {
    
    if (!itemsToRemove.includes(element)) {
      arrayToReturn.push(element);
    }
  });
  return arrayToReturn;
};

module.exports = without;

//console.log(without([1, 2, 3, 4, 5], [1, 2, 4])); // what is not common in both arrays is what should be output
