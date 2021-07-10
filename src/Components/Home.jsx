// Importing Packages
import React from "react";

import web from "../Images/HomePage.svg";
// Importing the components
import ReUsable from "./ReUsable";

const Home = () => {
  const h1text = "Grow Your Coding Knowledge with";
  const strongtext = "CoderNitesh";
  const btntext = "Get Started";
  const visit = "/services";
  return (
    <ReUsable
      h1text={h1text}
      imgsrc={web}
      visit={visit}
      btntext={btntext}
      strongtext={strongtext}
    />
  );
};

export default Home;
