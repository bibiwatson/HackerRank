const readline = require('readline');

let input_stdin_array   = []

const rl = readline.createInterface({
    input     : process.stdin,
    output    : process.stdout
});


rl.question('Book was deturned: ', (elements) => {
    input_stdin_array.push(elements.replace(/\s\s+/g, ' '));

    rl.question('Due date: ', (els) => {
        input_stdin_array.push(els.replace(/\s\s+/g, ' '));

        rl.close();
        main();

    });
});


class Solution{

    constructor(retDate, dueDate){
        this.redDate = retDate;
        this.dueDate = dueDate;

        this.setDates();
    }

    setDates(){
        let redDate = this.redDate.split(' ');
        let dueDate = this.dueDate.split(' ');

        this.redDate = new Date(`${redDate[2]}-${redDate[1]}-${redDate[0]} 00:00:00`);
        this.dueDate = new Date(`${dueDate[2]}-${dueDate[1]}-${dueDate[0]} 00:00:00`);


    }

    getTotal(){
        let days = 0;

        if(Math.round((this.redDate - this.dueDate)/1000*60*60*24) <= 0){
            return 0;
        }

        if(this.redDate.getFullYear() == this.dueDate.getFullYear()){
            if(this.redDate.getMonth() == this.dueDate.getMonth()){

                days = Math.abs(this.redDate.getDate() - this.dueDate.getDate());
                return days * 15
            }
            else{
                days = Math.abs(this.redDate.getMonth() - this.dueDate.getMonth());
                return days * 500;
            }
        }
        else{
            return 10000;
        }
    }
}

const main = () => {

    const solution = new Solution(input_stdin_array[0], input_stdin_array[1]);
    console.log(solution.getTotal());
}