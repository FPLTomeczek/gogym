import React from "react";
import "../css/Modal.css";
import logo from "../img/logo_black.svg";
import activity1 from "../img/Modal/activity1.jpg";
import activity2 from "../img/Modal/activity2.jpg";
import activity3 from "../img/Modal/activity3.jpg";
import activity4 from "../img/Modal/activity4.jpg";
import activity5 from "../img/Modal/activity5.jpg";
import activity6 from "../img/Modal/activity6.jpg";
import SocialLinks from "./SocialLinks";

const Modal = ({
  isModalOpen,
  setIsModalOpen,
  isModalClosing,
  setIsModalClosing,
}) => {
  return (
    <div
      className={`modal ${isModalOpen ? "slideIn" : ""} ${
        isModalClosing ? "slideOut" : ""
      }`}
    >
      <div className="modal-header">
        <img src={logo} alt="logo" />
        <i
          className="fa-solid fa-xmark"
          onClick={() => {
            setIsModalOpen(false);
            setIsModalClosing(true);
          }}
        ></i>
      </div>
      <div className="modal-about">
        <h3>About Us</h3>
        <p>
          Find out who we are and what makes us unique. We are a
          community-driven gym committed to providing personalized fitness
          experiences for all levels of fitness enthusiasts in a welcoming and
          supportive environment.
        </p>
      </div>
      <div className="modal-gallery">
        <h3>Gallery</h3>
        <div className="modal-gallery-images">
          <img src={activity1} alt="activity" />
          <img src={activity2} alt="activity" />
          <img src={activity3} alt="activity" />
          <img src={activity4} alt="activity" />
          <img src={activity5} alt="activity" />
          <img src={activity6} alt="activity" />
        </div>
      </div>
      <div className="modal-contact">
        <h3>Contact Info</h3>
        <span>
          <i className="fa-solid fa-location-dot"></i>&nbsp;59 Street, House
          Newyork City
        </span>
        <span>
          <i className="fa-solid fa-phone"></i>&nbsp;+123-678800090
        </span>
        <span>
          <i className="fa-solid fa-envelope"></i>&nbsp;gymate@gymail.com
        </span>
      </div>
      <div className="modal-follow">
        <h3>Follow Us</h3>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Modal;
