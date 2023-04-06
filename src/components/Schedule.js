import React, { useState } from "react";
import "../css/SchedulePage/Schedule.css";
import { schedule } from "../data.js";

const Schedule = () => {
  const [activeDay, setActiveDay] = useState("monday");

  return (
    <div className="schedule-container">
      <main>
        <div className="schedule-buttons">
          <button
            onClick={() => setActiveDay("monday")}
            className={activeDay === "monday" ? "active" : null}
          >
            Monday
          </button>
          <button
            onClick={() => setActiveDay("tuesday")}
            className={activeDay === "tuesday" ? "active" : null}
          >
            Tuesday
          </button>
          <button
            onClick={() => setActiveDay("wednesday")}
            className={activeDay === "wednesday" ? "active" : null}
          >
            Wednesday
          </button>
          <button
            onClick={() => setActiveDay("thursday")}
            className={activeDay === "thursday" ? "active" : null}
          >
            Thursday
          </button>
          <button
            onClick={() => setActiveDay("friday")}
            className={activeDay === "friday" ? "active" : null}
          >
            Friday
          </button>
          <button
            onClick={() => setActiveDay("saturday")}
            className={activeDay === "saturday" ? "active" : null}
          >
            Saturday
          </button>
          <button
            onClick={() => setActiveDay("sunday")}
            className={activeDay === "sunday" ? "active" : null}
          >
            Sunday
          </button>
        </div>
        <div className="sessions">
          {schedule[activeDay].map((session, index) => {
            const { name, time, trainer } = session;
            return (
              <div className="session" key={index}>
                <div className="name">
                  <span>Class Name</span>
                  <h3>{name}</h3>
                </div>
                <div className="time">
                  <span>Time</span>
                  <h3>{time}</h3>
                </div>
                <div className="trainer">
                  <span>Trainer</span>
                  <h3>{trainer}</h3>
                </div>
                <button className="join-btn">Join Now</button>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Schedule;
