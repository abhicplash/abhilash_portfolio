import React from "react";
import "./Miniprojects.css";
import bmi from "../../assets/images/miniprojects/bmi.png";
import calc from "../../assets/images/miniprojects/calc.png";
import mf from "../../assets/images/miniprojects/mf.png";
import qr from "../../assets/images/miniprojects/qr.png";
import tt from "../../assets/images/miniprojects/tt.png";
import vel from "../../assets/images/miniprojects/vel.png";
import weather from "../../assets/images/miniprojects/weather.png";
import learn from "../../assets/images/miniprojects/learn.png";
import ProjectCard from "../ProjectCard/ProjectCard";
import MiniProjectCard from "../MiniProjectCard/MiniProjectCard";

const Miniprojects = () => {
  const miniProjectList = [
    {
      name: "BMI Index",
      image: bmi,
      desc: "A simple and responsive BMI calculator built with React.js, allowing users to input details and instantly view results with clear categorization and a clean user-friendly interface.",
      liveDemo: "https://bmi-calculator-five-snowy.vercel.app/",
    },
    {
      name: "Weather App",
      image: weather,
      desc: "A simple and responsive weather application built with React.js, displaying real-time weather data by city using API integration, with a clean interface and smooth user experience.",
      liveDemo: "https://weather-app-six-ebon-83.vercel.app/",
    },
    {
      name: "E Learning",
      image: learn,
      desc: "A modern and interactive e-learning platform showcasing courses, structured lessons, and user-friendly navigation with a clean interface and responsive design for seamless learning experience.",
      liveDemo: "https://e-learning-plateform-tan.vercel.app/",
    },
    {
      name: "MechFusion",
      image: mf,
      desc: "A modern and responsive website for MechFusion, showcasing engineering solutions, services, and contact features with a clean user interface and seamless mobile-friendly experience.",
      liveDemo: "https://mechfusion.in/",
    },
    {
      name: "Velayudha Pharmacy and Clinic",
      image: vel,
      desc: "A traditional yet modern website for Velayudha Pharmacy, presenting Ayurvedic services, product listings, and clinic information with a user-friendly design and mobile responsiveness.",
      liveDemo: "https://velayudhapharmacyandclinic.com/",
    },
    {
      name: "Techni Trust",
      image: tt,
      desc: "A professional and responsive website for Techni Trust, showcasing its mission, services, and initiatives with a clean interface and seamless user-friendly experience across all devices.",
      liveDemo: "https://technitrust.ae/",
    },
    {
      name: "Basic calculator",
      image: calc,
      desc: "A simple and responsive calculator application built with React.js, enabling basic arithmetic operations with a clean interface and smooth user-friendly experience across different devices.",
      liveDemo: "https://calculatorhtml-neon.vercel.app/",
    },
    {
      name: "QR Code Generator",
      image: qr,
      desc: "A simple and responsive QR code generator built with React.js, allowing users to convert text or URLs into codes with a clean interface and smooth user-friendly experience.",
      liveDemo: "https://qr-generator-kappa-six.vercel.app/",
    },
  ];
  return (
    <div className="miniproject-container">
      <h2>Mini Projects</h2>
      <div className="mini-project-list-container">
        {miniProjectList.map((mini, index) => (
          <MiniProjectCard
            key={index}
            name={mini.name}
            image={mini.image}
            desc={mini.desc}
            live={mini.liveDemo}
          />
        ))}
      </div>
    </div>
  );
};

export default Miniprojects;
