// Wait for the DOM to be fully loaded
window.addEventListener("DOMContentLoaded", (event) => {
  // Get the paragraph element by its id
  const pElement = document.getElementById("result");
  
  // Create strings to concatenate
  const str1 = "Hello, ";
  const str2 = "world!";
  
  // Use the concat() method to concatenate the strings
  const concatenatedString = str1.concat(str2);
  
  // Update the paragraph element with the concatenated string
  pElement.innerHTML += concatenatedString;
});
