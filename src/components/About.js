import React from "react";
import aboutBg from "../img/about_bg.jpg";
import "../css/HomePage/About.css";
import time from "../img/time.png";
import lifting from "../img/lifting.png";
import plan from "../img/plan.png";
import titleBg from "../img/titlebg.13d788348b56c629eefb2e7ad1f4d6ce.svg";
import ohp from "../img/ohp.png";
import equipment from "../img/equipment.png";
import machines from "../img/machines.png";
import running_writing from "../img/running_writing.png";
import girl_running from "../img/girl_running.png";
import semicircle from "../img/semicircle.svg";
import wind from "../img/wind.png";

const About = () => {
  return (
    <div className="about-container">
      <img src={aboutBg} alt="background" id="about-background"></img>
      <div className="benefits">
        <article className="benefit">
          <img src={time} alt="progression"></img>
          <h3>Progression</h3>
          <p>
            Our team of experts will work with you to create a customized plan
            that helps you achieve success one step at a time.
          </p>
        </article>
        <article className="benefit">
          <img src={lifting} alt="workout"></img>
          <h3>Workout</h3>
          <p>
            With a variety of workouts to choose from, you'll have everything
            you need to get into the best shape of your life.
          </p>
        </article>
        <article className="benefit">
          <img src={plan} alt="nutritions"></img>
          <h3>Nutritions</h3>
          <p>
            Our team will work with you to create a personalized meal plan that
            helps you reach your specific health goals.
          </p>
        </article>
      </div>
      <div className="desc-container">
        <section className="desc">
          <div className="title-bg">
            <img src={titleBg} alt="title" />
            <p>who we are</p>
          </div>
          <h2>Take Your Health And Body To Next Level</h2>
          <p>
            Take your health and body to the next level with our comprehensive
            program designed to help you reach your fitness goals.
          </p>
          <div className="ads">
            <div className="ad">
              <img src={ohp} alt="ohp" />
              <h3>professional trainers</h3>
            </div>
            <div className="ad">
              <img src={equipment} alt="equipment" />
              <h3>modern equipments</h3>
            </div>
            <div className="ad">
              <img src={machines} alt="machines" />
              <h3>fancy gym machines</h3>
            </div>
          </div>
          <button className="btn" id="about-btn">
            <p>take a tour</p>
            <i classNameName="fa-solid fa-arrow-right"></i>
          </button>
        </section>
        <section className="banners">
          <img src={running_writing} alt="writing" id="running_writing" />
          <img src={girl_running} alt="girl_running" id="girl_running" />
          <img src={semicircle} alt="semicircle" id="semicircle" />
          <img src={wind} alt="wind" id="wind" />
        </section>
      </div>
    </div>
  );
};

export default About;