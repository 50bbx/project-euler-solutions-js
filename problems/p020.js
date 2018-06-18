/* 
 * Solution to Project Euler problem 20
 * 
 * You can find the problem here: https://projecteuler.net/problem=20
 * 
 * This source code is licensed under the GNU v3 GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * https://github.com/50bbx/project-euler-solutions-js
 */

function factorial(n) {
  if(n === 0) {
    return [1]
  }
  
  const result = factorial(n - 1)
  
  let overflow = [0]
  const limit = result.length
  for(let i = 0; i <= limit; i++) {
    const digit = (result[i] || 0) * n + overflow.pop()
    
    if(digit > 9) {
      let newOverflow = parseInt(digit / 10).toString().split('').map((x, index, arr) => parseInt(x) + (overflow[arr.length - index - 1] || 0))
      overflow = newOverflow
      for(let j = 0;j < Math.max(newOverflow.length, overflow.length); j++) {

      }
      
      result[i] = digit % 10
    } else {
      result[i] = digit
      overflow = [0] 
    }
  }

  return result
}

console.log(factorial(15))