import React from "react";
import { Link } from "react-router-dom";
import "./NonAcademicStaff.css";
import NonAcad1 from "../assets/Non-Acad-1.jpg"
import NonAcad2 from "../assets/Non-Acad-2.jpg"
import NonAcad3 from "../assets/Non-Acad-3.jpg"

interface NonAcademicStaff {
  id: number;
  name: string;
  position: string;
  department: string;
  image: string;
}

const nonAcademicList: NonAcademicStaff[] = [
  {
    id: 1,
    name: "Mr. Tunde Bakare",
    position: "Registrar",
    department: "Registry",
    image: NonAcad1
  },
  {
    id: 2,
    name: "Mrs. Grace Okonkwo",
    position: "Bursar",
    department: "Finance",
    image: NonAcad2
  },
  {
    id: 3,
    name: "Mr. Ibrahim Musa",
    position: "ICT Support",
    department: "ICT Unit",
    image: NonAcad3
  },
];

const NonAcademicStaffList: React.FC = () => {
  return (
    <div className="non-container">
      <h1 className="non-title">Non-Academic Staff Directory</h1>

      <div className="non-grid">
        {nonAcademicList.map(staff => (
          <Link
            to={`/non-academic/${staff.id}`}
            key={staff.id}
            className="non-card"
          >
            <img src={staff.image} alt={staff.name} className="non-img" />
            <h3>{staff.name}</h3>
            <p>{staff.position}</p>
            <span className="non-dept">{staff.department}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NonAcademicStaffList;
