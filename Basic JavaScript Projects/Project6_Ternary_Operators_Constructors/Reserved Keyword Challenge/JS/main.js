// Attempting to assign a reserved word as a variable name (this will generate an error)
var if = "ReservedWord";

// Display the error in the console
console.error("Error: Attempted to use a reserved word as a variable name.");

// Define an object constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Create instances of the Person object using the constructor
var person1 = new Person("John", 30);
var person2 = new Person("Jane", 25);

// Display the properties of the objects in the console
console.log("Person 1: " + person1.name + ", " + person1.age);
console.log("Person 2: " + person2.name + ", " + person2.age);
