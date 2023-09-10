// Function that multiplies two numbers and returns the result
function multiply(a, b) {
  return a * b;
}

// Function to show returned value
function showReturnedValue() {
  const result = multiply(5, 4);
  document.getElementById("result").innerHTML = "The returned value is: " + result;
}
