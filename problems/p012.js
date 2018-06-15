/* 
 * Solution to Project Euler problem 12
 * 
 * You can find the problem here: https://projecteuler.net/problem=12
 * 
 * This source code is licensed under the GNU v3 GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * https://github.com/50bbx/project-euler-solutions-js
 */

function findNumberWithAtLeast500Factors() {

    const listOfPrimeUnder500 = getListOfPrimeUnder(500)

    let i = 2
    previousTriangularNumber = 1
    while (i < 100000000) {

        const triangularNumber = previousTriangularNumber + i

        const limit = Math.sqrt(triangularNumber)
        let numberOfFactors = 1
        let current = triangularNumber
        for(let prime of listOfPrimeUnder500) {
            if(prime > limit) {
                break;
            }


            let powerOfPrime = 0
            while(current % prime === 0 && prime !== 1) {
                current /= prime
                powerOfPrime++;
            }

            numberOfFactors *= (powerOfPrime + 1)

        }

        if(numberOfFactors >= 500){
            return triangularNumber
        }

        i++
        previousTriangularNumber = triangularNumber
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
  
  function getListOfPrimeUnder(num) {
    arr = []
    for(let i = 1; i <= num; i++) {
      if(isPrime(i)) {
        arr.push(i)
      }
    }
  
    return arr
  }


console.log(findNumberWithAtLeast500Factors())