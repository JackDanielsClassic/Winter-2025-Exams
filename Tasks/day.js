// Refactor following solution
// Get day number
'use strict';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (inputDay) => {
  for (const day of weekDays) {
    if (inputDay.startsWith(day.toLowerCase())) {
      return weekDays.indexOf(day)+1;
    }
  }
  return -1;
};

module.exports = parseDay;
