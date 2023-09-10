// 'window.onload' ensures the HTML is fully loaded before executing the JavaScript
window.onload = function() {
  
  // Get the form element by its id
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form submission for validation

    // Validate name
    const name = document.getElementById("name").value;
    if (name === "") {
      document.getElementById("nameError").textContent = "Name is required.";
      return;
    } else {
      document.getElementById("nameError").textContent = "";
    }

    // Validate email
    const email = document.getElementById("email").value;
    if (email === "") {
      document.getElementById("emailError").textContent = "Email is required.";
      return;
    } else if (!email.includes("@")) {
      document.getElementById("emailError").textContent = "Invalid email.";
      return;
    } else {
      document.getElementById("emailError").textContent = "";
    }

    alert("Form submitted successfully!");
  });
};
