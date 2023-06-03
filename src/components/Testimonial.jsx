import React from "react";

const Testimonial = ({ testimonial }) => {
  return (
    <div className="testimonial-container">
      <p className="testimonial-text">{testimonial.testimonial}</p>
      <cite className="testimonial-author">{testimonial.author} </cite>
    </div>
  );
};

export default Testimonial;
