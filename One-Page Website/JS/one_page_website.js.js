document.addEventListener('DOMContentLoaded', function() {
  const thumbnails = document.querySelectorAll('.thumbnail');
  const lightbox = document.getElementById('lightbox');
  const largeImage = document.getElementById('large-image');
  const close = document.getElementById('close');

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener('click', function() {
      const largeSrc = thumbnail.getAttribute('data-large');
      largeImage.src = largeSrc;
      lightbox.style.display = 'block';
    });
  });

  close.addEventListener('click', function() {
    lightbox.style.display = 'none';
  });
});
