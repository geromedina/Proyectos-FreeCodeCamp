import React from "react";
import logo from "../images/freecodecamp-logo.png";
import "../stylesheets/Logo.css"

function Logo() {
  return (
    <div className="freecodecamp-logo-contenedor">
      <img src={logo} alt="freecodecamp-logo" className="freecodecamp-logo" />
    </div>
  );
}

export default Logo;
