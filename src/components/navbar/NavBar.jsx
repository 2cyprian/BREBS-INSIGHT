import React, { useState } from "react";
import { FaClock, FaLocationPin } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import logo from '../../assets/Frame-logo.svg';
import { IoMenu, IoClose } from "react-icons/io5";

import "./navbar.css";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [language, setLanguage] = useState('EN');

  const servicesSublinks = [
    { name: "Logistics", link: "#logistics" },
    { name: "Transportation", link: "#transportation" },
    { name: "Clearing & Forwarding", link: "#clearing" },
    { name: "Warehousing", link: "#warehousing" },
    { name: "Human Resources", link: "#hr" },
    { name: "Iron Sheets", link: "#iron-sheets" },
    { name: "Business Management", link: "#business-mgmt" }
  ];

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'EN' ? 'SW' : 'EN');
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="BREBS INSIGHT COMPANY" className="logo" />
        </div>
        
        <div className="navbar-info">
          
          <div className="info-item">
            <span className="icon"><IoIosCall color="#d32f2f" size={30}/></span>
            <div className="info-text">
              <span className="info-title">Call Us</span>
              <span className="info-detail">255065537171</span>
            </div>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="mobile-controls">
          <button className="language-switcher" onClick={toggleLanguage}>
            {language}
          </button>
          <button 
            className="hamburger" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
          </button>
        </div>
      </div>

      <nav className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="menu-container">
          <div className="menu-links">
            <a href="#" className="menu-item">Home</a>
            
            {/* Services Dropdown */}
            <div 
              className="menu-item dropdown-container"
              onClick={() => setOpenDropdown(prev => prev === 'services' ? null : 'services')}
            >
              <span className="dropdown-toggle">
                Services
                <span className="dropdown-arrow">▾</span>
              </span>
              
              <div className={`dropdown-menu ${openDropdown === 'services' ? 'show' : ''}`}>
                {servicesSublinks.map((service, index) => (
                  <a 
                    key={index}
                    href={service.link} 
                    className="dropdown-item"
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </div>

            <a href="#" className="menu-item">About Us</a>
            <a href="#" className="menu-item">Contact Us</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;