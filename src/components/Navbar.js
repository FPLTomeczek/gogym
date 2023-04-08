import React, { useEffect, useState } from "react";
import logo_white from "../img/logo_white.svg";
import "../css/Navbar.css";
import Link from "./Link.js";
const Navbar = ({
  isModalOpen,
  setIsModalOpen,
  isModalClosing,
  setIsModalClosing,
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => setScrollY(window.scrollY));
    return window.removeEventListener("scroll", () =>
      setScrollY(window.scrollY)
    );
  }, []);

  return (
    <nav className={`navbar ${scrollY === 0 ? "" : "bg-transparent"}`}>
      <Link to="/">
        <img src={logo_white} alt="logo_white" />
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
        <i
          class="fa-solid fa-bars"
          onClick={() => {
            if (isModalOpen) {
              setIsModalClosing(true);
            } else {
              setIsModalClosing(false);
            }
            setIsModalOpen(!isModalOpen);
          }}
        ></i>
        <div className="join-class">
          <i className="fa-solid fa-square-plus"></i>
          <span>Join class now</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
