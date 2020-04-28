const readline = require('readline');

const rl = readline.createInterface({
    input     : process.stdin,
    output    : process.stdout
});

let _input          = [];
let _currentLine    = 0;

rl.question('Number of Elements ', (n) => {
    _input.push(n);

    rl.question('Elements: ', (elements) => {
        _input.push(elements);
        rl.close();
        main();
    })
});

function readLine(){
    return _input[_currentLine++];
}

function swap(arr, a, b){
    let tmp = arr[a];
    arr[a]  = arr[b];
    arr[b]  = tmp;

}

function main() {
    let n = parseInt(readLine());
    let a = readLine().split(' ');
    a = a.map(Number);

    let numberOfSwaps = 0;

    for(let i=0; i<n; i++){

        for(let j=0; j<n-1; j++){
            if (a[j] > a[j + 1]) {
                numberOfSwaps++;
                swap(a, j, j+1);
            }
        }
    
        if(numberOfSwaps == 0){
            break;
        }
    }

    console.log(`Array is sorted in ${numberOfSwaps} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a.pop()}`);
}