import React from "react";
import "../css/HomePage/Offers.css";
import titleBg from "../img/titlebg.13d788348b56c629eefb2e7ad1f4d6ce.svg";
import activity1 from "../img/HomePage/Offers/activity1.jpg";
import activity2 from "../img/HomePage/Offers/activity2.jpg";
import activity3 from "../img/HomePage/Offers/activity3.jpg";
import activity4 from "../img/HomePage/Offers/activity4.jpg";
import activity5 from "../img/HomePage/Offers/activity5.jpg";
import activity6 from "../img/HomePage/Offers/activity6.jpg";

const Offers = () => {
  return (
    <div className="offers-container">
      <main>
        <div className="title-bg-container" id="title-bg-offers">
          <img src={titleBg} alt="title_bg" />
          <p>our featured class</p>
        </div>
        <h1>We Are Offering Best Flexible Classes</h1>
        <div className="activities">
          <div className="activity" style={{ gridArea: "one" }}>
            <img src={activity1} alt="activity1" />
            <h2>Cycling</h2>
            <span>Wednesday: 9:00am-10:00am</span>
          </div>
          <div className="activity" style={{ gridArea: "two" }}>
            <img src={activity2} alt="activity2" />
            <h2>Karate</h2>
            <span>Friday: 10:00am-11:00am</span>
          </div>
          <div className="activity" style={{ gridArea: "three" }}>
            <img src={activity3} alt="activity3" />
            <h2>Power</h2>
            <span>Saturday: 9:00am-10:00am</span>
          </div>
          <div className="activity" style={{ gridArea: "four" }}>
            <img src={activity4} alt="activity4" />
            <h2>Meditation</h2>
            <span>Friday: 1:00pm-2:00pm</span>
          </div>
          <div className="activity" style={{ gridArea: "five" }}>
            <img src={activity5} alt="activity5" />
            <h2>Martial Arts</h2>
            <span>Sunday: 6:00pm-7:00pm</span>
          </div>
          <div className="activity" style={{ gridArea: "six" }}>
            <img src={activity6} alt="activity6" />
            <h2>Workout</h2>
            <span>Monday: 4:00pm-5:00pm</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Offers;
