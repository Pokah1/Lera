
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg"; 
import "../Styles/Navbar.css";

const Navbar = ({ textColor = "#fff", bgColor = "transparent" }) => {
  const navStyle = {
    color: textColor,
    backgroundColor: bgColor,

    
  };

  return (
    <nav style={navStyle} className="navbar">
      <img src={Logo} alt="LERA Logo" className="logo" />
      <ul className="nav-links">
         <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Resources</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
