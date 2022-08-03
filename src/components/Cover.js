import React from "react";
import "./Cover.css";
import coverVideo from "../media/coverVideo.mp4";

const Cover = () => {
  return <div className="cover-container">
    <video className="video" src={coverVideo} autoPlay loop muted />
    <h1>Benites Matias Maximiliano</h1>
    <p>Frontend Developer | Designer | System's student</p>
  </div>;
};

export default Cover;
