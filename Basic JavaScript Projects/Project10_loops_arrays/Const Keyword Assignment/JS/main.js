// Creating an object using const keyword
const myObject = {
  name: "Alice",
  age: 30
};

function constant_function() {
  // Display properties of the constant object
  document.getElementById("Constant").innerHTML = `Name: ${myObject.name}, Age: ${myObject.age}`;
}

// Changing a property's value and adding a new property
myObject.name = "Bob";
myObject.country = "USA";

// Updating the function to include the changed and added property
function constant_function() {
  document.getElementById("Constant").innerHTML = `Name: ${myObject.name}, Age: ${myObject.age}, Country: ${myObject.country}`;
}
