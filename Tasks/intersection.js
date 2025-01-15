// Refactor following solution
// Find an intersection of two dictionaries
'use strict';

const intersection = (firstDict, secondDict) => {
  const firstKeys = Object.keys(firstDict);
  for (const attributeName of firstKeys) {
    if (firstDict[attributeName] === secondDict[attributeName]) {
      secondDict[attributeName] = firstDict[attributeName];
    } else {
      delete firstDict[attributeName];
    }
  }
  return firstDict;
};

module.exports = intersection;
