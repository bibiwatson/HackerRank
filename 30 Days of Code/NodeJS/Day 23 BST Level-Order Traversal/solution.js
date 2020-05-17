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
        this.data   = data;
        this.left   = null;
        this.right  = null;
    }
}; // End of function Node

// Start of function BinarySearchTree
class BinarySearchTree {
    constructor(){

    }

    insert(root, data) {
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
    
    // Start of function levelOrder
    levelOrder(root) {
        let lista   = [];

        lista.push(root);

        while(lista.length > 0){
            let cur = lista[0];
            lista = lista.slice(1);

            if(cur.left != null){
                lista.push(cur.left);
            }

            if(cur.right != null){
                lista.push(cur.right);
            }

            process.stdout.write(`${cur.data} `);
        }

	}; // End of function levelOrder
}; // End of function BinarySearchTree

const main = () =>{

    const tree  = new BinarySearchTree();
    let root    = null;
    var values = _input.split('\n').map(Number);
    
    for (var i = 1; i < values.length; i++) {
        root = tree.insert(root, values[i]);
    }
    
    const lista = tree.levelOrder(root);
}