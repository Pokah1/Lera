import React from "react";
import '../../Styles/About.css';
import groupedImage from "../../assets/ladyImage.png";
import Vector from "../../assets/Vector.png";

const AboutPage = () => {
  return (
    <>
      <section className="about-container">
        <article className="about-text">
        <header className="about-heading">
          <img src={Vector} alt="vector icon" />
          <span>Who we are</span>
        </header>

        <h1>
          We are a Strategic <br />
          <span className="highlight">Communication</span> firm
        </h1>
        <p>Driven by values of integrity, passion, care, innovation, and excellence, Lera focuses on the central role of strategic communication to impact behaviors, build brands, and provide technical leadership in health and social development.</p>
        
        <a href="#about" className="about-button">About Us</a>

        </article>
        
      <div className="grouped-image-wrapper">
      <img src={groupedImage} alt="A woman representing the team" />
      </div>
      </section>
    </>
  );
};

export default AboutPage;
