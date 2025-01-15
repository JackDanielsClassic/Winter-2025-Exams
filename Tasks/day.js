// Refactor following solution
// Get day number
'use strict';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (day) => {
  let i;
  for (i = 0; i < weekDays.length; i++) {
    if (day.startsWith(weekDays[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
