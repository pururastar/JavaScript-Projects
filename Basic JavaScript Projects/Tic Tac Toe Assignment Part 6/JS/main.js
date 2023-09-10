var board = [null, null, null, null, null, null, null, null, null];
var currentPlayer = 'X';
var gameActive = true;

function placeXOrO(squareNumber) {
  if (board[squareNumber] === null && gameActive) {
    board[squareNumber] = currentPlayer;
    document.getElementById('tic-tac-toe-board').rows[Math.floor(squareNumber / 3)].cells[squareNumber % 3].innerText = currentPlayer;
    checkWinConditions();
    if (gameActive) {
      disableClick();
      setTimeout(computersTurn, 1000); // Computer will make its move after 1 second
    }
  }
}

function checkWinConditions() {
  const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningCombination.length; i++) {
    const [a, b, c] = winningCombination[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      alert(`Player ${board[a]} wins!`);
      gameActive = false;
      return;
    }
  }
}

function computersTurn() {
  let randomSquare = Math.floor(Math.random() * 9);
  while (board[randomSquare] !== null) {
    randomSquare = Math.floor(Math.random() * 9);
  }
  board[randomSquare] = 'O';
  document.getElementById('tic-tac-toe-board').rows[Math.floor(randomSquare / 3)].cells[randomSquare % 3].innerText = 'O';
  checkWinConditions();
  enableClick();
}

function disableClick() {
  gameActive = false;
}

function enableClick() {
  gameActive = true;
}
