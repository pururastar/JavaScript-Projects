function checkTemperature() {
    // Get the temperature value from the input field
    var temperature = parseFloat(document.getElementById("temperatureInput").value);

    // Check the temperature and display a message
    if (isNaN(temperature)) {
        // Check if the input is not a number
        document.getElementById("result").textContent = "Please enter a valid number.";
    } else if (temperature >= 30) {
        document.getElementById("result").textContent = "It's hot!";
    } else if (temperature >= 10 && temperature < 30) {
        document.getElementById("result").textContent = "It's warm.";
    } else {
        document.getElementById("result").textContent = "It's cold.";
    }
}
