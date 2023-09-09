// Define a global variable
var globalVariable = "I'm a global variable";

function localVarExample() {
    // Define a local variable
    var localVariable = "I'm a local variable";

    // Intentional error to demonstrate debugging
    console.log('This is a deliberate error'); // This line will cause an error

    // Use the local variable
    console.log(localVariable);
}

// Call the function
localVarExample();

// Access the global variable
console.log(globalVariable);
