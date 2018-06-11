/* 
 * Solution to Project Euler problem 2
 * 
 * You can find the problem here: https://projecteuler.net/problem=2
 * 
 * This source code is licensed under the GNU v3 GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * https://github.com/50bbx/project-euler-solutions-js
 */

function* fibonacciUntil(max) {
  let current = 1
  let next = 2

  yield current
  yield next
  while(true) {
    [current, next] = [next, current + next]
    if(next > max) {
      break
    }
    yield next
  }
}

const gen = fibonacciUntil(4*1000000)

let sum = 0
while(true) {
  const {value, done} = gen.next()
  if(done) {
    break
  }
  if(value % 2 === 0) {
    sum = sum + value
  }
}

console.log(sum)