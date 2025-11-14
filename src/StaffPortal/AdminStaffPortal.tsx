import React from "react";
import { useNavigate } from "react-router-dom";
import "./StaffPortal.css";

const AdminStaffPortal: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="staff-container">
      <h1 className="staff-title">Staff Management Portal</h1>
      <p className="sub-title">Accessible only by Administrators</p>

      <div className="staff-category-wrapper">
        <div
          className="staff-card"
          onClick={() => navigate("/staff/academic")}
        >
          <h2>Academic Staff</h2>
          <p>View, edit and manage all academic staff data.</p>
        </div>

        <div
          className="staff-card"
          onClick={() => navigate("/staff/nonacademic")}
        >
          <h2>Non-Academic Staff</h2>
          <p>View, edit and manage non-teaching staff records.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminStaffPortal;
