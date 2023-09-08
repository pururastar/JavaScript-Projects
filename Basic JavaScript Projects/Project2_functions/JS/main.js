// Define a function
function changeText() {
    // Assign two variables
    var firstText = "Hello, ";
    var secondText = "World!";
    
    // Combine the variables
    var combinedText = firstText + secondText;

    // Use document.getElementById() to get a reference to a paragraph element
    var paragraph = document.getElementById("output");

    // Change the text content of the paragraph
    paragraph.textContent = combinedText;
}
