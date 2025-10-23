import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand / Logo Section */}
        <div className="footer-brand">
          <h2>LIVITY</h2>
          <p>Elevating your style with quality fashion.</p>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <div className="footer-column">
            <h3>Company</h3>
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">About Us</a>
          </div>

          <div className="footer-column">
            <h3>Support</h3>
            <a href="#">Contact</a>
            <a href="#">FAQ</a>
          </div>

          <div className="footer-column">
            <h3>Legal</h3>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <a href="#"><i className="ri-facebook-fill"></i></a>
          <a href="#"><i className="ri-instagram-fill"></i></a>
          <a href="#"><i className="ri-twitter-x-fill"></i></a>
          <a href="#"><i className="ri-whatsapp-fill"></i></a>
          <a href="#"><i className="ri-tiktok-fill"></i></a>
          <a href="#"><i className="ri-youtube-fill"></i></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} LIVITY. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
