/* 
 * Solution to Project Euler problem 10
 * 
 * You can find the problem here: https://projecteuler.net/problem=10
 * 
 * This source code is licensed under the GNU v3 GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * https://github.com/50bbx/project-euler-solutions-js
 */

function sieveOfEratosthenes(n) {
    let array = [], upperLimit = Math.sqrt(n), output = [];

    for (let i = 0; i < n; i++) {
        array.push(true);
    }

     // Remove multiples of primes starting from 2, 3, 5,...
     for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }

    for (var i = 2; i < n; i++) {
        if(array[i]) {
            output.push(i);
        }
    }

    return output

}


console.log(sieveOfEratosthenes(2000000).reduce((acc, val) => acc + val, 0))