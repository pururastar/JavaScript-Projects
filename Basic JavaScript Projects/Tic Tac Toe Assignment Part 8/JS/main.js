let board = Array(9).fill(null);
let currentPlayer = 'X';
let gameActive = true;

function placeXOrO(squareNumber) {
  if (board[squareNumber] || !gameActive) return;

  board[squareNumber] = currentPlayer;
  document.querySelectorAll('#tic-tac-toe-board td')[squareNumber].innerText = currentPlayer;

  checkWinConditions();

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
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
  function resetGame() {
  board = Array(9).fill(null);
  currentPlayer = 'X';
  gameActive = true;
  
  document.querySelectorAll('#tic-tac-toe-board td').forEach(cell => {
    cell.innerText = '';
  });
  
  alert("Game has been reset!");
}

function checkWinConditions() {
  // ... (existing code)
  
  // Add the following lines to trigger the resetGame function if the game has ended
  if (!gameActive) {
    setTimeout(resetGame, 2000);  // reset the game after 2 seconds
  }
}

  
  }
  
  
}
