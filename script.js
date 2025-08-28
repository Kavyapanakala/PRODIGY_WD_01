// Change nav style on scroll
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Optional: Add hover effect with JS (additional to CSS)
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.color = 'gold';
  });

  link.addEventListener('mouseleave', () => {
    link.style.color = 'white';
  });
});
