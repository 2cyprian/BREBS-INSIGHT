import React from "react";
import "./logistic-card.css";

const LogisticsCard = () => {
  return (
    <div className="logistics-container">
      <div className="logistics-card">
        <h2>World's leading <br /> contract logistics provider</h2>
        <p>
          Feel free to reach out to us with any inquiries about our services, 
          pricing, tracking shipments, or any other logistic-related questions.
        </p>
        <a className="contact-btn"  href="/contact">Contact Now</a>
      </div>
    </div>
  );
};

export default LogisticsCard;
