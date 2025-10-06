// ======== Animación de aparición suave al hacer scroll ========

// Observa los elementos con clase "fade-in" y los muestra gradualmente
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.post').forEach(post => {
  post.classList.add('fade-in');
  observer.observe(post);
});

// ======== Interacción de búsqueda (demo simple) ========

const searchInput = document.querySelector('.search-bar input');

searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  document.querySelectorAll('.caption').forEach(caption => {
    const post = caption.closest('.post');
    post.style.display = caption.textContent.toLowerCase().includes(query)
      ? 'block'
      : 'none';
  });
});