import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admission.css";

const Register: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    studentName: "",
    dob: "",
    primarySchool: "",
    address: "",
    lga: "",
    state: "",
    guardianName: "",
    guardianPhone: "",
    email: "",
    phone: "",
    passport: null as File | null,
    passportPreview: "",
    baptismCard: null as File | null,
    birthCert: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    // Handle passport with preview
    if (name === "passport" && files && files[0]) {
      const file = files[0];
      setForm({
        ...form,
        passport: file,
        passportPreview: URL.createObjectURL(file),
      });
      return;
    }

    // Other file inputs
    if (files && files.length > 0) {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ Application Submitted Successfully!");
  };

  return (
    <div className="form-wrapper">
      <button className="back-btn" onClick={() => navigate("/admission/portal")}>← Back</button>

      <h2>Entrance Application Form</h2>
      <p className="form-note">Please fill in accurate details for verification</p>

      <form onSubmit={handleSubmit} className="form-box">

        <div className="file-group">
          <label>Passport Photograph</label>
          <input
            type="file"
            name="passport"
            accept="image/*"
            onChange={handleChange}
          />

          {/* ✅ Passport Preview */}
          {form.passportPreview && (
            <div className="passport-preview-box">
              <img
                src={form.passportPreview}
                alt="passport preview"
                className="passport-preview"
              />
            </div>
          )}
        </div>

        <label>Student Full Name</label>
        <input name="studentName" placeholder="Enter full name" onChange={handleChange} />

        <label>Date of Birth</label>
        <input type="date" name="dob" onChange={handleChange} />

        <label>Primary School Attended</label>
        <input name="primarySchool" placeholder="Name of primary school" onChange={handleChange} />

        <label>Home Address</label>
        <input name="address" placeholder="Residential address" onChange={handleChange} />

        <label>LGA</label>
        <input name="lga" placeholder="Local Government Area" onChange={handleChange} />

        <label>State of Origin</label>
        <input name="state" placeholder="State" onChange={handleChange} />

        <label>Guardian's Full Name</label>
        <input name="guardianName" placeholder="Parent/Guardian name" onChange={handleChange} />

        <label>Guardian Phone Number</label>
        <input name="guardianPhone" placeholder="Parent/Guardian phone" onChange={handleChange} />

        <label>Email</label>
        <input type="email" name="email" placeholder="Valid email" onChange={handleChange} />

        <label>Student Phone Number (optional)</label>
        <input name="phone" placeholder="Student phone (if any)" onChange={handleChange} />

        <div className="file-group">
          <label>Baptism Card</label>
          <input type="file" name="baptismCard" accept="image/*,.pdf" onChange={handleChange} />
        </div>

        <div className="file-group">
          <label>Birth Certificate</label>
          <input type="file" name="birthCert" accept="image/*,.pdf" onChange={handleChange} />
        </div>

        <button type="submit" className="submit-btn">Submit Application</button>
      </form>
    </div>
  );
};

export default Register;
