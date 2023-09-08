// main.js

// Define a function that performs multiplication and division and displays the results
function performMultiplicationAndDivision() {
  // Perform the multiplication operation
  let multiplicationResult = 5 * 6; // You can use any numbers you want here

  // Perform the division operation
  let divisionResult = 20 / 4; // You can use any numbers you want here

  // Get the paragraph element with the id "Math"
  let mathParagraph = document.getElementById("Math");

  // Display the results in the paragraph
  mathParagraph.textContent = `Result of Multiplication: ${multiplicationResult}, Result of Division: ${divisionResult}`;
}

// Call the function when the page loads
window.onload = performMultiplicationAndDivision;
