import React from "react";
import "../css/ContactPage/ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <h2>Leave Us Your Info</h2>
      <div className="underline"></div>
      <form>
        <input type="text" />
        <input type="email" />
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
        <button className="btn">submit now</button>
      </form>
    </div>
  );
};

export default ContactForm;
