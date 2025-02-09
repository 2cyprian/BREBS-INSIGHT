import React from "react";
import "./servicecard.css";

const ServiceCard = ({ image, title, description, link }) => {
  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-image" />
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <a href={link} className="read-more">
        Read More <span>➝</span>
      </a>
    </div>
  );
};

export default ServiceCard;
