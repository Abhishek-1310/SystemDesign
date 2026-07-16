class Board {
    constructor(size, pieces, level) {
        this.size = size;
        this.pieces = pieces;
        this.level = level;
    }
}
const checkpoint1 = new Board(
    8,
    ["King", "Pawn", "Queen"],
    5
);

const checkpoint2 = new Board(
    8,
    ["Queen", "King", "Pawn"],
    6
);

const checkpoint3 = new Board(
    8,
    ["King", "Queen", "Pawn"],
    8
);
// problem every time we have to create checkpoint manually what if there is 100 of 1000 pieces 100 players inventory  it will become
// so much difficulty to make check point

// do something like make one give check point all time this is where prototype design pattern comes.
