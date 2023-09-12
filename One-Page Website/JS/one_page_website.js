function openLightbox(element) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = element.getAttribute('data-large');
  lightbox.style.display = 'block';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none';
}
