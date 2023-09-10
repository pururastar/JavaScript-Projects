let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';

function makeMove(index) {
    if (board[index] === '') {
        board[index] = currentPlayer;
        document.querySelectorAll('.cell')[index].innerHTML = currentPlayer;
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    }
}
