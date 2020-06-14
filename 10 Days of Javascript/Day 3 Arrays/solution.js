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

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    nums.sort((a,b)=>a-b);
    let max = nums.pop();

    for(let i = nums.length - 1; i >= 0; i--){
        if(nums[i] != max){
            max = nums[i];
            break;
        }
    }

    return max;
}

function main() {
    const n     = +(readLine());
    const nums  = readLine().split(' ').map(Number);

    console.log(getSecondLargest(nums));
}