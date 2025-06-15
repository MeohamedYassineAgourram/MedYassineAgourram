import React from "react";
import "../styles/Button.css";

function Button({ message, className }) {
  return (
    <button
      className={className}
      onClick={() => {
        const link = document.createElement("a");
        link.href = "../../public/Documents/Med_Yassine_Agourram_CV_L3.pdf";
        link.download = "Med_Yassine_Agourram_CV_L3.pdf";
        link.click();
      }}
    >
      {message}
    </button>
  );
}

export default Button;
