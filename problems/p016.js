/* 
 * Solution to Project Euler problem 16
 * 
 * You can find the problem here: https://projecteuler.net/problem=16
 * 
 * This source code is licensed under the GNU v3 GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * https://github.com/50bbx/project-euler-solutions-js
 */

let powerOfTwo = [1]
for(let i = 1; i <= 1000; i++) {
    let overflow = 0
    const length = powerOfTwo.length
    for(let j = 0; j <= length; j++){
        let digit = 2*(powerOfTwo[j] || 0) + overflow
        if(digit > 9) {
            overflow = 1
            digit = digit - 10 
        } else {
            overflow = 0
        }

        powerOfTwo[j] = digit
    }
}

console.log(powerOfTwo.reduce((acc, cur) => acc + cur, 0))