function showImage(index) {
    const images = document.querySelectorAll('.image-container img');
    const container = document.getElementById('image-container');
  
    // Ocultar todas las imágenes
    images.forEach(img => img.style.display = 'none');
  
    // Mostrar la imagen seleccionada
    images[index].style.display = 'block';
  
    // Mostrar el contenedor de imágenes
    container.style.display = 'block';
  }
  