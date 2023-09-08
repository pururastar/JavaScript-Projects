// Get references to HTML elements
let displayButton = document.getElementById("displayButton");
let outputElement = document.getElementById("output");

// Add an event listener to the button
displayButton.addEventListener("click", function () {
    // Call the function and store the result
    let concatenatedString = concatenateStrings();

    // Display the result in the HTML element
    outputElement.textContent = concatenatedString;
});
