// Wait for the DOM to be fully loaded
window.addEventListener("DOMContentLoaded", (event) => {
  // Existing code (if any)
  // ...

  // Code for toPrecision()
  const number = 123.456789;
  const preciseNumber = number.toPrecision(4); // "123.5" because it rounds off

  // Get the paragraph element by its id
  const toPrecisionElement = document.getElementById("toPrecisionResult");

  // Update the paragraph element with the number in specified precision
  toPrecisionElement.innerHTML += preciseNumber;
});
