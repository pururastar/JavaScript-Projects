window.addEventListener("DOMContentLoaded", (event) => {
  const lowerCaseString = "hello, world!";
  const upperCaseString = lowerCaseString.toUpperCase();
  
  const upperCaseParagraph = document.getElementById("upperCaseResult");
  upperCaseParagraph.innerHTML += upperCaseString;
});
