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

function vowelsAndConsonants(s) {
    
    s = s.toLowerCase();
    s = s.replace(/\s/g, '');

    const exp = /[aeiou]/gi;

    console.log(s.match(exp).join('\n'));
    console.log(s.replace(exp, '').split('').join('\n'));
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}