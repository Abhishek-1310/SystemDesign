const Player = require('./player');
const Cell = require('./cell');
const Board = require('./board');
const Game = require('./game');

const player1 = new Player(1, 'Abhishek', 'x');
const Player2 = new Player(2, 'Ravi', 'o');

let board = new Board(3, Cell);

let game = new Game(board);

game.addPlayer(player1);
game.addPlayer(Player2);

function printBoard() {
    for (let row of board.board) {
        console.log(
            row.map(cell => cell.position).join(' | ')
        );
        console.log('----------------');
    }
}
printBoard()

game.makeMove(0, 0); // X
game.makeMove(1, 0); // O
game.makeMove(0, 1); // X
game.makeMove(1, 1); // O
game.makeMove(0, 2); // X