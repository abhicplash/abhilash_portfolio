// import React from "react";
// import "./Skills.css";
// import css from "../../assets/skills/css.png";
// import html from "../../assets/skills/html.png";
// import JavaScript from "../../assets/skills/js.png";
// import react from "../../assets/skills/react.png";
// import redux from "../../assets/skills/redux.png";
// import bootstrap from "../../assets/skills/bs.png";
// import tailwind from "../../assets/skills/tailwind.png";
// import awsS3 from "../../assets/skills/awsS3.png";
// import awsdynamodb from "../../assets/skills/awsdynamodb.png";
// import Cognito from "../../assets/skills/Cognito.png";
// import awscloudfront from "../../assets/skills/awscloudfront.png";
// import lambda from "../../assets/skills/lambda.png";

// const Skills = () => {
//   const skillsGroup = [
//     { name: "HTML", image: html },
//     { name: "CSS", image: css },
//     { name: "Javascript", image: JavaScript },
//     { name: "Bootstrap ", image: bootstrap },
//     { name: "React", image: react },
//     { name: "Redux", image: redux },
//     { name: "Tailwind", image: tailwind },
//     // { name: "Firebase", image: firebase },
//     { name: "AWS S3", image: awsS3 },
//     { name: "AWS DynamoDB", image: awsdynamodb },
//     { name: "AWS CloudFront", image: awscloudfront },
//     { name: "AWS Cognito", image: Cognito },
//     { name: "AWS Lambda", image: lambda },

//   ];

//   return (
//     <div className="Skills-container">
//       <h3>Skills</h3>
//       <div className="skill-groupwrapper">
//         {skillsGroup.map((skill, index) => (
//           <div key={index} className="Skill-card">
//             <img src={skill.image} alt="CSS3" title="CSS3" />
//             <h5>{skill.name}</h5>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;

import React from "react";
import "./Skills.css";

import css from "../../assets/skills/css.png";
import html from "../../assets/skills/html.png";
import js from "../../assets/skills/js.png";
import react from "../../assets/skills/react.png";
import redux from "../../assets/skills/redux.png";
import bootstrap from "../../assets/skills/bs.png";
import tailwind from "../../assets/skills/tailwind.png";
import awsS3 from "../../assets/skills/awsS3.png";
import awsDynamodb from "../../assets/skills/awsdynamodb.png";
import cognito from "../../assets/skills/Cognito.png";
import cloudfront from "../../assets/skills/awscloudfront.png";
import lambda from "../../assets/skills/lambda.png";

const Skills = () => {
  const skillsGroup = [
    { name: "HTML5", image: html },
    { name: "CSS3", image: css },
    { name: "JavaScript", image: js },
    { name: "Bootstrap", image: bootstrap },
    { name: "React", image: react },
    { name: "Redux", image: redux },
    { name: "Tailwind CSS", image: tailwind },
    { name: "AWS S3", image: awsS3 },
    { name: "AWS DynamoDB", image: awsDynamodb },
    { name: "AWS CloudFront", image: cloudfront },
    { name: "AWS Cognito", image: cognito },
    { name: "AWS Lambda", image: lambda },
  ];

  return (
    <section className="skills-container">
      <h3>Skills</h3>

      <div className="skills-grid">
        {skillsGroup.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">
              <img src={skill.image} alt={skill.name} title={skill.name} />
            </div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;