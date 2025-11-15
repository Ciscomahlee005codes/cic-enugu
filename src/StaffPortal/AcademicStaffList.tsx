import React from "react";
import { Link } from "react-router-dom";
import "./AcademicStaff.css";
import Acad1 from "../assets/Academic-1.jpg"
import Acad2 from "../assets/Academic-2.jpg"
import Acad3 from "../assets/Academic-3.jpg"

interface Staff {
  id: number;
  name: string;
  role: string;
  department: string;
  image: string;
}

const staffList: Staff[] = [
  {
    id: 1,
    name: "Dr. Samuel Adewale",
    role: "Senior Lecturer",
    department: "Computer Science",
    image: Acad1
  },
  {
    id: 2,
    name: "Mrs. Ruth Daniel",
    role: "Head of Department",
    department: "Biochemistry",
    image: Acad2
  },
  {
    id: 3,
    name: "Prof. James Ojo",
    role: "Professor",
    department: "Mathematics",
    image: Acad3
  },
];

const AcademicStaffList: React.FC = () => {
  return (
    <div className="staff-container">
      <h1 className="staff-title">Academic Staff Directory</h1>

      <div className="staff-grid">
        {staffList.map((staff) => (
          <Link to={`/staff/${staff.id}`} key={staff.id} className="staff-card">
            <img src={staff.image} alt={staff.name} className="staff-img" />
            <h3>{staff.name}</h3>
            <p>{staff.role}</p>
            <span className="dept">{staff.department}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AcademicStaffList;
