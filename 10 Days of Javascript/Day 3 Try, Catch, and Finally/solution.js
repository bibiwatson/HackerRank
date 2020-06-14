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

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    let reversed = '';

    try{
        reversed = s.split('').reverse().join('');
    }
    catch(err){
        console.log(err.message);
        reversed = s;
    }
    finally{
        console.log(reversed);
    }
}


function main() {
    const s = eval(readLine());
    
    reverseString(s);
}