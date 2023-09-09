// Ternary Operators and Constructors Assignment

// Using Ternary Operators
var age = 18;
var canVote = (age >= 18) ? "Yes, you can vote!" : "No, you cannot vote.";
document.getElementById("ternaryResult").textContent = canVote;

// Using Constructors
function Person(name, age) {
    this.name = name;
    this.age = age;
}

var person1 = new Person("Alice", 25);
var person2 = new Person("Bob", 16);

document.getElementById("constructorResult").textContent = "Person 1: " + person1.name + ", " + person1.age + " years old. Person 2: " + person2.name + ", " + person2.age + " years old.";
