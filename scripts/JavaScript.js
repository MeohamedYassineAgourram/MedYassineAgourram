/* HEADER STYLES */
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



/*====================================================================================================================================================================*/

/*SECTION 1: PROJETS*/
//PROJECT 01:
function showProject1Details(projectDiv) {
    const modal = document.getElementById('project1-modal');
    modal.style.display = "flex";
}

function close1Modal() {
    const modal = document.getElementById('project1-modal');
    modal.style.display = "none";
}

//PROJECT 02:
function showProject2Details(projectDiv) {
    const modal = document.getElementById('project2-modal');
    modal.style.display = "flex";
}

function close2Modal() {
    const modal = document.getElementById('project2-modal');
    modal.style.display = "none";
}

//PROJECT 03:
function showProject3Details(projectDiv) {
    const modal = document.getElementById('project3-modal');
    modal.style.display = "flex";
}

function close3Modal() {
    const modal = document.getElementById('project3-modal');
    modal.style.display = "none";
}

//PROJECT 04:
function showProject4Details(projectDiv) {
    const modal = document.getElementById('project4-modal');
    modal.style.display = "flex";
}

function close4Modal() {
    const modal = document.getElementById('project4-modal');
    modal.style.display = "none";
}

//PROJECT 05:
function showProject5Details(projectDiv) {
    const modal = document.getElementById('project5-modal');
    modal.style.display = "flex";
}

function close5Modal() {
    const modal = document.getElementById('project5-modal');
    modal.style.display = "none";
}

//PROJECT 06:
function showProject6Details(projectDiv) {
    const modal = document.getElementById('project6-modal');
    modal.style.display = "flex";
}

function close6Modal() {
    const modal = document.getElementById('project6-modal');
    modal.style.display = "none";
}


//Fonction de redirection vers mon profil GitHub:
function redirectToGithub() {
    window.open("https://github.com/MeohamedYassineAgourram", "_blank");
}



/*====================================================================================================================================================================*/

/*SECTION 4: CONTACT*/
// Get the form and error message element
const form = document.getElementById("contact-form");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", function (e) {
    // Prevent form from being submitted
    e.preventDefault();

    // Retrieve form data
    const prenom = document.getElementById("prenom").value.trim();
    const nom = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate fields
    if (!prenom || !nom || !email || !message) {
        errorMessage.textContent = "Tous les champs sont obligatoires.";
        errorMessage.style.display = "block";
        return;
    }

    

    // Clear the error message if validation passes
    errorMessage.style.display = "none";

    // Simulate form submission or send data to the server
    alert("Formulaire envoyé avec succès !");
    form.reset();
});