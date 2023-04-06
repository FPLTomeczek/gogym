import React from "react";
import logo_navbar from "../img/logo_navbar.svg";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo_navbar} alt="logo_navbar" />
      <ul>
        <li>Home</li>
        <li>Schedule</li>
        <li>Classes</li>
        <li>Contact</li>
      </ul>
      <div className="sign-up">
        <i class="fa-regular fa-user"></i>
        <div className="join-class">
          <i class="fa-solid fa-square-plus"></i>
          <span>Join class now</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
