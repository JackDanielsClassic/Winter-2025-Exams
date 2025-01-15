// Refactor following solution
// Validate person name
'use strict';

const isValidate = (name) => {
  if (name.length === 0 || !name.includes(' ')) return false;
    for (const char of name) {
      if (char === ' ') continue;
      const charCode = char.toLowerCase().charCodeAt(0);
      if (charCode < 97 || charCode > 122) {
        return false;
      }
    }
    return true;
};

module.exports = isValidate;
