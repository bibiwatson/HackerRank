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
    if(i==0){
        max = parseInt(el)+1;
    }

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
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if(a > 0){
        return 'YES';
    }

    if(a == 0){
        throw new Error('Zero Error');
    }

    throw new Error('Negative Error');
}


function main() {
    let n = eval(readLine());

    while(n > 0){
        let msg = '';
        let num = readLine();
        n--;
        try{
            msg = isPositive(num);
        }
        catch(err){
            msg = err.message;
        }
        finally{
            console.log(msg);
        }
    }
    
}