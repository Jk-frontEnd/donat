document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu__toggle');
    const menu = document.querySelector('.menu');
    const menuClose = document.querySelector('.menu__close');

    menuToggle.addEventListener('click', function() {
        menu.classList.add('open');
    });

    menuClose.addEventListener('click', function() {
        menu.classList.remove('open');
    });

    // Optional: Close menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove('open');
        }
    });
});
