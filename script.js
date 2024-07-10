document.addEventListener('DOMContentLoaded', function() {
    const iconNav = document.querySelector('.icon__nav');
    const navLinks = document.querySelector('.nav__links');

    iconNav.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});
