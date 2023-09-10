// Wait for the DOM to be fully loaded
window.addEventListener("DOMContentLoaded", (event) => {

  // Code for toString()
  const num = 42;
  const strNum = num.toString();
  
  // Get the paragraph element by its id
  const numToStringElement = document.getElementById("numberToString");
  
  // Update the paragraph element with the number converted to string
  numToStringElement.innerHTML += strNum;

});
