import React from "react";
import { nav_links } from "../data";
import Link from "./Link";
import "../css/ModalLinks.css";

export const Modal_Links = ({
  isModalLinksOpen,
  setIsModalLinksOpen,
  isModalLinksClosing,
  setIsModalLinksClosing,
}) => {
  return (
    <div
      className={`modal-links ${isModalLinksOpen ? "slideInModalLinks" : ""} ${
        isModalLinksClosing ? "slideOutModalLinks" : ""
      }`}
    >
      <i
        className="fa-solid fa-circle-xmark"
        onClick={() => {
          setIsModalLinksOpen(false);
          setIsModalLinksClosing(true);
        }}
      ></i>
      <ul className="modal-links-list">
        {nav_links.map((link) => {
          return (
            <div
              className="modal-links-item"
              onClick={() => {
                setIsModalLinksOpen(false);
                setIsModalLinksClosing(true);
              }}
            >
              <Link to={link[0]}>
                <li>{link[1]}</li>
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
