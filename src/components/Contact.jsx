import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <div
      className="contact"
      onClick={() =>
        window.scrollTo({
          top: 10000,
          behavior: "smooth", // Adds smooth scrolling animation
        })
      }
    >
      <i className="fas fa-arrow-up-right-from-square"></i>
      <h2>Contact</h2>
    </div>
  );
}

export default Contact;
