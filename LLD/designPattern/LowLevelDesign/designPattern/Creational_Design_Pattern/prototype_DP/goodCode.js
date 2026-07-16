// Prototype Pattern creates new objects by cloning an existing object, avoiding the cost of creating and initializing 
// objects from scratch.
class Board {
    constructor(size, pieces, level) {
        this.size = size;
        this.pieces = pieces;
        this.level = level;
    }
    clone() {
        return new Board(
            this.size,
            [...this.pieces],
            this.level
        )
    }
}

const originalBoard = new Board(
    8,
    ["King", "Queen", "Pawn"],
    5
);

const checkpoint1 = originalBoard.clone();
const checkpoint2 = originalBoard.clone();
const checkpoint3 = originalBoard.clone();

console.log(checkpoint1);
console.log(checkpoint2);

// What is Copy?
// Suppose we have an object.

// const person = {
//     name: "Abhishek",
//     age: 24
// };

// Now we want another object with the same values.

// There are two ways:
// Shallow Copy
// Deep Copy

// Shallow Copy              	    Deep Copy
// Copies only the first level	    Copies all levels
// Nested objects are shared	    Nested objects are duplicated
// Faster	                        Slower (copies more data)
// Less memory	                    More memory
// Spread (...) and Object.assign()	structuredClone()

// in deep copy u change in obj2 but obj1 will not change but in sollow copy when you change obj obj value it will change original value
// it is not copy perfectly
// so use const copy = structuredClone(original); it will do deep copy