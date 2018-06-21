/* 
 * Solution to Project Euler problem 67
 * 
 * You can find the problem here: https://projecteuler.net/problem=67
 * 
 * This source code is licensed under the GNU v3 GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * https://github.com/50bbx/project-euler-solutions-js
 */

const fs = require('fs')
var os = require('os')

const string = fs.readFileSync('./p067_triangle.txt', {
    encoding: 'utf-8'
});

let triangle = string.split(os.EOL).map((x) => x.split(' ').map(x => parseInt(x)))

for(let i = 0; i < triangle.length - 1; i++) {
    for(let j = 0; j < triangle[i].length; j++) {
        if(i === 0) {
            triangle[i+1][j] += triangle[i][j]
            triangle[i+1][j+1] += triangle[i][j]
        } else {
            if(j === 0){
                triangle[i+1][j] += triangle[i][j]

                if(triangle[i][j] > triangle[i][j+1]){
                    triangle[i+1][j+1] += triangle[i][j]
                }

            } else if (j === triangle[i].length - 1) {
                triangle[i+1][j+1] += triangle[i][j]

                if(triangle[i][j] > triangle[i][j-1]){
                    triangle[i+1][j] += triangle[i][j]
                }
            } else {
                if(triangle[i][j] >= triangle[i][j-1]){
                    triangle[i+1][j] += triangle[i][j]
                }
                
                if(triangle[i][j] > triangle[i][j+1]){
                    triangle[i+1][j+1] += triangle[i][j]
                }
            }
        }
    }
}

console.log(Math.max(...triangle[99]))