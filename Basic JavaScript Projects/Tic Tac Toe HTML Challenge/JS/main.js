let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
let currentPlayer = 'X';

function makeMove(row, col) {
  if (board[row][col] === '') {
    board[row][col] = currentPlayer;
    document.getElementById(`${row}${col}`).innerHTML = currentPlayer;
    
    if (checkWin(row, col)) {
      document.getElementById("message").innerHTML = `Player ${currentPlayer} wins!`;
    }

    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
  }
}

function checkWin(row, col) {
  // Check row
  if (board[row][0] === currentPlayer && board[row][1] === currentPlayer && board[row][2] === currentPlayer) {
    return true;
  }
  // Check column
  if (board[0][col] === currentPlayer && board[1][col] === currentPlayer && board[2][col] === currentPlayer) {
    return true;
  }
  // Check diagonal
  if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
    return true;
  }
  if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
    return true;
  }
  return false;
}
