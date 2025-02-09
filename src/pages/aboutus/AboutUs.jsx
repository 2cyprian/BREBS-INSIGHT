import React from "react";
import "./AboutUs.css";
import aboutImage from "/img/businessman.jpg"; // Add a relevant image
import logisticsImage from "/img/delivery.jpg"; // Image for logistics services
import hrImage from "/img/hr-management.png"; // Image for human resources
import TeamSection from "./about/Team";
import StatisticsSection from "./about/Statistics";
import LogisticsCard from "../../components/cards/LogisticCard";

const AboutUs = () => {
  return (
    <div className="about-us">

  
    <section className="about-container">
      <div className="about-header">
        <img src={aboutImage} alt="About Brebs Insight" className="about-banner" />
        <h2>About Brebs Insight Company</h2>
      </div>

      <div className="about-content">
        <p>
          Brebs Insight Company Limited is a leading provider of{" "}
          <strong>logistics, clearing & forwarding, and human resource services</strong>, 
          registered with BRELA in 2015. We deliver <strong>top-quality, 
          customer-focused solutions</strong> backed by industry expertise.
        </p>

        <h3>Why Choose Brebs?</h3>
        <div className="about-features">
          <div className="feature-card">
            <img src={logisticsImage} alt="Logistics Services" />
            <h4>Reliable & Efficient</h4>
            <p>Ensuring timely and smooth delivery of goods both locally & internationally.</p>
          </div>

          <div className="feature-card">
            <img src={hrImage} alt="HR Services" />
            <h4>Expert HR Solutions</h4>
            <p>Supporting businesses with expert recruitment and workforce management.</p>
          </div>
        </div>

        <h3>Our Mission</h3>
        <p>
          We aim to build <strong>long-term, stress-free</strong> business relationships 
          by delivering <strong>value-driven solutions</strong> that exceed expectations.
        </p>

        <h3>Our Vision</h3>
        <p>
          To be the <strong>#1 choice</strong> for logistics and business solutions, empowering 
          local and global markets with <strong>clear, effective communication</strong> and service excellence.
        </p>
      </div>
      
    </section>
      <div className="our-team">
        <TeamSection/>
      </div>
      <div className="statistics">
        <StatisticsSection/>
      </div>
      <div className="logistics">
        <LogisticsCard/>
      </div>
    </div>
  );
};

export default AboutUs;
