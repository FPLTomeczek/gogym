import React, { useEffect, useState } from "react";
import logo_white from "../img/logo_white.svg";
import "../css/Navbar.css";
import Link from "./Link.js";
import { nav_links } from "../data";
const Navbar = ({
  isModalInfoOpen,
  setIsModalInfoOpen,
  setIsModalInfoClosing,
  isModalLinksOpen,
  setIsModalLinksOpen,
  setIsModalLinksClosing,
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
        {nav_links.map((link) => {
          console.log(link);
          return (
            <Link to={link[0]}>
              <li>{link[1]}</li>
            </Link>
          );
        })}
      </ul>
      <div className="sign-up">
        <i className="fa-regular fa-user"></i>
        <i
          className="fa-solid fa-bars"
          onClick={() => {
            if (isModalLinksOpen) {
              setIsModalLinksClosing(true);
            } else {
              setIsModalLinksClosing(false);
            }
            setIsModalLinksOpen(!isModalLinksOpen);
          }}
        ></i>

        <i
          className="fa-solid fa-circle-info"
          onClick={() => {
            if (isModalInfoOpen) {
              setIsModalInfoClosing(true);
            } else {
              setIsModalInfoClosing(false);
            }
            setIsModalInfoOpen(!isModalInfoOpen);
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
