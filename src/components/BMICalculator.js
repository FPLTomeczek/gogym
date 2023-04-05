import React, { useState } from "react";
import "../css/BMICalculator.css";

const BMICalculator = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmiAnswer, setBmiAnswer] = useState("");
  const [weightAnswer, setWeightAnswer] = useState("");

  const calculateBMI = () => {
    setBmiAnswer(((height * 10) / weight).toFixed(2));
    setWeightAnswer(
      height < weight * 2 ? "Obese" : height < weight * 2.5 ? "Normal" : "Low"
    );
  };

  return (
    <div className="bmi-container">
      <div className="bmi-calculator">
        <h1>
          Let's Calculate Your <span>BMI</span>
        </h1>
        <p>
          Easily determine your body mass index with our accurate calculation
          tool.
        </p>
        <div className="bmi-inputs">
          <input
            type="text"
            id="weight-input"
            placeholder="Weight/kg"
            onChange={(e) => setWeight(e.target.value)}
          />
          <input
            type="text"
            id="height-input"
            placeholder="Height/cm"
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="bmi-answers">
          <p>
            Your BMI is: <span>{bmiAnswer ? bmiAnswer : null}</span>
          </p>
          <p id="weight-answer">
            Your Weight is: <span>{weightAnswer ? weightAnswer : null}</span>
          </p>
        </div>
        <button className="btn" onClick={() => calculateBMI()}>
          calculate
        </button>
      </div>
    </div>
  );
};

export default BMICalculator;
