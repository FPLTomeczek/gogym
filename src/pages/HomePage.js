import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Offers from "../components/Offers";
import Coaches from "../components/Coaches";
import Testimonials from "../components/Testimonials";
import BMICalculator from "../components/BMICalculator";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Offers />
      <Coaches />
      <Testimonials />
      <BMICalculator />
    </div>
  );
};

export default HomePage;
