import React from "react";
import { NavLink } from "react-router-dom";
import "./Admission.css";

const AdmissionHome: React.FC = () => {
  return (
    <div className="admission-container">
      <header className="admission-header">
        <h1>CIC Admission Portal</h1>
        <p>Welcome to the official CIC admission management system</p>
      </header>

      <div className="admission-grid">
        <NavLink to="/admission/register" className="admission-card">
           <h3>📝 Buy & Fill The Entrance Form</h3>
          <p>Purchase entrance form and fill details.</p>
        </NavLink>


        <NavLink to="/admission/status" className="admission-card">
          <h3>✅ Check Admission Status</h3>
          <p>View admission list & print your admission letter.</p>
        </NavLink>

        <NavLink to="/admission/onboarding" className="admission-card">
          <h3>🎓 New Student Onboarding</h3>
          <p>Pay acceptance fee and complete onboarding steps.</p>
        </NavLink>
      </div>
    </div>
  );
};

export default AdmissionHome;
