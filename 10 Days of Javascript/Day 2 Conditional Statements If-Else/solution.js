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

function getGrade(score) {
    let grade;
    // Write your code here

    if(score <= 5){
        grade = 'F';
    }
    else if(score <= 10){
        grade = 'E';
    }
    else if(score <= 15){
        grade = 'D';
    }
    else if(score <= 20){
        grade = 'C';
    }
    else if(score <= 25){
        grade = 'B';
    }
    else if(score <= 30){
        grade = 'A';
    }

    return grade;
}

function main() {
    const score = +(readLine());
    
    console.log(getGrade(score));
}