// Refactor following solution
// Count types in an array
'use strict';

const types = (array) => {
  const listOfTypes = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const element of array) {
    const type = typeof element;
    listOfTypes[type]++;
  }
  return listOfTypes;
};

module.exports = types;
