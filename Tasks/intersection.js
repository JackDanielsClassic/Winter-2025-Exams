// Refactor following solution
// Find an intersection of two dictionaries
'use strict';

const intersection = (firstDict, secondDict) => {
  const result = {};
  for (const key in firstDict) {
    if (firstDict[key] === secondDict[key]) {
      result[key] = firstDict[key];
    } 
  }
  return result;
};

module.exports = intersection;
