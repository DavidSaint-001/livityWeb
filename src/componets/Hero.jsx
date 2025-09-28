import React from "react";
import "./Hero.css";
import heroImage from "../assets/background.jpg"; 

const Herosection = () => {
  return (
    <div id="home">
    <section className="hero-section">
     
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>

      
      <div className="hero-content">
       <h1 className="tracking-in-expand-fwd"> Ł I V I T Y</h1> <br /> <br />
        <p>
          "We Invite You To Wear <span>Łivity</span> Not To Be Seen But To Be Felt".
        </p>
        
      </div>
    </section>
    </div>
  );
};

export default Herosection;
