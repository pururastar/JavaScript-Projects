// Define a dictionary
var myDictionary = {
    "key1": "value1",
    "key2": "value2",
    "key3": "value3"
};

// Function to display a dictionary value
function displayValue() {
    var result = myDictionary["key2"]; // Change "key2" to the key you want to display
    document.getElementById("Dictionary").innerHTML = result;
}
