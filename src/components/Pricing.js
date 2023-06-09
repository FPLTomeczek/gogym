import React from "react";
import titleBg from "../img/titlebg.13d788348b56c629eefb2e7ad1f4d6ce.svg";
import "../css/HomePage/Pricing.css";
import plan1 from "../img/HomePage/Pricing/plan1.jpg";
import plan2 from "../img/HomePage/Pricing/plan2.jpg";
import plan3 from "../img/HomePage/Pricing/plan3.jpg";

const Pricing = () => {
  return (
    <div className="pricing-container">
      <main>
        <div className="title-bg-container">
          <img src={titleBg} alt="bg" />
          <p id="title-bg-pricing">pricing chart</p>
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
      </main>
    </div>
  );
};

export default Pricing;
