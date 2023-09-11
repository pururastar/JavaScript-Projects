// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  
  // Log that JS is working
  console.log("JavaScript loaded and ready to go!");
  
  // Find all buttons within div elements with the class 'pizza-item'
  const buttons = document.querySelectorAll('.pizza-item button');
  
  // Loop through each button and add a click event listener
  buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      
      // Find the parent div element
      const parentDiv = event.target.parentNode;
      
      // Find the h3 within the parent div
      const pizzaSize = parentDiv.querySelector('h3').innerText;
      
      // Log the pizza size
      console.log(`You ordered a ${pizzaSize}`);
    });
  });
});
