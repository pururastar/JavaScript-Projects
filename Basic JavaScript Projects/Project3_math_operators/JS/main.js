// main.js

// Define a function that performs a modulus operation and displays the result
function performModulusOperation() {
  // Perform a modulus operation
  let dividend = 17;
  let divisor = 5;
  let modulusResult = dividend % divisor;

  // Get the paragraph element with the id "Math"
  let mathParagraph = document.getElementById("Math");

  // Display the result in the paragraph
  mathParagraph.textContent = `Result of Modulus Operation: ${modulusResult}`;
}

// Call the function when the page loads
window.onload = performModulusOperation;
