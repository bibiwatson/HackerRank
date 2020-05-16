const readline = require('readline');

const rl = readline.createInterface({
    input     : process.stdin,
    output    : process.stdout
});

let _input          = "";
let _currentLine    = 0;

rl.question('Tree Elements: ', (elements) => {
    _input = elements.replace(/\s\s+/g, ' ').replace(/\s/g, '\n');
    rl.close();
    main();
});

// Start of function Node
class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}; // End of function Node

// Start of function BinarySearchTree
class BinarySearchTree {

    constructor(){

    }

    insert(root, data) {
        console.log(data);
        if (root === null) {
            this.root = new Node(data);
            
            return this.root;
        }
        
        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }
        
        return this.root;
    };
    
    // Start of function getHeight
    getHeight(root) {

        if(root == null){
            return 0;
        }

        let l = (root.left == null)? 0 : this.getHeight(root.left)+1;
        let r = (root.right == null)? 0 : this.getHeight(root.right)+1;

        return Math.max(l, r);
    }; // End of function getHeight
}; // End of function BinarySearchTree

function main(){
    var tree = new BinarySearchTree();
    var root = null;
    
    var values = _input.split('\n').map(Number);
    console.log(values);

    for (var i = 1; i < values.length; i++) {
        root = tree.insert(root, values[i]);
    }
    
    console.log(tree.getHeight(root));
}
