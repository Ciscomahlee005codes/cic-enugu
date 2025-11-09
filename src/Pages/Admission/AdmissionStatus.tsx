import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdmissionStatus.css";

const AdmissionStatus: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    examId: "",
    email: "",
  });

  const [status, setStatus] = useState<null | "pending" | "admitted" | "not-admitted">(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Dummy Logic — later connect to backend / firestore
    if (form.examId === "CIC2025-001" && form.email === "student@example.com") {
      setStatus("admitted");
    } else if (form.examId && form.email) {
      setStatus("pending");
      
      setTimeout(() => {
        setStatus("not-admitted");
      }, 3500);
    }
  };

  return (
    <div className="status-wrapper">

      <button className="back-btn" onClick={() => navigate("/admission/portal")}>← Back</button>

      <h2>Check Admission Status</h2>
      <p className="note">Enter your Exam Number & Email to verify admission</p>

      <form className="status-form" onSubmit={handleSubmit}>
        <label>Exam / Application Number</label>
        <input 
          type="text" 
          placeholder="e.g. CIC2025-001"
          value={form.examId}
          onChange={(e) => setForm({ ...form, examId: e.target.value })}
          required
        />

        <label>Email Used During Registration</label>
        <input 
          type="email" 
          placeholder="Enter your email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <button className="check-btn" type="submit">Check Status</button>
      </form>

      {/* ✅ Status Output */}
      {status === "admitted" && (
        <div className="status-box admitted">
          ✅ Congratulations!
          <p>You have been offered admission into CIC Enugu.</p>

          <button 
            className="print-btn"
            onClick={() => window.print()}
          >Print Admission Letter
          </button>
        </div>
      )}

      {status === "pending" && (
        <div className="status-box pending">
          ⏳ Checking status...
        </div>
      )}

      {status === "not-admitted" && (
        <div className="status-box rejected">
          ❌ Sorry, Admission Not Granted.
          <p>Please try again later.</p>
        </div>
      )}
    </div>
  );
};

export default AdmissionStatus;
