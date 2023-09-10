var board = [null, null, null, null, null, null, null, null, null];
var currentPlayer = 'X';

function placeXOrO(squareNumber) {
  if (board[squareNumber] === null) {
    board[squareNumber] = currentPlayer;
    document.getElementById('tic-tac-toe-board').rows[Math.floor(squareNumber / 3)].cells[squareNumber % 3].innerText = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}


