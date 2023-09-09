function outerFunction() {
    var outerMessage = "This is the outer function. ";

    function innerFunction() {
        var innerMessage = "This is the inner function. ";
        var combinedMessage = outerMessage + innerMessage;
        return combinedMessage;
    }

    var result = innerFunction();

    // Display the result in the browser
    var outputElement = document.getElementById("output");
    outputElement.textContent = result;
}

// Call the outer function
outerFunction();
