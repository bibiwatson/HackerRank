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
    inputString.shift();
    inputString.forEach(item => {
        let n   = item.split(' ')[0];
        let top = item.split(' ')[1];
        let max = 0;

        for(let i=1; i <= n; i++){

            for(let j=i+1; j <= n; j++){
                let bit = i&j;
                if(bit >= max && bit < top){
                    max = bit;
                }
            }
        }

        console.log({max});        
    });


}