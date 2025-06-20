import React from "react";
import "../styles/Work.css";
import styleLogo from "../../public/Images/Style_Shifter_Logo.png";
import obs from "../../public/Images/OBS-Logo.png";

function Work() {
  function scrollBehavior() {
    // Scroll to top of the page
    if (window.innerWidth > 900) {
      window.scrollTo({
        top: 1450,
        behavior: "smooth",
      });
    }

    if (window.innerWidth > 700 && window.innerWidth <= 900) {
      window.scrollTo({
        top: 1560,
        behavior: "smooth",
      });
    }

    if (window.innerWidth <= 700) {
      window.scrollTo({
        top: 2000,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="work" onClick={() => scrollBehavior()}>
      <div className="logos">
        <div>
          <img src={styleLogo} className="logo1" />
          <img src={obs} alt="OBS" className="logo2" />
        </div>
        <i className="fas fa-arrow-up-right-from-square"></i>
      </div>

      <h2>Work</h2>

      <div className="jobs">
        <h4>Junior Front-end Developer</h4>
      </div>

      <div className="jobs">
        <h4>Venue Production Assistant</h4>
      </div>
    </div>
  );
}

export default Work;
