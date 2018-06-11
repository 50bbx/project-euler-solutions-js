/* 
 * Solution to Project Euler problem 5
 * 
 * You can find the problem here: https://projecteuler.net/problem=5
 * 
 * This source code is licensed under the GNU v3 GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * https://github.com/50bbx/project-euler-solutions-js
 */

function findSmallestEvenlyDivisible(max) {
  const possibleFactors = getListOfPrimeUnder(max)
  const allFactorizations = []
  for(let i = 2; i <= max; i++) {
    allFactorizations.push(getFactorization(i))
  }


  let smallestEvenlyDivisible = 1;
  for(let factor of possibleFactors) {
    if(factor === 1) {
      continue;
    }

    const possiblePowers = allFactorizations.filter(factorization => {
      return typeof factorization.get(factor) !== 'undefined'
    }).map(factorization => {
      return factorization.get(factor)
    })

    const maxPower = Math.max(...possiblePowers)
    smallestEvenlyDivisible *= Math.pow(factor, maxPower)
  }

  return smallestEvenlyDivisible
}

function getFactorization(num) {
  const possibleFactors = getListOfPrimeUnder(num)
  const factorization = new Map()

  let rest = num
  for(let factor of possibleFactors) {
    while(true) {
      if(rest % factor === 0 && factor !== 1) {
        rest = rest / factor
        const alreadyFound = factorization.get(factor)
        if(typeof alreadyFound !== 'undefined') {
          factorization.set(factor, alreadyFound + 1)
        } else {
          factorization.set(factor, 1)
        }
      } else {
        break;
      }
    }
  }

  return factorization
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

console.log(findSmallestEvenlyDivisible(20))