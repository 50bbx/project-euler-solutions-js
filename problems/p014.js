/* 
 * Solution to Project Euler problem 14
 * 
 * You can find the problem here: https://projecteuler.net/problem=14
 * 
 * This source code is licensed under the GNU v3 GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * https://github.com/50bbx/project-euler-solutions-js
 */


function transformOdd(n) {
    return 3*n+1
}

function transformEven(n) {
    return n/2
}

let longestSeries = 0
let number = 0
for(let i = 1000000; i > 1; i--) {
    
    let cur = i
    let series = 0
    while(cur > 1) {
        if(cur % 2 === 0) {
            cur = transformEven(cur)
        } else {
            cur = transformOdd(cur)
        }

        series++
    }

    if(series > longestSeries) {
        longestSeries = series
        number = i
    }
}

console.log(number)