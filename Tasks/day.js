// Refactor following solution
// Get day number
'use strict';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDays = (day) => {
  for (const weekDay of weekDays) {
    if (day.startsWith(weekDay.toLowerCase())) {
      return weekDays.indexOf(weekDay) + 1;
    }
  }
  return -1;
};
let day = 'Fri';
console.log(parseDays(day));
module.exports = parseDays;
