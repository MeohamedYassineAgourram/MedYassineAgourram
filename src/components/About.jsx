import React from "react";
import "../styles/About.css";

function About() {
  function scrollBehavior() {
    // Scroll to top of the page
    if (window.innerWidth > 900) {
      window.scrollTo({
        top: 700,
        behavior: "smooth",
      });
    }

    if (window.innerWidth > 700 && window.innerWidth <= 900) {
      window.scrollTo({
        top: 800,
        behavior: "smooth",
      });
    }

    if (window.innerWidth <= 700) {
      window.scrollTo({
        top: 1250,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="about" onClick={() => scrollBehavior()}>
      <h2>About</h2>
      <p>
        Étudiant en troisième année de Licence Informatique à Sorbonne
        Université, je recherche un contrat d’alternance de 12 mois à partir de
        septembre 2025. Passionné par...
      </p>
      <i className="fas fa-arrow-up-right-from-square"></i>
    </div>
  );
}

export default About;
