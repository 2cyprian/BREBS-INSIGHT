import React, { useState, useEffect } from "react";
import { FaClock, FaLocationPin } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { IoMenu, IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import logo from "../../assets/Frame-logo.svg";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [language, setLanguage] = useState("EN");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide navbar on scroll down
      } else {
        setIsVisible(true); // Show navbar on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const servicesSublinks = [
    { name: "Logistics", link: "/services" },
    { name: "Transportation", link: "/services" },
    { name: "Clearing & Forwarding", link: "/services" },
    { name: "Warehousing", link: "/services" },
    { name: "Human Resources", link: "/services" },
    { name: "Iron Sheets", link: "/services" },
    { name: "Business Management", link: "/services" },
  ];

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "SW" : "EN"));
  };

  return (
    <header className={`navbar-header ${isVisible ? "show" : "hide"}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => navigate("/")}>
          <img src={logo} alt="BREBS INSIGHT COMPANY" className="logo" />
        </div>

        <div className="navbar-info">
          <div className="info-item">
            <span className="icon">
              <IoIosCall color="#d32f2f" size={30} />
            </span>
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

      <nav className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
        <div className="menu-container">
          <div className="nav-menu-links">
            <a className="nav-menu-item" onClick={() => navigate("/")}>
              Home
            </a>

            {/* Services Dropdown */}
            <div
              className="nav-menu-item dropdown-container"
              onClick={() =>
                setOpenDropdown((prev) => (prev === "services" ? null : "services"))
              }
            >
              <span className="dropdown-toggle">
                Services <span className="dropdown-arrow">▾</span>
              </span>

              <div className={`dropdown-menu ${openDropdown === "services" ? "show" : ""}`}>
                {servicesSublinks.map((service, index) => (
                  <a key={index} className="dropdown-item" onClick={() => navigate(service.link)}>
                    {service.name}
                  </a>
                ))}
              </div>
            </div>

            <a className="nav-menu-item" onClick={() => navigate("/about")}>
              About Us
            </a>
            <a className="nav-menu-item" onClick={() => navigate("/contact")}>
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
