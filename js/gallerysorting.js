document.addEventListener('DOMContentLoaded', function () {
    const filterLinks = document.querySelectorAll('.filter-link');
    const items = document.querySelectorAll('.scrollable-gallery .item');
    const scrollToWorksLinks = document.querySelectorAll('.scroll-to-works');

    filterLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');

            // Remove active class from all buttons
            filterLinks.forEach(link => link.querySelector('button').classList.remove('active'));

            // Add active class to the clicked button
            this.querySelector('button').classList.add('active');

            // Filter items
            items.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    scrollToWorksLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            const worksSection = document.querySelector('#works');

            // Smooth scroll to the works section
            worksSection.scrollIntoView({ behavior: 'smooth' });

            // Activate the Web Dev category after scrolling
            setTimeout(() => {
                filterLinks.forEach(link => link.querySelector('button').classList.remove('active'));
                document.querySelector(`.filter-link[data-category="${category}"] button`).classList.add('active');

                // Filter items
                items.forEach(item => {
                    if (item.getAttribute('data-category') === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            }, 500); // Adjust the timeout duration if needed
        });
    });
});

// Enable smooth scrolling for the scrollable gallery
const scrollableGallery = document.querySelector('.scrollable-gallery');
if (scrollableGallery) { scrollableGallery.style.scrollBehavior = 'smooth'; }


