import React, { useEffect } from "react";
import "../css/HomePage/About.css";
import time from "../img/HomePage/About/time.png";
import lifting from "../img/HomePage/About/lifting.png";
import plan from "../img/HomePage/About/plan.png";
import titleBg from "../img/titlebg.13d788348b56c629eefb2e7ad1f4d6ce.svg";
import ohp from "../img/HomePage/About/ohp.png";
import equipment from "../img/HomePage/About/equipment.png";
import machines from "../img/HomePage/About/machines.png";
import running_writing from "../img/HomePage/About/running_writing.png";
import girl_running from "../img/HomePage/About/girl_running.png";
import semicircle from "../img/HomePage/About/semicircle.svg";
import wind from "../img/HomePage/About/wind.png";

const About = () => {
  const setContainersHeight = () => {
    document.getElementById("benefits-container").style.height = `${
      document.getElementById("benefits").offsetHeight
    }px`;
  };

  useEffect(() => {
    setContainersHeight();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", setContainersHeight);

    return () => {
      window.removeEventListener("resize", setContainersHeight);
    };
  }, []);

  return (
    <div className="about-container">
      <div className="benefits-container" id="benefits-container">
        <div className="benefits" id="benefits">
          <article className="benefit" id="benefit-1">
            <img src={time} alt="progression"></img>
            <h3>Progression</h3>
            <p>
              Our team of experts will work with you to create a customized plan
              that helps you achieve success one step at a time.
            </p>
          </article>
          <article className="benefit" id="benefit-2">
            <img src={lifting} alt="workout"></img>
            <h3>Workout</h3>
            <p>
              With a variety of workouts to choose from, you'll have everything
              you need to get into the best shape of your life.
            </p>
          </article>
          <article className="benefit" id="benefit-3">
            <img src={plan} alt="nutritions"></img>
            <h3>Nutritions</h3>
            <p>
              Our team will work with you to create a personalized meal plan
              that helps you reach your specific health goals.
            </p>
          </article>
        </div>
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
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </section>
        <section className="banners" id="banners">
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
