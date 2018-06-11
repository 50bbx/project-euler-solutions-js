/* 
 * Solution to Project Euler problem 3
 * 
 * You can find the problem here: https://projecteuler.net/problem=3
 * 
 * This source code is licensed under the GNU v3 GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * https://github.com/50bbx/project-euler-solutions-js
 */

const largestPrimeFactorOf = (num) => {
  const stop = parseInt(Math.sqrt(num))

  let largest = num
  let i = 1
  while(i <= stop) {
    if(num % i === 0 && isPrime(i)) {
      largest = i
    }
    i++
  }

  return largest
}

function isPrime(num) {
  const stop = parseInt(Math.sqrt(num))

  let i = 2
  while(i <= stop) {
    if (num % i === 0) {
      return false
    }
    i++
  }

  return true
}

console.log(largestPrimeFactorOf(600851475143))