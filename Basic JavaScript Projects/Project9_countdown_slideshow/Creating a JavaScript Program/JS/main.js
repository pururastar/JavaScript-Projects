// Wait for the DOM to be fully loaded
window.addEventListener("DOMContentLoaded", (event) => {
  // Initialize the timer value (in seconds)
  let timerValue = 10;

  // Get the timer element by its id
  const timerElement = document.getElementById("timer");

  // Update the timer element with the initial timer value
  timerElement.innerHTML = `Time left: ${timerValue} seconds`;

  // Create a countdown interval
  const countdown = setInterval(() => {
    // Decrement the timer value
    timerValue--;

    // Update the timer element
    timerElement.innerHTML = `Time left: ${timerValue} seconds`;

    // If the timer reaches zero, clear the interval and display a message
    if (timerValue <= 0) {
      clearInterval(countdown);
      timerElement.innerHTML = "Time's up!";
    }
  }, 1000);
});
