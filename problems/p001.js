/* 
 * Solution to Project Euler problem 1
 * 
 * You can find the problem here: https://projecteuler.net/problem=1
 * 
 * This source code is licensed under the GNU v3 GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * https://github.com/50bbx/project-euler-solutions-js
 */

function* multiplesOfNUntilMax(n, max) {
  let i = 1
  while(i * n < max) {
    
    const multiple = n * i
    i++

    yield multiple
  }
}

const multiplesOfThreeUntil = multiplesOfNUntilMax(3,1000)
const multiplesOfFiveUntil = multiplesOfNUntilMax(5,1000)

let sum = 0
while(true) {
  const nextThreeMultiple = multiplesOfThreeUntil.next()
  const nextFiveMultiple = multiplesOfFiveUntil.next()
  
  if(nextThreeMultiple.done !== true && nextThreeMultiple.value % 5 !== 0) {
    sum = sum + nextThreeMultiple.value
  }

  if(nextFiveMultiple.done !== true) {
    sum = sum + nextFiveMultiple.value
  }

  if(nextThreeMultiple.done && nextFiveMultiple.done) {
    break
  }
}

console.log(sum)