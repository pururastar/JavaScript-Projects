// Function to demonstrate 'break'
function breakExample() {
  let output = "Using break: ";
  for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      break;
    }
    output += i + " ";
  }
  document.getElementById("breakExample").innerHTML = output;
}

// Function to demonstrate 'continue'
function continueExample() {
  let output = "Using continue: ";
  for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      continue;
    }
    output += i + " ";
  }
  document.getElementById("continueExample").innerHTML = output;
}

// Call the functions to display the examples
window.addEventListener('DOMContentLoaded', (event) => {
  breakExample();
  continueExample();
});
