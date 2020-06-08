'use strict';

const readline = require('readline');

let inputString = []
let currentLine = 0;
let i           = 0;
let max         = 0;

const rl = readline.createInterface({
    input     : process.stdin,
    output    : process.stdout
});

rl.question('Input: ', (elements) => {
    inputString.push(elements.replace(/\s\s+/g, ' '));
    max = elements;
    rl.close();
});


rl.on('close', () => {
    main();
});

function readLine() {
    return inputString[currentLine++];
}

/**
*   A line of code that prints "Hello, World!" on a new line is provided in the editor. 
*   Write a second line of code that prints the contents of 'parameterVariable' on a new line.
*
*	Parameter:
*   parameterVariable - A string of text.
**/
function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');
    // Write a line of code that prints parameterVariable to stdout using console.log:
    console.log(parameterVariable);
    
}


function main() {
    const parameterVariable = readLine();
    
    greeting(parameterVariable);
}