// 'window.onload' ensures the HTML is fully loaded before executing the JavaScript
window.onload = function() {

  // Get the canvas element by its id
  const canvas = document.getElementById("gradientCanvas");

  // Get the context, which includes all the drawing functions
  const ctx = canvas.getContext("2d");

  // Create a linear gradient
  const grd = ctx.createLinearGradient(0, 0, 400, 0);
  
  // Define color stops
  grd.addColorStop(0, "red");
  grd.addColorStop(1, "blue");

  // Fill the canvas using the gradient
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, 400, 200);
};
