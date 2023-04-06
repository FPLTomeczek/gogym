import React from "react";
import SocialLinks from "./SocialLinks";
import "../css/ContactPage/ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      <h1>We are here for help you! To Shape Your Body.</h1>
      <span>
        At Gymate, we are dedicated to helping you achieve the body of your
        dreams. Our expert trainers and nutritionists will work with you to
        create a personalized fitness and nutrition plan that helps you reach
        your specific goals.
      </span>
      <div className="contact-infos">
        <div className="contact-info">
          <h3>New York City, USA</h3>
          <div className="underline"></div>
          <span>
            85 Briston Mint Street,
            <br /> London, E1 8LG, USA
          </span>
        </div>
        <div className="contact-info">
          <h3>Opening Hours</h3>
          <div className="underline"></div>
          <span>
            Mon to Fri: 7:30 am — 1:00 am <br />
            Mon to Fri: 7:30 am — 1:00 am
          </span>
        </div>
        <div className="contact-info">
          <h3>Information</h3>
          <div className="underline"></div>
          <span>
            +800-123-4567
            <br /> gymat@gymail.com
          </span>
        </div>
        <div className="contact-info">
          <h3>Follow Us On</h3>
          <div className="underline"></div>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
