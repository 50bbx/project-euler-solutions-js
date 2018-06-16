/* 
 * Solution to Project Euler problem 15
 * 
 * You can find the problem here: https://projecteuler.net/problem=15
 * 
 * This source code is licensed under the GNU v3 GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * https://github.com/50bbx/project-euler-solutions-js
 */

let counter = 0

position = [0,0]

gridSize = 20

function move(position, direction) {

    const [a, b] = position
    const [d, r] = direction
    position = [a+d, b+r]

    if(a+d > gridSize + 1 || b+r > gridSize + 1){
        return;
    }

    if(a+d === gridSize + 1 && b+r === gridSize + 1) {
        counter++;
        console.log(counter++)
        return;
    }
    
    move(position, [1,0])
    move(position, [0,1])
}

move([1,1], [1,0])
move([1,1], [0,1])

console.log(counter)