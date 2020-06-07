const readline = require('readline');

let inputString = []
let currentLine = 0;
let i           = 0;
let max         = 0;

const rl = readline.createInterface({
    input     : process.stdin,
    output    : process.stdout
});

rl.question('# Elements: ', (elements) => {
    inputString.push(elements.replace(/\s\s+/g, ' '));
    max = elements;
});


rl.on('line', (el) => {
    i++;
    
    inputString.push(el.replace(/\s\s+/g, ' '));
    
    if(i == max){
        rl.close();
    }
});

rl.on('close', () => {
    main();
});

const readLine = () => {
    return inputString[currentLine++];
}

const main = () => {
    const N = parseInt(readLine(), 10);

    let filtered = [];

    for (let NItr = 0; NItr < N; NItr++) {
        const firstNameEmailID = readLine().split(' ');
        const firstName = firstNameEmailID[0];
        const emailID   = firstNameEmailID[1];

        if(emailID.search('@gmail') >= 0){
            filtered.push(firstName);
        }
    }

    process.stdout.write(filtered.sort().join('\n'));
}