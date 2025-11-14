import React, { useState } from "react";
import cicLogo from "../../assets/cic-logo.png"
import "./Navbar.css";
import { NavLink } from "react-router-dom";

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
        
        <NavLink to="/">Home</NavLink>
        <NavLink to="/admission/portal">Admission</NavLink>
        <NavLink to="/student/auth">Students</NavLink>
        <NavLink to="/AdminStaff">Staff</NavLink>
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
