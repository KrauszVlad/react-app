import React from "react";
import BannerPhoto from "..//assets/bannerphoto.jpg"
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerPhoto})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to Romanian Steam, your premier destination for all things gaming. Founded by passionate gamers, for passionate gamers, we strive to create a community where players of all levels can come together to share their love for games, discover new titles, and enhance their gaming experience.
        </p>
      </div>
    </div>
  );
}

export default About;