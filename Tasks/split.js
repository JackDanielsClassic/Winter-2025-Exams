// Refactor following solution
// Split an array into two parts
'use strict';

const splitArray = (index, array) => {
  const firstPart = array.slice(0, index);
  const secondPart = array.slice(index);
  return [firstPart, secondPart];
};

module.exports = splitArray;
