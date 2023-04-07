import React, { useState } from "react";
import "../css/ClassesPage/Classes.css";
import { classes } from "../data";

const Classes = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  let shownClasses = isExpanded ? classes : classes.slice(0, 9);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="classes-container">
      <section>
        <div className="classes">
          {shownClasses.map((elem, index) => {
            const { img, trainer, title, time } = elem;
            return (
              <div className="class" key={index}>
                <img src={img} alt="activity" />
                <div className="class-desc">
                  <h2>{title}</h2>
                  <div className="underline"></div>
                  <div className="class-info">
                    <div className="class-trainer">
                      <i className="fa-regular fa-user"></i>
                      <span> {trainer}</span>
                    </div>
                    <div className="class-time">
                      <i className="fa-regular fa-clock"></i>
                      <span>{time}</span>
                    </div>
                  </div>
                  <button className="btn">
                    <p>join now</p>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {isExpanded ? (
        <button
          onClick={() => {
            scrollToTop();
            setIsExpanded(false);
          }}
          className="show-btn btn"
        >
          Show Less
        </button>
      ) : (
        <button
          onClick={() => {
            scrollToTop();
            setIsExpanded(true);
          }}
          className="show-btn btn"
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default Classes;
