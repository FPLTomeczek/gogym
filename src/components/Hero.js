import React from "react";
import bg from "../img/bg.jpg";
import titleBg from "../img/titlebg.13d788348b56c629eefb2e7ad1f4d6ce.svg";
import heroTrainer from "../img/hero_trainer.png";
import "../css/HomePage/Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <img src={bg} alt="background" className="hero-background"></img>
      <div className="hero-text">
        <div className="title-bg-container">
          <img src={titleBg} alt="title_bg" />
          <p>Find your energy</p>
        </div>
        <h1>
          make your body
          <br /> <span>fit & perfect</span>
        </h1>
        <button className="btn">
          <p>our classes</p>
          <i classNameName="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div className="links">
        <p>Share</p>
        <div className="underline"></div>
        <i className="fa-brands fa-linkedin fa-2x"></i>
        <i className="fa-brands fa-twitter fa-2x"></i>
        <i className="fa-brands fa-facebook fa-2x"></i>
      </div>
      <div className="hero-trainer">
        <img src={heroTrainer} alt="trainer"></img>
      </div>
    </div>
  );
};

export default Hero;
