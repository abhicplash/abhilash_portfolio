import React from "react";
import "./AboutMe.css";
import aboutImg from "../../assets/personal/abhilash.jpeg";
import { PiReadCvLogo } from "react-icons/pi";
import Skills from "../skills/Skills";

const AboutMe = () => {
  return (
    <div className="AboutMe-container">
      <div className="about-pannel-head">
        <h6>MY BIO</h6>
        <h3>About Me.</h3>
        <div className="AboutME-content-wrapper">
          <img src={aboutImg} alt="Abhilash" className="about-Image" />
          <div className="about-description">
            <p>
              Frontend Developer with 5+ years of experience building scalable,
              high-performance web applications using React.js and modern
              JavaScript (ES6+). I specialize in developing responsive,
              user-friendly interfaces with a strong focus on clean design,
              usability, and performance optimization. I have hands-on
              experience in integrating REST APIs and managing complex
              application state using Redux . <br /> <br /> I have worked with
              AWS serverless technologies such as Lambda, API Gateway, DynamoDB,
              S3, and CloudFront, along with Firebase for authentication and
              real-time data handling. My approach emphasizes writing clean,
              maintainable, and reusable code while ensuring cross-browser
              compatibility and responsive design across all devices. <br />{" "}
              <br /> I enjoy collaborating with cross-functional teams to
              deliver production-ready solutions and continuously improving my
              skills to stay updated with modern frontend and cloud
              technologies. I am passionate about building impactful,
              user-centric applications that provide seamless digital
              experiences.
            </p>
            <button>
              View Resume <PiReadCvLogo />{" "}
            </button>
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default AboutMe;
