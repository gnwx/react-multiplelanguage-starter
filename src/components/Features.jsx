import React from "react";
import { useLanguage } from "react-multiplelanguage";
import Feature from "./Feature";

const Features = () => {
  const { texts } = useLanguage();

  const { features } = texts;
  return features.map((feature) => <Feature feature={feature} />);
};

export default Features;
