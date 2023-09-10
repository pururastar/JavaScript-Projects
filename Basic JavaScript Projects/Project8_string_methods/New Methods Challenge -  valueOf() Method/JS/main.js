window.addEventListener("DOMContentLoaded", (event) => {
  const stringObj = new String("hello");
  const primitiveString = stringObj.valueOf();
  const valueOfParagraph = document.getElementById("valueOfResult");
  valueOfParagraph.innerHTML += primitiveString;
});
