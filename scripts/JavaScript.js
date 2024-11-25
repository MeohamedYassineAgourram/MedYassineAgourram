const menuHamburger = document.querySelector(".menu-humberger");
const navLinks = document.querySelector(".nav-links");

// Toggle the menu when the hamburger icon is clicked
menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
});

// Close the menu when a navigation link is clicked
const navLinkItems = document.querySelectorAll(".nav-links a");

navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-menu');
    });
});
