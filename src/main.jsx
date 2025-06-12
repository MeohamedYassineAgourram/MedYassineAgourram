import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />

    <div className="main">
      <Home />
      <AboutPage />
      <WorkPage />
      <ProjectsPage />
      <ContactPage />
    </div>
  </StrictMode>
);
