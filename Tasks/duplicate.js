// Refactor following solution
// Return an array without duplicates
'use strict';

const duplicate = (value, n) => {
 return (n <= 0) ? 
  [] : 
  Array(n).fill(value);
};

module.exports = duplicate;