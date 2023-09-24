// Open the Lightbox
function openLightbox(imageElement) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    lightboxImg.src = imageElement.getAttribute("data-large");
    lightbox.style.display = "block";
}

// Close the Lightbox
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}

// Ensure you have functions to navigate between images if needed
