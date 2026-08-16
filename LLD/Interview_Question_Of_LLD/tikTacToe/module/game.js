class Game {
    constructor(board) {
        this.board = board;
        this.player = [];
        this.turn = null;
        this.gameStatus = 'inProgress';
    }
    addPlayer(player) {
        this.player.push(player);
        if (this.player.length === 1) {
            this.turn = player
        }
    }
    makeMove(x, y) {
        if (this.gameStatus !== 'inProgress') {
            return;
        }
        const symbol = this.turn.symbol;
        const sucess = this.board.makeMove(x, y, symbol);

        if (!sucess) {
            console.log('invalid move');
            return;
        }

        if (this.checkWinner()) {
            this.gameStatus = 'won';
            console.log(`${this.turn.name} you won this game`);
            return;
        }
        if (this.board.isFull()) {
            this.gameStatus = 'draw';
            console.log('match is draw');
            return;
        }
        this.changeTurn();
    }
    checkWinner() {
        const symbol = this.turn.symbol;
        const n = this.board.size;
        const board = this.board.board;

        for (let i = 0; i < n; i++) {
            let won = true;
            for (let j = 0; j < n; j++) {
                if (board[i][j].symbol !== symbol) {
                    won = false;
                    break;
                }
            }
            if (won) return true;
        }
        for (let i = 0; i < n; i++) {
            let won = true;
            for (let j = 0; j < n; j++) {
                if (board[j][i].symbol !== symbol) {
                    won = false;
                    break;
                }
            }
            if (won) return true;
        }
        let won = true;

        for (let i = 0; i < n; i++) {
            if (board[i][i].symbol !== symbol) {
                won = false;
                break;
            }
        }
        if (won) return true;

        for (let i = 0; i < n; i++) {
            won = true;
            if (board[i][n - i - 1].symbol !== symbol) {
                won = false;
                break;
            }
        }
        return won;

    }
    changeTurn() {
        if (this.turn != this.player[0]) {
            this.turn = this.player[0];
        } else {
            this.turn = this.player[1];
        }

    }
}
module.exports = Game;