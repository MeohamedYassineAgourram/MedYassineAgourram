import React from "react";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="AboutContainer">
      <div className="text">
        <h2>Mohamed Yassine Agourram</h2>
        <p>
          Étudiant en deuxième année de Licence Informatique à Sorbonne
          Université, je recherche un contrat d’alternance de 12 mois à partir
          de septembre 2025. Passionné par l’innovation et les défis techniques,
          je souhaite intégrer votre équipe pour mettre en pratique mes
          compétences en programmation Python, C, Java, OCaml, Bash,
          JavaScript... et approfondir mon expertise dans un environnement
          stimulant. Sérieux, motivé et adaptable, je suis prêt à m’investir
          pleinement dans des projets concrets et à apporter une contribution
          significative.
        </p>
        <button
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/public/Documents/Med_Yassine_Agourram_CV_L3.pdf";
            link.download = "Med_Yassine_Agourram_CV_L3.pdf";
            link.click();
          }}
        >
          Download CV
        </button>
      </div>
    </div>
  );
}

export default AboutPage;
