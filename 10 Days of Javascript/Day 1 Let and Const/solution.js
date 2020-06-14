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

function main() {
        const PI = Math.PI;

        // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
        let r = readLine();
        let area = PI * (r * r);
        let perimeter = PI * (2 * r);
        
        // Print the area of the circle:
        console.log(area);
        
        // Print the perimeter of the circle:
        console.log(perimeter);

    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}