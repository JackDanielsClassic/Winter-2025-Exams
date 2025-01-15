// Refactor following solution
// Return an array without duplicates
'use strict';

const duplicate = (value, index) => {
  return (index <= 0) ? 
  [] :
  Array(index).fill(value);
};

module.exports = duplicate;
