import React from "react";
import "./About.css";
import aboutme from "../../media/aboutme.jpg";
import { loremIpsum } from "react-lorem-ipsum";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h1>Let me tell u something about me.</h1>
        <p>{loremIpsum(1)}</p>
      </div>
      <div className="about-img">
        <img src={aboutme} alt="about"></img>
      </div>
    </div>
  );
};

export default About;
