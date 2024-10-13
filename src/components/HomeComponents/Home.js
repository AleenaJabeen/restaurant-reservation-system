import React from "react";
import HeroSection from "./HeroSection";
import FeatureGoals from "./FeatureGoals";
import Features from "./Features";
import About from "./About";
const Home = () => {
  return (
    <>
      <HeroSection />
        <About />
      <Features />
      <FeatureGoals />
    </>
  );
};
export default Home;
