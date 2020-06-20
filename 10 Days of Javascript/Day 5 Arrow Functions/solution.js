'use strict';

const readline = require('readline');

let inputString = []
let currentLine = 0;
let max         = 2;
let i           = 0;

const rl = readline.createInterface({
    input     : process.stdin,
    output    : process.stdout
});

rl.on('line', (el) => {
    i++;

    inputString.push(el.replace(/\s\s+/g, ' '));

    if(i==max){
        rl.close();
    }
});


rl.on('close', () => {
    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
const modifyArray = nums => nums.map(num => (num%2==0)? num*2 : num * 3)


function main() {
    const n = +(readLine());
    const a = readLine().split(' ').map(Number);
    
    console.log(modifyArray(a).toString().split(',').join(' '));
}