// Označi aktivnu stavku u navigaciji ovisno o sekciji koja je vidljiva
const sections = document.querySelectorAll('main .section, .hero');
const navLinks = document.querySelectorAll('.nav a');

const setActive = (id) => {
  navLinks.forEach(link => {
    link.style.opacity = link.getAttribute('href') === `#${id}` ? '1' : '0.85';
    link.style.borderColor = link.getAttribute('href') === `#${id}` ? 'var(--brass)' : 'transparent';
  });
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.target.id) {
      setActive(entry.target.id);
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach(section => {
  if (section.id) observer.observe(section);
});
