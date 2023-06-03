import React from "react";

const Feature = ({ feature }) => {
  return (
    <div className="feature-container">
      <p className="feature-title">{feature.title}</p>
      <p className="feature-description">{feature.description}</p>
      <button className="feature-button">{feature.ctaButton} </button>
    </div>
  );
};

export default Feature;
