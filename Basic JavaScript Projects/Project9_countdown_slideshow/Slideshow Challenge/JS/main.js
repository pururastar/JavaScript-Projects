document.addEventListener("DOMContentLoaded", () => {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');

  function switchSlide() {
    slides[currentSlide].style.opacity = 0;
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.opacity = 1;
  }

  setInterval(switchSlide, 3000); // Switch slide every 3000 milliseconds (3 seconds)
});
