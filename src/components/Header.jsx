import React from "react";
import { useState } from "react";
import "../styles/Header.css";
import Button from "./Button";

function Header() {
  function AboutScrollBehavior() {
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

  function WorkScrollBehavior() {
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

  function ProjectScrollBehavior() {
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

  const [sidebarVisible, setSidebarVisible] = useState(false);
  return (
    <header>
      <img src="/Images/Logo-Photoroom.png" />

      <div
        className={`navbar sidebar ${sidebarVisible ? "visible" : "hidden"}`}
      >
        <div className="exit-icon" onClick={() => setSidebarVisible(false)}>
          <i className="fas fa-times"></i>
        </div>
        <span
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth", // Adds smooth scrolling animation
            })
          }
        >
          Home
        </span>
        <span onClick={() => AboutScrollBehavior()}>About</span>
        <span onClick={() => WorkScrollBehavior()}>Work</span>
        <span onClick={() => ProjectScrollBehavior()}>Project</span>
        <Button message="Download CV" />
      </div>

      <div className="navbar">
        <span
          className="hideOnMobile"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth", // Adds smooth scrolling animation
            })
          }
        >
          Home
        </span>
        <span className="hideOnMobile" onClick={() => AboutScrollBehavior()}>
          About
        </span>
        <span className="hideOnMobile" onClick={() => WorkScrollBehavior()}>
          Work
        </span>
        <span className="hideOnMobile" onClick={() => ProjectScrollBehavior()}>
          Project
        </span>
        <Button message="Download CV" className="hideOnMobile" />
        <div className="menu-icon" onClick={() => setSidebarVisible(true)}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
