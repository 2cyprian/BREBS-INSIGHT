import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-section company-info">
          <h2 className="company-name">BREBS INSIGHT COMPANY</h2>
          <p>We provide logistics and transportation services with professionalism and efficiency.</p>
          <div className="social-icons">
            <a href="#">
            <FaFacebookF className="icon"  color="#d32f2f"/>
            </a>
            <a href="#">
            <FaTwitter className="icon" color="#d32f2f"/>

            </a>
            <a href="#">
            <FaLinkedinIn className="icon" color="#d32f2f"/>

            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-section contact-info">
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt color="#d32f2f"  className="icon"/> Tegeta Kwa Ndevu, DGB House, 2nd Floor</p>
          <p><FaPhoneAlt color="#d32f2f" className="icon" /> +255 0655 371 71</p>
          <p><FaEnvelope color="#d32f2f" className="icon"/> info@brebsinsight.com</p>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter to stay updated.</p>
          <input type="email" placeholder="Enter your email" />
          <button><FaEnvelope/></button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 BREBS INSIGHT COMPANY - All Rights Reserved</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
