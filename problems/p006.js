/* 
 * Solution to Project Euler problem 6
 * 
 * You can find the problem here: https://projecteuler.net/problem=6
 * 
 * This source code is licensed under the GNU v3 GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * https://github.com/50bbx/project-euler-solutions-js
 */

function sumSquareDifference(num) {
  return squareOfSum(num) - sumOfSquares(num)
}

function sumOfSquares(num) {
  let sum = 0
  for(let i = 0; i <= num; i++) {
    sum += Math.pow(i,2)
  }

  return sum
}

function squareOfSum(num) {
  let sum = 0
  for(let i = 0; i <= num; i++) {
    sum += i
  }

  return Math.pow(sum, 2)
}


console.log(sumSquareDifference(10))
console.log(sumSquareDifference(100))