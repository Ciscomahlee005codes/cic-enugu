import React, { useState } from "react";
import "./AlumniCredentialRequest.css";

const AlumniCredentialRequest: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    matricNumber: "",
    graduationYear: "",
    documentType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your request has been submitted successfully!");
    console.log(formData);
  };

  return (
    <div className="alumni-container">
      <div className="alumni-header">
        <h1>Alumni Credential Request</h1>
        <p>Please fill out the form below to request your certificate, transcript or credentials.</p>
      </div>

      <form className="alumni-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter a valid email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Matric Number</label>
          <input
            type="text"
            name="matricNumber"
            placeholder="E.g. NDU/CSC/17/1234"
            value={formData.matricNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Graduation Year</label>
          <input
            type="number"
            name="graduationYear"
            placeholder="E.g. 2020"
            value={formData.graduationYear}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Document Type</label>
          <select
            name="documentType"
            value={formData.documentType}
            onChange={handleChange}
            required
          >
            <option value="">Select document</option>
            <option value="Transcript">Official Transcript</option>
            <option value="Certificate">Certificate</option>
            <option value="Statement of Result">Statement of Result</option>
            <option value="Verification Letter">Verification Letter</option>
          </select>
        </div>

        <div className="form-group full">
          <label>Additional Information (Optional)</label>
          <textarea
            name="message"
            placeholder="Provide extra details if necessary"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn">Submit Request</button>
      </form>

      <div className="info-box">
        <h3>Processing Information</h3>
        <p>⏳ Requests typically take <strong>3–7 working days</strong> to process.</p>
        <p>📍 You may be contacted by the school for verification or additional details.</p>
        <p>📬 All documents will be sent to your provided email address.</p>
      </div>
    </div>
  );
};

export default AlumniCredentialRequest;
