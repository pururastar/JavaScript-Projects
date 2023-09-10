// Wait for the DOM to be fully loaded
window.addEventListener("DOMContentLoaded", (event) => {
  
  // Code for concat()
  const pElement = document.getElementById("result");
  const str1 = "Hello, ";
  const str2 = "world!";
  const concatenatedString = str1.concat(str2);
  pElement.innerHTML += concatenatedString;
  
  // Code for slice()
  const fullString = "This is a sample text to slice.";
  const slicedString = fullString.slice(10, 16); // slices the string from index 10 to 15
  
  const newParagraph = document.getElementById("slicedResult");
  newParagraph.innerHTML += slicedString;
});
