import React from "react";
import logo_navbar from "../img/logo_navbar.svg";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo_navbar} alt="logo_navbar" />
      </Link>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/schedule">
          <li>Schedule</li>
        </Link>
        <Link to="/classes">
          <li>Classes</li>
        </Link>
        <Link to="/blog">
          <li>Blog</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
      <div className="sign-up">
        <i className="fa-regular fa-user"></i>
        <div className="join-class">
          <i className="fa-solid fa-square-plus"></i>
          <span>Join class now</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
