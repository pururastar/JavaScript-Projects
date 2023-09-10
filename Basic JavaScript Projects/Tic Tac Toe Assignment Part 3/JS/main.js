let currentPlayer = "X"; // X is the starting player.
const cells = document.querySelectorAll(".cell");
let gameActive = true;

function handleClick(event) {
    const cell = event.currentTarget;
    
    if (cell.textContent === "X" || cell.textContent === "O" || !gameActive) {
        return;
    }

    cell.textContent = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

cells.forEach(cell => cell.addEventListener("click", handleClick));
