// main.js

// Define a function that performs subtraction and displays the result
function performSubtraction() {
  // Perform the subtraction operation
  let result = 10 - 5; // You can use any numbers you want here

  // Get the paragraph element with the id "Math"
  let mathParagraph = document.getElementById("Math");

  // Display the result in the paragraph
  mathParagraph.textContent = `Result of Subtraction: ${result}`;
}

// Call the function when the page loads
window.onload = performSubtraction;
