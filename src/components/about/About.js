import React from "react";
import "./About.css";
import aboutme from "../../media/aboutme.jpg";
import { LoremIpsum } from "react-lorem-ipsum";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h1>Let me tell u something about me.</h1>
        <LoremIpsum p={1} />
      </div>
      <div className="about-img">
        <img src={aboutme} alt="about"></img>
      </div>
    </div>
  );
};

export default About;
