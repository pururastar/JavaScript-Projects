window.addEventListener("DOMContentLoaded", (event) => {
  const searchString = "Look for this text.";
  const searchIndex = searchString.search("for");
  
  const searchParagraph = document.getElementById("searchResult");
  searchParagraph.innerHTML += `The index of 'for' is ${searchIndex}.`;
});
