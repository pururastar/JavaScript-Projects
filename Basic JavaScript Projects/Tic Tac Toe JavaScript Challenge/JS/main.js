let currentPlayer = "X";
let playerXImage = 'D:\Users\Rodrigo\Desktop\WEBDEVELOPER\JavaScript-Projects\Basic JavaScript Projects\Tic Tac Toe JavaScript Challenge\Images\X.png';
let playerOImage = 'D:\Users\Rodrigo\Desktop\WEBDEVELOPER\JavaScript-Projects\Basic JavaScript Projects\Tic Tac Toe JavaScript Challenge\Images\O.png
';
let soundEffect = document.getElementById('mySound');

function playSound() {
  soundEffect.play();
}

function placeXOrO(squareNumber) {
  const square = document.getElementById(squareNumber.toString());
  if (square.style.backgroundImage === "") {
    square.style.backgroundImage = `url('${currentPlayer === "X" ? playerXImage : playerOImage}')`;
    playSound();
    checkWinConditions();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWinConditions() {
  const square0 = document.getElementById("0").style.backgroundImage;
  const square1 = document.getElementById("1").style.backgroundImage;
  const square2 = document.getElementById("2").style.backgroundImage;

  if (square0 === square1 && square1 === square2 && square0 !== "") {
    alert(currentPlayer + " wins!");
  }
  // Add other win conditions...
}
