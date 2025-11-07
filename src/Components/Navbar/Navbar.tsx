import React, { useState } from "react";
import cicLogo from "../../assets/cic-logo.png"
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav-container">
      <div className="nav-brand">
        <img src={cicLogo} alt="CIC Logo" className="brand-logo" />
        <span>CIC Enugu</span>
      </div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        {/* ✅ Close Button */}
        <button className="close-btn" onClick={() => setMenuOpen(false)}>✕</button>
        
        <a href="#">Home</a>
        <a href="#">Admission</a>
        <a href="#">Students</a>
        <a href="#">Staff</a>
        <button className="apply-btn">Apply Now</button>
      </nav>

      {/* Hamburger */}
      <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
    </header>
  );
};

export default Navbar;
