// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  
  let timerValue = 10;  // Initialize the timer value in seconds
  const timerElement = document.getElementById("timer");  // Get the paragraph element by its id

  // Function to update the timer
  function tick() {
    timerElement.innerHTML = `Time left: ${timerValue} seconds`; // Update the paragraph element with the timer value

    if (timerValue <= 0) {
      timerElement.innerHTML = "Time's up!";
      return;  // Exit the function to stop the timer
    }

    timerValue--;  // Decrement the timer value
    setTimeout(tick, 1000);  // Pause for 1000 milliseconds (1 second) before the next tick
  }

  tick();  // Start the timer
});
