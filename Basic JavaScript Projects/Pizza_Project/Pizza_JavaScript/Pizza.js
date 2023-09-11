document.addEventListener("DOMContentLoaded", function() {
  const orderBtn = document.getElementById('order-btn');

  orderBtn.addEventListener('click', function() {
    const pizzaSize = document.getElementById('pizza-size').value;
    const meatType = document.getElementById('meat-type').value;
    const vegType = document.getElementById('veg-type').value;

    alert(`You ordered a ${pizzaSize} pizza with ${meatType} and ${vegType}.`);
  });
});
