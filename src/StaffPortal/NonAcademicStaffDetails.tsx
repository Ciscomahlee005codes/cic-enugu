import React from "react";
import { Link, useParams } from "react-router-dom";
import "./NonAcademicStaff.css";
import NonAcad1 from "../assets/Non-Acad-1.jpg"
import NonAcad2 from "../assets/Non-Acad-2.jpg"
import NonAcad3 from "../assets/Non-Acad-3.jpg"

const nonAcademicData: any = {
  1: {
    name: "Mr. Tunde Bakare",
    position: "Registrar",
    department: "Registry",
    bio: "Responsible for student records, admin support, and school regulatory compliance.",
    duration: "10 Years",
    employmentDate: "7th March 2014",
    exitDate: "Still Active",
    disclosures: "None",
    image: NonAcad1
  },

  2: {
    name: "Mrs. Grace Okonkwo",
    position: "Bursar",
    department: "Finance",
    bio: "Manages school finances, budget planning, auditing and expenses.",
    duration: "7 Years",
    employmentDate: "21st August 2017",
    exitDate: "Still Active",
    disclosures: "None",
    image: NonAcad2
  },

  3: {
    name: "Mr. Ibrahim Musa",
    position: "ICT Support",
    department: "ICT Unit",
    bio: "Handles all school system support, networking and maintenance.",
    duration: "5 Years",
    employmentDate: "2nd November 2019",
    exitDate: "Still Active",
    disclosures: "None",
    image: NonAcad3
  }
};

const NonAcademicStaffDetails: React.FC = () => {
  const { id } = useParams();
  const staff = nonAcademicData[id as string];

  if (!staff) {
    return <h2 className="non-not-found">Staff record not found.</h2>;
  }

  return (
    <div className="non-details-wrapper">
      <Link to="/non-academic" className="non-back">← Back</Link>

      <div className="non-details-card">
        <img src={staff.image} alt={staff.name} className="non-details-img" />

        <h2>{staff.name}</h2>
        <p className="non-role">{staff.position}</p>
        <p className="non-dept-large">{staff.department}</p>

        <div className="non-info-grid">
          <div>
            <h4>Bio Data</h4>
            <p>{staff.bio}</p>
          </div>

          <div>
            <h4>Duration of Work</h4>
            <p>{staff.duration}</p>
          </div>

          <div>
            <h4>Date of Employment</h4>
            <p>{staff.employmentDate}</p>
          </div>

          <div>
            <h4>Retirement / Resignation</h4>
            <p>{staff.exitDate}</p>
          </div>

          <div>
            <h4>Disclosures</h4>
            <p>{staff.disclosures}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonAcademicStaffDetails;
