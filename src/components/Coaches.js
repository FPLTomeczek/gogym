import React from "react";
import trainer1 from "../img/trainer1.png";
import trainer2 from "../img/trainer2.png";
import trainer3 from "../img/trainer3.png";
import trainerbg from "../img/trainer_bg.png";
import titleBg from "../img/titlebg.13d788348b56c629eefb2e7ad1f4d6ce.svg";
import "../css/HomePage/Coaches.css";
import oval_shape from "../img/oval_shape.png";

const Coaches = () => {
  return (
    <div className="coaches-container">
      <main>
        <div className="title-bg-container">
          <img src={titleBg} alt="bg" />
          <p id="title-bg-coaches">gym trainers</p>
        </div>
        <h1>Team Of Expert Coaches</h1>
        <p>
          Expert team of coaches helps you succeed in any goal, personalized
          guidance and motivation provided!
        </p>
        <div className="coaches">
          <div className="coach">
            <img src={trainer1} alt="coach" className="coach-img" />
            <img src={trainerbg} alt="bg" className="coach-bg" />
            <div className="coach-info">
              <img src={oval_shape} alt="oval_shape" />
              <i className="fa-solid fa-chevron-up"></i>
              <h2>John Lewis</h2>
              <span>Yoga Trainer</span>
              <div className="social-icons">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-facebook"></i>
              </div>
              <div className="underline" id="underline-coach"></div>
            </div>
          </div>
          <div className="coach">
            <img src={trainer2} alt="coach" className="coach-img" />
            <img src={trainerbg} alt="bg" className="coach-bg" />
            <div className="coach-info">
              <img src={oval_shape} alt="oval_shape" />
              <i className="fa-solid fa-chevron-up"></i>
              <h2>Johnatan Doe</h2>
              <span>Crossfit Trainer</span>
              <div className="social-icons">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-facebook"></i>
              </div>
              <div className="underline" id="underline-coach"></div>
            </div>
          </div>
          <div className="coach">
            <img src={trainer3} alt="coach" className="coach-img" />
            <img src={trainerbg} alt="bg" className="coach-bg" />
            <div className="coach-info">
              <img src={oval_shape} alt="oval_shape" />
              <i className="fa-solid fa-chevron-up"></i>
              <h2>Ana June</h2>
              <span>Personal Trainer</span>
              <div className="social-icons">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-facebook"></i>
              </div>
              <div className="underline" id="underline-coach"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Coaches;
