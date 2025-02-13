import React from "react";
import { useLocation } from "react-router-dom";
import "./pageHeader.css"; // Make sure this is correctly linked

const PageHeader = () => {
  const location = useLocation();

  // Define styles based on route paths
  const pageStyles = {
   
    "/contact": {
      title: "Contact Us",
      background: "/img/contact-bg.jpg",
      overlayColor: "rgba(0, 50, 0, 0.8)",
    },
    "/services": {
      title: "Our Services",
      background: "/img/home-bg.jpg",
      overlayColor: "rgba(50, 0, 0, 0.8)",
    },
    "/about": {
      title: "About Us",
      background: "/img/businessman.jpg",
      overlayColor: "rgba(0, 0, 50, 0.8)",
    },
  };

  // Get current page settings
  const currentPage = pageStyles[location.pathname] || pageStyles["/contact"];

  return (
    <section 
      className="page-header" 
      style={{ backgroundImage: `url(${currentPage.background})` }}
    >
      <div 
        className="header-overlay"
        style={{ background: `linear-gradient(to right, ${currentPage.overlayColor}, rgba(0, 0, 50, 0))` }}
      >
        <h1>{currentPage.title}</h1>
        <div className="breadcrumb-container" id="breadcrumb-container">
          <span className="breadcrumb"><a href="/">Home</a></span> ➜ <span className="active">{currentPage.title}</span>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
