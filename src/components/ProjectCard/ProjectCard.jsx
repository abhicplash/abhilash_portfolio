import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ name, desc, image, live, git }) => {
  return (
    <div className="project-card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{desc}</p>
      <div className="btn-wrapper">
        <a href={live}>
          <button>Live Demo</button>
        </a>
        <a href={git}>
          <button>Git Hub</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
