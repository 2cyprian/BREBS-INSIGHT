import React from "react";
import { FaShippingFast, FaClock, FaBriefcase, FaLightbulb } from "react-icons/fa";
import aboutImage from "/img/businessman.jpg";
import "./homecard.css";

const HomeCard = () => {
  const features = [
    { icon: <FaLightbulb />, title: "We Point It Right" },
    { icon: <FaClock />, title: "In-Time Services" },
    { icon: <FaBriefcase />, title: "More Enterprises" },
    { icon: <FaShippingFast />, title: "Fastest Shipping" },
  ];

  return (
    <div className="home-cards-container">
      {/* About Card */}
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front about-card" style={{ backgroundImage: `url(${aboutImage})` }}>
            <h3>About Brebs Insight</h3>
          </div>
          <div className="flip-card-back">
            <h3>About Brebs Insight</h3>
            <p>We provide top-quality logistics, clearing & forwarding, and HR services.</p>
            <a href="/about" className="learn-more">Learn More</a>
          </div>
        </div>
      </div>

      {/* Why Choose Us Card */}
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front why-us-card">
            <h3>Why Choose Us?</h3>
            <p>Reliable business and logistics solutions to keep you ahead.</p>
          </div>
          <div className="flip-card-back">
            <h3>Our Features</h3>
            <ul>
              {features.map((feature, index) => (
                <li key={index} className="feature-item">
                  {feature.icon} {feature.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
