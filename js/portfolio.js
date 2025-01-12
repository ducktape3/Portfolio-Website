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

  document.addEventListener('DOMContentLoaded', function() {
      const filterButtons = document.querySelectorAll('.filter-menu button');
      const gridItems = document.querySelectorAll('.item');

      filterButtons.forEach(button => {
          button.addEventListener('click', () => {
              const category = button.getAttribute('data-category');

              filterButtons.forEach(btn => btn.classList.remove('active'));
              button.classList.add('active');

              gridItems.forEach(item => {
                  if (category === 'all' || item.getAttribute('data-category') === category) {
                      item.style.display = 'block';
                  } else {
                      item.style.display = 'none';
                  }
              });
          });
      });

      // Enable smooth scrolling for the scrollable gallery
      const scrollableGallery = document.querySelector('.scrollable-gallery');
      if (scrollableGallery) {
          scrollableGallery.style.scrollBehavior = 'smooth';
      }
  });
  
  // Sticky Header
  window.addEventListener('scroll', () => {
    const stickyHeader = document.querySelector('#sticky-header');
    const servicesSection = document.getElementById('services');
    const servicesSectionTop = servicesSection.offsetTop;

    if (window.scrollY >= servicesSectionTop) {
        stickyHeader.classList.add('visible');
    } else {
        stickyHeader.classList.remove('visible');
    }
  });
  
  // Dynamic Typing Effect (if needed)
  const typingElement = document.querySelector('#hero h1');
  const typingText = ['Web Developer', 'UI/UX Designer', 'Contentprenuer']; // Array of texts to type
  let typingIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function typeText() {
    if (typingElement) {
      const currentText = typingText[typingIndex];
      typingElement.textContent = currentText.slice(0, charIndex); // Show partial text
  
      if (!isDeleting && charIndex < currentText.length) {
        charIndex++;
        setTimeout(typeText, 100);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeText, 50);
      } else {
        isDeleting = !isDeleting; // Toggle deleting mode
        if (!isDeleting) {
          typingIndex = (typingIndex + 1) % typingText.length; // Move to next text
        }
        setTimeout(typeText, 1000);
      }
    }
  }
  
  // Start typing effect if element exists
  if (typingElement) {
    typeText();
  }

