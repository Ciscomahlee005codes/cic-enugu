import React from "react";
import { useParams, Link } from "react-router-dom";
import "./AcademicStaff.css";
import Acad1 from "../assets/Academic-1.jpg";
import Acad2 from "../assets/Academic-2.jpg";
import Acad3 from "../assets/Academic-3.jpg";

const staffData = {
  "1": {
    name: "Dr. Samuel Adewale",
    role: "Senior Lecturer",
    department: "Computer Science",
    bio: "Experienced lecturer with passion for software engineering and AI research.",
    duration: "8 Years",
    employmentDate: "12th February 2016",
    exitDate: "Still Active",
    disclosures: "None",
    image: Acad1,
  },
  "2": {
    name: "Mrs. Ruth Daniel",
    role: "Head of Department",
    department: "Biochemistry",
    bio: "Highly respected researcher in molecular biology.",
    duration: "12 Years",
    employmentDate: "4th May 2012",
    exitDate: "Still Active",
    disclosures: "None",
    image: Acad2,
  },
  "3": {
    name: "Prof. James Ojo",
    role: "Professor",
    department: "Mathematics",
    bio: "An award-winning professor with contributions in mathematical modelling.",
    duration: "20 Years",
    employmentDate: "23rd Oct 2004",
    exitDate: "Still Active",
    disclosures: "None",
    image: Acad3,
  },
};

const AcademicStaffDetails: React.FC = () => {
  const { id } = useParams();

  // ✅ SAFE INDEXING (NO TS ERROR)
  const staff = staffData[id as keyof typeof staffData];

  if (!staff) return <h2 className="not-found">Staff record not found.</h2>;

  return (
    <div className="staff-details-wrapper">
      <Link to="/academic-staff" className="back-btn">← Back</Link>

      <div className="staff-details-card">
        <img src={staff.image} alt={staff.name} className="details-img" />

        <h2>{staff.name}</h2>
        <p className="role">{staff.role}</p>
        <p className="dept-large">{staff.department}</p>

        <div className="info-grid">
          <div>
            <h4>Bio Data</h4>
            <p>{staff.bio}</p>
          </div>

          <div>
            <h4>Duration of Work:</h4>
            <p>{staff.duration}</p>
          </div>

          <div>
            <h4>Date of Employment:</h4>
            <p>{staff.employmentDate}</p>
          </div>

          <div>
            <h4>Retirement / Resignation:</h4>
            <p>{staff.exitDate}</p>
          </div>

          <div>
            <h4>Disclosures:</h4>
            <p>{staff.disclosures}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicStaffDetails;
