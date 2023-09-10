const board = Array.from(document.querySelectorAll('.cell'));
let currentPlayer = 'X';

function checkWin() {
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
  
  for (const [a, b, c] of winningCombination) {
    if (board[a].textContent && board[a].textContent === board[b].textContent && board[a].textContent === board[c].textContent) {
      alert(`${currentPlayer} wins!`);
      return true;
    }
  }
  
  return false;
}

function handleClick(event) {
  const cell = event.target;
  
  if (cell.textContent === '') {
    cell.textContent = currentPlayer;
    
    if (checkWin()) {
      board.forEach(cell => cell.removeEventListener('click', handleClick));
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

board.forEach(cell => cell.addEventListener('click', handleClick));
