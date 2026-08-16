class Cell {
    constructor(position) {
        this.position = position;
        this.status = 'free';
        this.symbol = null;
    }

    changeStatus(symbol) {
        if (this.status == 'free') {
            this.symbol = symbol;
            this.status = 'filled';
        }
    }
}

module.exports = Cell;