/* 
 * Solution to Project Euler problem 19
 * 
 * You can find the problem here: https://projecteuler.net/problem=19
 * 
 * This source code is licensed under the GNU v3 GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * https://github.com/50bbx/project-euler-solutions-js
 */

const months = [
  {
    days: () => 31,
    name: 'January',
  },
  {
    days: (year) => {
      if(year % 400 === 0) {
        return 29
      }
      
      if(year % 100 === 0) {
        return 28
      }
      
      if(year % 4 === 0) {
        return 29
      }
      
      return 28
    },
    name: 'February',
  },
  {
    days: () => 31,
    name: 'March',
  },
  {
    days: () => 30,
    name: 'April',
  },
  {
    days: () => 31,
    name: 'May',
  },
  {
    days: () => 30,
    name: 'June',
  },
  {
    days: () => 31,
    name: 'July',
  },
  {
    days: () => 31,
    name: 'August',
  },
  {
    days: () => 30,
    name: 'September',
  },
  {
    days: () => 31,
    name: 'October',
  },
  {
    days: () => 30,
    name: 'November',
  },
  {
    days: () => 31,
    name: 'Dicember',
  },
]

function getWeekday(date) {
  return getTotalDaysBetween('1 Jan 1900', date) % 7
}

function getTotalDaysBetween(dateA, dateB) {
  const start = new Date(dateA)
  const end = new Date(dateB)
  
  return (end - start) / 86400000
}

let firstOfTheMonth = getWeekday('1 Jan 1901') // Monday
const totalDays = getTotalDaysBetween('1 Jan 1901', '31 Dec 2000')

let year = 1901
let currentMonth = 0
let numberOfSundays = 0
let currentDays = 0

while(currentDays <= totalDays) {
  if((currentDays + firstOfTheMonth) % 7 === 6) {
    numberOfSundays++
  }
  
  currentDays += months[currentMonth % 12].days(year)
  
  currentMonth++
  
  if(currentMonth % 12 === 0) {
    year++
  }
}

console.log(numberOfSundays)