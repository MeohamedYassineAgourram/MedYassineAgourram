import React from "react";
import "./Home.css";
import Projects from "../components/Projects";
import Work from "../components/Work";
import Profil from "../components/Profil";
import Contact from "../components/Contact";
import About from "../components/About";

function Home() {
  return (
    <div className="HomeContainer">
      <Work />
      <Profil />
      <Contact />
      <About />
      <Projects />
    </div>
  );
}

export default Home;
