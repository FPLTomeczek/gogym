import React from "react";
import titleBg from "../img/titlebg.13d788348b56c629eefb2e7ad1f4d6ce.svg";
import "../css/Pricing.css";
import plan1 from "../img/plan1.jpg";
import plan2 from "../img/plan2.jpg";
import plan3 from "../img/plan3.jpg";

const Pricing = () => {
  return (
    <div className="pricing-container">
      <div className="title-bg-container" id="title-bg-pricing">
        <img src={titleBg} alt="bg" />
        <p>pricing chart</p>
      </div>
      <h2>Exclusive Pricing Plan</h2>
      <span>
        Gymat an unknown printer took a galley of type and scrambled
        <br /> make a type specimen book.
      </span>
      <div className="plans">
        <div className="plan">
          <div className="plan-img">
            <img src={plan1} alt="plan1" />
            <h2>Beginners</h2>
          </div>
          <div className="plan-info">
            <h1 className="plan-pricing">65</h1>
            <div className="plan-structure">
              <span>free hand</span>
              <span>gym fitness</span>
              <span>weight loss</span>
              <span>personal trainer</span>
              <span>cycling</span>
            </div>
            <button className="btn">
              <p>purchase now</p>
              <i className="fa-solid fa-arrow-right" />
            </button>
          </div>
        </div>

        <div className="plan">
          <div className="plan-img">
            <img src={plan2} alt="plan2" />
            <h2>Beginners</h2>
          </div>
          <div className="plan-info">
            <h1 className="plan-pricing">65</h1>
            <div className="plan-structure">
              <span>free hand</span>
              <span>gym fitness</span>
              <span>weight loss</span>
              <span>personal trainer</span>
              <span>cycling</span>
            </div>
            <button className="btn">
              <p>purchase now</p>
              <i className="fa-solid fa-arrow-right" />
            </button>
          </div>
        </div>

        <div className="plan">
          <div className="plan-img">
            <img src={plan3} alt="plan3" />
            <h2>Beginners</h2>
          </div>
          <div className="plan-info">
            <h1 className="plan-pricing">65</h1>
            <div className="plan-structure">
              <span>free hand</span>
              <span>gym fitness</span>
              <span>weight loss</span>
              <span>personal trainer</span>
              <span>cycling</span>
            </div>
            <button className="btn">
              <p>purchase now</p>
              <i className="fa-solid fa-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
