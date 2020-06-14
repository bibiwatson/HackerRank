'use strict';

const readline = require('readline');

let inputString = []
let currentLine = 0;
let max         = 1;
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


function factorial(num){
    let res = 0;

    while(num > 0){
        res = (res == 0)? num : res * num;
        num--;
    }

    return res;
}



function main() {
    const num = readLine();

    console.log(factorial(num));    
}