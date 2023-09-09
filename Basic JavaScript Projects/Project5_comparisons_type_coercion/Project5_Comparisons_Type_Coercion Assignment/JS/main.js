// Comparisons and Type Coercion Assignment

// Display data type of a variable
var exampleVariable = "Hello, World!";
document.write("Data type of exampleVariable is: " + typeof exampleVariable + "<br>");

// Expression combining a string and a number
var stringVar = "5";
var numberVar = 10;
document.write("Expression combining stringVar and numberVar: " + (stringVar + numberVar) + "<br>");

// Comparison operators
document.write("Comparison Operators:<br>");
document.write("5 == '5' is " + (5 == '5') + "<br>");         // true (loose equality)
document.write("5 === '5' is " + (5 === '5') + "<br>");       // false (strict equality)
document.write("5 > 3 is " + (5 > 3) + "<br>");               // true
document.write("10 < 7 is " + (10 < 7) + "<br>");             // false

// Logical operators
document.write("Logical Operators:<br>");
document.write("true && false is " + (true && false) + "<br>"); // false (AND)
document.write("true || false is " + (true || false) + "<br>"); // true (OR)
document.write("!true is " + (!true) + "<br>");                // false (NOT)
