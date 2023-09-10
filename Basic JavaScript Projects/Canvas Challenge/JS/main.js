// The 'window.onload' ensures the HTML is fully loaded before executing the JavaScript
window.onload = function() {

  // Get the canvas element by its id
  const canvas = document.getElementById("myCanvas");

  // Get the context, which includes all the drawing functions
  const ctx = canvas.getContext("2d");

  // Draw a blue rectangle
  ctx.fillStyle = "blue";
  ctx.fillRect(10, 10, 50, 50);

  // Draw a red line
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.moveTo(70, 70);
  ctx.lineTo(150, 70);
  ctx.stroke();
};
