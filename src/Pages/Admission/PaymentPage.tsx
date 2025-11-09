import React, { useState } from "react";
import "./PaymentPage.css";
import { useNavigate } from "react-router-dom";

const PaymentPage: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    studentName: "",
    email: "",
    phone: "",
    examType: "Entrance Exam",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Redirecting to secure payment gateway...");
  };

  return (
    <div className="payment-container">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

      <h2 className="title">Entrance Form Payment</h2>
      <p className="subtitle">Complete your payment to continue registration</p>

      <form className="payment-form" onSubmit={handlePayment}>
        <label>Student Full Name</label>
        <input
          name="studentName"
          placeholder="Enter Full Name"
          value={form.studentName}
          onChange={handleChange}
          required
        />

        <label>Email Address</label>
        <input
          name="email"
          type="email"
          placeholder="Enter Valid Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>Phone Number</label>
        <input
          name="phone"
          placeholder="Enter Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <label>Exam Type</label>
        <select name="examType" value={form.examType} onChange={handleChange}>
          <option>Entrance Exam</option>
          <option>Transfer Exam</option>
        </select>

        <div className="payment-summary">
          <h3>Payment Summary</h3>
          <div className="row">
            <span>Application Form</span>
            <span>₦5,000</span>
          </div>
          <div className="row">
            <span>Processing Fee</span>
            <span>₦1,000</span>
          </div>
          <div className="total">
            <span>Total</span>
            <span>₦6,000</span>
          </div>
        </div>

        <button className="pay-btn">Proceed to Pay ₦6,000</button>
      </form>
    </div>
  );
};

export default PaymentPage;
