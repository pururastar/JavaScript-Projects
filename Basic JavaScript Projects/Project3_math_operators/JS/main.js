// main.js

// Define a function that performs multiple mathematical operations and displays the results
function performMultipleOperations() {
  // Perform addition, subtraction, multiplication, and division operations
  let additionResult = 5 + 3;
  let subtractionResult = 10 - 4;
  let multiplicationResult = 6 * 7;
  let divisionResult = 20 / 2;

  // Get the paragraph element with the id "Math"
  let mathParagraph = document.getElementById("Math");

  // Display the results in the paragraph
  mathParagraph.textContent = `Result of Addition: ${additionResult}, Result of Subtraction: ${subtractionResult}, Result of Multiplication: ${multiplicationResult}, Result of Division: ${divisionResult}`;
}

// Call the function when the page loads
window.onload = performMultipleOperations;
