// Importing Packages
import React from "react";

import web from "../Images/AboutPage.svg";
// Importing the components
import ReUsable from "./ReUsable";

const About = () => {
  const h1text = "Welcome to our About Page";
  const strongtext = "CoderNitesh";
  const btntext = "Contact Us";
  const visit = "/contact";
  return (
    <ReUsable
      h1text={h1text}
      imgsrc={web}
      btntext={btntext}
      visit={visit}
      strongtext={strongtext}
    />
  );
};

export default About;
