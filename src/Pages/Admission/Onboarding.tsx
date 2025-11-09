import React from "react";
import "./Onboarding.css";
import { useNavigate } from "react-router-dom";

const Onboarding: React.FC = () => {
  const navigate = useNavigate();

  const steps = [
    { title: "Acceptance Fee Payment", status: "Pending", action: "Pay Now" },
    { title: "Student Biodata Form", status: "Incomplete", action: "Fill Form" },
    { title: "Upload Passport & Documents", status: "Incomplete", action: "Upload" },
    { title: "Print Admission Letter", status: "Locked", action: "Pending" },
    { title: "Medical & Clearance Schedule", status: "Locked", action: "Pending" },
  ];

  return (
    <div className="onboard-container">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

      <h2>🎓 New Student Onboarding</h2>
      <p className="description">
        Complete the steps below to finalize your admission and become an official student.
      </p>

      <div className="steps-wrapper">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <div>
              <h4>{step.title}</h4>
              <span className={`status ${step.status.toLowerCase()}`}>{step.status}</span>
            </div>
            <button className="action-btn">{step.action}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Onboarding;
