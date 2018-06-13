/* 
 * Solution to Project Euler problem 9
 * 
 * You can find the problem here: https://projecteuler.net/problem=9
 * 
 * This source code is licensed under the GNU v3 GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * https://github.com/50bbx/project-euler-solutions-js
 */


function findPitagoreanTriple(condition) {

    for(let a = 1; a < 1000; a++) {
        for(let b = 1; b < 1000; b++) {
            const c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2))
            
            if(Number.isInteger(c) && ((a + b + c) === 1000))

            return [a, b, c];
        }
    }

    return [1, 1, 1]
 }

function getProduct([a, b, c]) {
    return a * b* c
}


console.log(getProduct(findPitagoreanTriple()))