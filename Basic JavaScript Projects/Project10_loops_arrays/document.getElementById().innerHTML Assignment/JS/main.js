function displayArray() {
  const myArray = ["Apple", "Banana", "Cherry"];
  let arrayContent = "The fruits are: ";

  for (let i = 0; i < myArray.length; i++) {
    arrayContent += myArray[i];

    if (i < myArray.length - 1) {
      arrayContent += ", ";
    }
  }

  document.getElementById("arrayDisplay").innerHTML = arrayContent;
}

// Call the function to display the array
displayArray();
