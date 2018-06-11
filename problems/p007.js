/* 
 * Solution to Project Euler problem 7
 * 
 * You can find the problem here: https://projecteuler.net/problem=7
 * 
 * This source code is licensed under the GNU v3 GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * https://github.com/50bbx/project-euler-solutions-js
 */

function getNthPrime(position) {
  let currentPos = 0
  i = 2;
  while(true) {
    if(isPrime(i)) {
      currentPos++
    }

    if(currentPos === position) {
      return i
    }

    i++
  }
}

function isPrime(num) {
  for(let i = 2; i <= Math.sqrt(num); i++) {
    if(num % i === 0) {
      return false
    }
  }

  return true
}

console.log(getNthPrime(10001))