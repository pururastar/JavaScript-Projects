// Generate a random number between 1 and 100 using Math.random()
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Display the random number in the "Math" paragraph element
const mathParagraph = document.getElementById("Math");
mathParagraph.textContent = `Random Number: ${randomNumber}`;
