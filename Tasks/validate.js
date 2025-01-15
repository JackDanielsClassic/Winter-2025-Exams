// Refactor following solution
// Validate person name
'use strict';

const isValidate = (T) => {
  if (T.length === 0) return false;
  if (!T.includes(' ')) return false;
  {
    for (const C of T) {
      if (C === ' ') continue;
      if (
        C.toLowerCase().charCodeAt(0) >= 97 &&
        C.toLowerCase().charCodeAt(0) <= 122
      ) {
      } else {
        return false;
      }
    }
    return true;
  }
};

module.exports = isValidate;
