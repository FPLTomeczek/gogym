import React from "react";
import "../css/SecondaryHero.css";

const SecondaryHero = ({ text }) => {
  return (
    <div className="secondary-hero">
      <h2>{text}</h2>
    </div>
  );
};

export default SecondaryHero;
