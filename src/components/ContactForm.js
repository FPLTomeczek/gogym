import React from "react";
import "../css/ContactPage/ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <h2>Leave Us Your Info</h2>
      <div className="underline"></div>
      <form>
        <input type="text" placeholder="Full Name *" />
        <input type="email" placeholder="Email Address*" />
        <select name="" id="">
          <option>Body Building</option>
          <option>Boxing</option>
          <option>Running</option>
          <option>Fitness</option>
          <option>Yoga</option>
          <option>Workout</option>
          <option>Karate</option>
          <option>Meditation</option>
          <option>Cycling</option>
        </select>
        <textarea
          placeholder="Comment"
          id="contact-textarea"
          rows="8"
        ></textarea>
        <button className="btn" id="contact-btn">
          <p>submit now</p>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
