import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* LEFT */}
        <div className="footer-left">
          <h2 className="logo">
            Abhilash<span>.</span>
          </h2>
        </div>

        {/* CENTER */}
        <div className="footer-center">
          <h4>Links</h4>
          <ul>
            <a href="#home">
              <li>Home</li>
            </a>
            <a href="#project">
              <li>My Projects</li>
            </a>
            <a href="#about">
              <li>About Me</li>
            </a>
            <a href="#contact">
              <li>Contact Me</li>
            </a>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <h4>Social Media</h4>
          <div className="social-icons">
            <a href="https://wa.me/919562465095?text=hi Abhilash">
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/nameis_abhilash/"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/abhilashcp/">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Developed & Designed by <span>Abhilash CP</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
