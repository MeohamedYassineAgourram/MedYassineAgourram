import React from "react";
import "../styles/Projects.css";

function Projects() {
  function scrollBehavior() {
    // Scroll to top of the page
    if (window.innerWidth > 900) {
      window.scrollTo({
        top: 2200,
        behavior: "smooth",
      });
    }

    if (window.innerWidth > 700 && window.innerWidth <= 900) {
      window.scrollTo({
        top: 2300,
        behavior: "smooth",
      });
    }

    if (window.innerWidth <= 700) {
      window.scrollTo({
        top: 3400,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="projects" onClick={() => scrollBehavior()}>
      <h2>Projects</h2>

      <div>
        <h4>Réalisation d’un simulateur de CPU</h4>
      </div>

      <div>
        <h4>Programmation d’automates finis</h4>
      </div>

      <div>
        <h4>Simulation d’un écosystème</h4>
      </div>

      <div>
        <h4>Étude de la Congestion des Véhicules électriques</h4>
      </div>

      <i className="fas fa-arrow-up-right-from-square"></i>
    </div>
  );
}

export default Projects;
