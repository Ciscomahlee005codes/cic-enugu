import React from "react";
import "./Footer.css";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="cic-footer">
      <div className="footer-container">

        {/* Left Column */}
        <div className="footer-about">
          <h2>CIC Enugu</h2>
          <p>College of the Immaculate Conception, Enugu — Building disciplined, intelligent and God-fearing leaders for tomorrow.</p>
        </div>

        {/* Middle Column */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Admissions</a></li>
            <li><a href="#">Student Portal</a></li>
            <li><a href="#">Staff Portal</a></li>
            <li><a href="#">School Calendar</a></li>
            <li><a href="#">Library</a></li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p className="infos"><FaPhoneAlt /> +234 803 000 0000</p>
          <p className="infos"><FaEnvelope /> info@cicenugu.edu.ng</p>

          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CIC Enugu. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
