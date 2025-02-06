import React from "react";
import { FaShippingFast, FaClock, FaBriefcase, FaLightbulb } from "react-icons/fa";
import aboutImage from "/img/businessman.jpg"; // Image for the card
import './homecard.css'

const HomeCard = () => {
  const features = [
    {
      icon: <FaLightbulb className="icon" />,
      title: "We Point It Right",
      description: "Reliable, effective, and business-aligned solutions for success."
    },
    {
      icon: <FaClock className="icon" />,
      title: "In-Time Services",
      description: "We ensure timely and efficient service delivery."
    },
    {
      icon: <FaBriefcase className="icon" />,
      title: "More Enterprises",
      description: "Helping businesses scale and expand with expert support."
    },
    {
      icon: <FaShippingFast className="icon" />,
      title: "Fastest Shipping",
      description: "Smooth logistics solutions, overcoming challenges in supply chains."
    }
  ];

  return (
    <div className="home-card">
      {/* About Image */}
      <img src={aboutImage} alt="About Brebs Insight" className="home-card-image" />
      
      {/* HomeCard Content */}
      <div className="home-card-content">
        <h3 className="home-card-title">About Brebs Insight</h3>
        <p className="home-card-description">
          Brebs Insight is a leading provider of logistics, clearing & forwarding, and HR services.
          We deliver top-quality, customer-focused solutions with industry expertise.
        </p>
        <a href="/about" className="learn-more">Learn More</a>
      </div>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="why-choose-us-header">
          <h2>Why Choose Us?</h2>
          <p>We provide reliable business and logistics solutions to keep you ahead.</p>
        </div>

        {/* Feature Cards */}
        <div className="features">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="icon-container">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeCard;
