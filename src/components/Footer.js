import React from "react";
import logo_footer from "../img/logo_footer.svg";
import "../css/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <main>
        <div className="footer-container">
          <div className="footer-desc">
            <img src={logo_footer} alt="logo_footer" />
            <p>
              Take your health and body to the next level with our comprehensive
              program designed to help you reach your fitness goals.
            </p>
            <div className="footer-links">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-pinterest"></i>
              <i class="fa-brands fa-youtube"></i>
            </div>
            <span>
              Privacy Policy | &copy; 2023 Gymate Design by FPLTomeczek
            </span>
          </div>
          <div className="our-classes">
            <h3>Our Classes</h3>
            <div className="underline"></div>
            <div className="classes">
              <span>Fitness Classes</span>
              <span>Aerobics Classes</span>
              <span>Power Yoga</span>
              <span>Learn Machines</span>
              <span>Full-body Strength</span>
            </div>
          </div>
          <div className="working-hours">
            <h3>Working Hours</h3>
            <div className="underline"></div>
            <div className="schedule">
              <h4>Monday - Friday:</h4>
              <span>7:00am - 21:00pm</span>
              <h4>Saturday:</h4>
              <span>7:00am - 19:00pm</span>
              <h4>Sunday - Closed</h4>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Footer;
