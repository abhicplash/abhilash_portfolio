import React from "react";
import "./Projects.css";
import cartly from "../../assets/images/projects/cartly.png";
import jobportal from "../../assets/images/projects/jobportal.png";
import abecom from "../../assets/images/projects/abecom.png";
import Miniprojects from "../Miniprojects/Miniprojects";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  const projectsLists = [
    {
      name: "Cartly -Fullstack Ecom ",
      image: cartly,
      description:
        "A full-stack e-commerce application built with React.js and AWS Cloud Services. Features secure authentication, dynamic product data via serverless APIs, and Redux for state management.Deployed on AWS S3 with CloudFront, with a fully responsive UI and optimized performance.",
      LiveDemo: "https://d3fqcpevmr3vzu.cloudfront.net/",
      github: "https://github.com/abhicplash/cartly.git",
    },
    {
      name: "Job Portal",
      image: jobportal,
      description:
        "A job listing platform built with React, featuring filterable job search and a modern UI. Implements Firebase Authentication and Firestore for real-time job data and user management.Includes an admin dashboard to post and manage jobs, with React Query for efficient data handling.",
      LiveDemo: "https://job-board-woad-gamma.vercel.app/",
      github: "https://github.com/abhicplash/Job-Board",
    },
    {
      name: "Ab-Ecom",
      image: abecom,
      description:
        "An e-commerce web application built with React, featuring Firebase Authentication for secure user login and signup. Integrates FakeStoreAPI for dynamic product listings and Redux for global state management.Includes add-to-cart functionality with a fully responsive and user-friendly interface.",
      LiveDemo: "https://ab-ecom-psi.vercel.app/",
      github: "https://github.com/abhicplash/ab-ecom",
    },
  ];

  return (
    <>
      <div className="Projects-continer">
        <h1>Projects</h1>
        <div className="project-container">
          {projectsLists.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              desc={project.description}
              image={project.image}
              live={project.LiveDemo}
              git={project.github}
            />
          ))}
        </div>
      </div>
      <Miniprojects />
    </>
  );
};

export default Projects;
