'use strict';

class Polygon{
    constructor(side_lengths){
        this.side_lengths = side_lengths;
    }

    perimeter(){
        return this.side_lengths.reduce((a,b) => a + b, 0);
    }
}


function main() {
    const rectangle = new Polygon([10, 20, 10, 20]);
    const square = new Polygon([10, 10, 10, 10]);
    const pentagon = new Polygon([10, 20, 30, 40, 43]);

    console.log(rectangle.perimeter());
    console.log(square.perimeter());
    console.log(pentagon.perimeter());
}