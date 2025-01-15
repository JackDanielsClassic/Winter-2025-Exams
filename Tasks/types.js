// Refactor following solution
// Count types in an array

const types = (array) => {
  const listOfTypes = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const element of array) {
    listOfTypes[typeof element]++;
  }
  return listOfTypes;
};

module.exports = types;
