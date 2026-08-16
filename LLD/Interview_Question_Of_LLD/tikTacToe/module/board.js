class Board {
    constructor(size, Cell) {
        this.size = size;
        this.board = Array.from({ length: size }, (_, row) =>  // we don't need value only need index so we have done _, and row
            Array.from({ length: size }, (_, col) => {
                return new Cell([row, col]);
            })
        );
    }
    isValidMove(x, y) {
        if (0 <= x && x < this.size && 0 <= y && y < this.size && this.board[x][y].status == 'free') {
            return true;
        }
        return false;
    }
    makeMove(x, y, symbol) {
        if (this.isValidMove(x, y)) {
            this.board[x][y].changeStatus(symbol);
            return true;
        }
        return false;
    }
    isFull() {
        for (let cell of this.board) {
            for (let c of cell) {
                if (c.status == 'free') {
                    return false;
                }
            }
        }
        return true;
    }
}
module.exports = Board;