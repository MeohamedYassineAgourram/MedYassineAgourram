import React from "react";
import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="ContactContainer">
      <div className="ContactInfo">
        <h2>Contact Me</h2>
        <p>
          I'm always open to new opportunities, collaborations, or just a
          friendly chat! Whether you have a project in mind, a question, or
          simply want to connect — feel free to reach out. I’ll get back to you
          as soon as I can!
        </p>
        <div className="social-icons">
          <div className="icon">
            <a
              href="https://www.linkedin.com/in/mohamedyassineagourram/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <div className="icon">
            <a
              href="https://www.instagram.com/medyassineagourram/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="icon">
            <a
              href="https://github.com/MeohamedYassineAgourram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
