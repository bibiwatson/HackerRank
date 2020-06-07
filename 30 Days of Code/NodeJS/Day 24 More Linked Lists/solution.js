const readline = require('readline');

let _input              = "";
let _currentLine        = 0;
let input_currentline   = 0;

const rl = readline.createInterface({
    input     : process.stdin,
    output    : process.stdout
});

const readLine = () => {
    return input_stdin_array[input_currentline++];
}


rl.question('Tree Elements: ', (elements) => {
    input_stdin_array = elements.replace(/\s\s+/g, ' ').replace(/\s/g, '\n');
    input_stdin_array = input_stdin_array.split('\n');
    rl.close();
    main();
});


class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Solution{

    removeDuplicates(head){
        let act     = head;

        while(act){

            let next = act.next;
            
            if(act.next != null){

                if(act.data == next.data){
                    act.next = next.next;
                }
                else{
                    act = act.next;
                }
            }
            else{
                act = null;
            }

        }

        return head;
    }

	insert(head,data){
        var p = new Node(data);
        if(head == null){
            head = p;
        }
        else if(head.next == null){
            head.next = p;
        }
        else{
            var start = head;
            while(start.next != null){
                start = start.next;
            }
            start.next = p;
        }

        return head;        
    };

	display(head){
        var start=head;
        
        while(start){
            process.stdout.write(start.data+" ");
            start = start.next;
        }
    }
}

function main(){
    let T       = parseInt(readLine());
    let head    = null;
    let mylist  = new Solution();

    for(i = 0; i < T; i++){
        let data    = parseInt(readLine());
        head        = mylist.insert(head,data);
    }

    head = mylist.removeDuplicates(head);
    mylist.display(head);
}