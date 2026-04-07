import React from "react";
import "./MiniProjectCard.css";

const MiniProjectCard = ({ name, image, desc, live }) => {
  return (
    <div className="MiniProjectCard">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{desc}</p>
      <a href={live}>
        <button>Live Demo</button>
      </a>
    </div>
  );
};

export default MiniProjectCard;
