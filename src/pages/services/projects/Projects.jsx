import React from 'react';
import './project.css';

const ProjectCard = ({ title, description, image }) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
        <div className="project-overlay">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
