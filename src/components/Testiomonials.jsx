import React from "react";
import { useLanguage } from "react-multiplelanguage";
import Testimonial from "./Testimonial";

const Testiomonials = () => {
  const { texts } = useLanguage();
  const { testimonials } = texts;
  return testimonials.map((testimonial) => (
    <Testimonial testimonial={testimonial} />
  ));
};

export default Testiomonials;
