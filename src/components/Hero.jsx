import React from "react";
import { useLanguage } from "react-multiplelanguage";
const Hero = () => {
  const { texts } = useLanguage();
  const { hero } = texts;
  return (
    <div className="hero-container">
      <h1 className="hero-title">{hero.title}</h1>
      <p className="hero-description">{hero.description}</p>
      <button className="hero-button">{hero.ctaButton}</button>
    </div>
  );
};

export default Hero;
