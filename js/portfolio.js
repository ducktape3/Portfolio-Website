// JavaScript for Portfolio Website

// Smooth Scrolling for Navigation Links
document.querySelectorAll('header nav a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').slice(1); // Get target section ID
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth' // Smooth scrolling effect
      });
    }
  });
});

// Smooth Scrolling for Logo Click
document.querySelectorAll('.logo a').forEach(logo => {
  logo.addEventListener('click', event => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').slice(1); // Get target section ID
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth' // Smooth scrolling effect
      });
    }
  });
});

// Smooth Scrolling for Footer Navigation Links
document.querySelectorAll('footer nav a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').slice(1); // Get target section ID
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth' // Smooth scrolling effect
      });
    }
  });
});

// Sticky Header
window.addEventListener('scroll', () => {
  const stickyHeader = document.querySelector('#sticky-header');
  const servicesSection = document.getElementById('about');
  const servicesSectionTop = servicesSection.offsetTop;

  if (window.scrollY >= servicesSectionTop) {
    stickyHeader.classList.add('visible');
  } else {
    stickyHeader.classList.remove('visible');
  }
});
