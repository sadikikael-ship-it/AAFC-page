const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll('.section').forEach((section) => {
  if (!section.classList.contains('hero')) {
    section.classList.add('reveal');
    observer.observe(section);
  }
});

const logoField = document.getElementById('logoField');
window.addEventListener('mousemove', (event) => {
  const x = (event.clientX / window.innerWidth - 0.5) * 8;
  const y = (event.clientY / window.innerHeight - 0.5) * 8;
  logoField.style.transform = `translate(${x * 0.2}px, ${y * -0.22}px)`;
});
