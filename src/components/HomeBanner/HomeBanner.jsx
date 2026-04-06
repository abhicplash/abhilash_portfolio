import React from "react";
import "./HomeBanner.css";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { TbBrandWhatsapp } from "react-icons/tb";

const HomeBanner = () => {
  return (
    <div className="HomeBanner-cotainer">
      <div className="hb-overlay">
        <h1 className="head">
          <span className="intro">Hi,I`m </span>Abhilash
        </h1>
        <p>
          Frontend Developer who loves building clean, fast, and responsive web
          apps. <br /> Turning ideas into simple, smooth user experiences.
        </p>
        <div className="hb-icons-wrapper">
          <a href="https://github.com/abhicplash" target="_blank">
            <div className="hb-icon">
              <TbBrandGithubFilled />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/abhilashcp/" target="_blank">
            <div className="hb-icon">
              <FaLinkedinIn />
            </div>
          </a>
          <a href="mailto:abhicplash@gmail.com" target="_blank">
            <div className="hb-icon">
              <SiGmail />
            </div>
          </a>
          <a
            href="https://wa.me/919562465095?
            text=Hi%20Abhilash%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect."
            target="_blank"
          >
            <div className="hb-icon">
              <TbBrandWhatsapp />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
