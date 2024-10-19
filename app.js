document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            body.style.overflow = '';
        });
    });

    // Close mobile menu when resizing window beyond mobile breakpoint
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            body.style.overflow = '';
        }
    });
});