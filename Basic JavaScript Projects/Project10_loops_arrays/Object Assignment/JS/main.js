// Create an object using the let keyword
let myObject = {
  name: "John",
  age: 30,
  occupation: "Engineer",
  // Define a method to concatenate object properties into a string
  getInfo: function() {
    return `Name: ${this.name}, Age: ${this.age}, Occupation: ${this.occupation}`;
  }
};

// Function to display object information
function displayObjectInfo() {
  // Use the object method to get information and display it in the HTML element with id 'objectInfo'
  document.getElementById("objectInfo").innerHTML = myObject.getInfo();
}
