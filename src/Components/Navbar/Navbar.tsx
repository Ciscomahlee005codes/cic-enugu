import React, { useState, useEffect } from "react";
import cicLogo from "../../assets/cic-logo.png"
import "./Navbar.css";
import { NavLink, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
   const location = useLocation();

  // 🔥 Close menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);
  return (
    <header className="nav-container">
      <div className="nav-brand">
        <img src={cicLogo} alt="CIC Logo" className="brand-logo" />
        <span>CIC Enugu</span>
      </div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        {/* ✅ Close Button */}
        <button className="close-btn" onClick={() => setMenuOpen(false)}>✕</button>
        
        <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/admission/portal" onClick={() => setMenuOpen(false)}>Admission</NavLink>
        <NavLink to="/student/auth" onClick={() => setMenuOpen(false)}>Students</NavLink>
        <NavLink to="/AdminStaff" onClick={() => setMenuOpen(false)}>Staff</NavLink>

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
