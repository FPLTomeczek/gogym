import React from "react";
import titleBg from "../img/titlebg.13d788348b56c629eefb2e7ad1f4d6ce.svg";
import quote from "../img/quote.png";
import testimonial from "../img/testimonial.jpg";
import "../css/Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonial-container">
      <main>
        <div className="title-bg-container">
          <img src={titleBg} alt="bg" />
          <p>testimonials</p>
        </div>
        <div className="quote-bg-container">
          <div className="testimonial-img-bg"></div>
          <img src={testimonial} alt="testimonial" />
          <div className="quote-container">
            <img src={quote} alt="quote" />
            <p>
              “I've been a member of Gymate for the past 6 months and it has
              been an amazing experience. The trainers are knowledgeable and
              supportive, the equipment is top-notch, and the community of
              members is friendly and encouraging.”
            </p>
            <h3>John Wick</h3>
            <span>Director of CCC</span>
            <div className="quote-buttons">
              <button>
                <i class="fa-solid fa-chevron-left"></i>
              </button>
              <button>
                <i class="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Testimonials;
