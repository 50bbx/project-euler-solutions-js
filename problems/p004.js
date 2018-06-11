/* 
 * Solution to Project Euler problem 4
 * 
 * You can find the problem here: https://projecteuler.net/problem=4
 * 
 * This source code is licensed under the GNU v3 GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * https://github.com/50bbx/project-euler-solutions-js
 */

function getBiggestPalindrome() {
  const x = 999
  const y = 999
  
  let biggestPalindrome = null
  for(let i = 0; i <= 899;  i++) {
    for(let j = 0; j <= 899; j++){
      const possiblePalindrome = (x-i)*(y-j)
      if(possiblePalindrome > biggestPalindrome && isPalindrome(possiblePalindrome)) {
        biggestPalindrome = possiblePalindrome
        break
      }
    }
  } 

  return biggestPalindrome
}

function isPalindrome(num) {
  const arr = new String(num).split('')

  let isPalindrome = true
  for(let i = 0; i <= arr.length / 2; i++) {
    isPalindrome = isPalindrome && (arr[i] === arr[arr.length - i - 1] )
  }

  return isPalindrome

}


console.log(getBiggestPalindrome())