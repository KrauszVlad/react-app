import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "..//assets/gamingBackground.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Romanian Steam </h1>
        <p> Our Prices are a Steal</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;