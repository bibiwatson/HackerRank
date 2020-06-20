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

class Rectangle{
    constructor(length, width){
        this.length     = length;
        this.width      = width;
        this.perimeter  = this.calPerimeter();
        this.area       = this.calArea(); 
    }

    calPerimeter(){
        return 2 * (this.length + this.width);
    }

    calArea(){
        return this.length * this.width;
    }
}


function main() {
    const a = +(readLine());
    const b = +(readLine());
    
    const rec = new Rectangle(a, b);
    
    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    console.log(rec.area);
}