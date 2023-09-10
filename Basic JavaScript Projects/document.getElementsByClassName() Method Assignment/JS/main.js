function changeText() {
  // Get elements with the class name "example-class"
  const elements = document.getElementsByClassName('example-class');

  // Loop through elements and change text
  for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = "Changed!";
  }
}
