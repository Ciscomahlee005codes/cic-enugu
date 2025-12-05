import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./AdminSidebar.css";
import { MdCampaign } from "react-icons/md";
import {
  FaBars,
  FaTimes,
  FaTachometerAlt,
  FaUsers,
  FaUserShield,
  FaSchool,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const AdminSidebar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => navigate("/");

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className={`admin-menu-btn ${open ? "admin-hide" : ""}`}
        onClick={() => setOpen(true)}
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div className={`admin-sidebar ${open ? "admin-open" : ""}`}>
        {/* Close Button */}
        <button className="admin-close-btn" onClick={() => setOpen(false)}>
          <FaTimes />
        </button>

        <div className="admin-sidebar-header">
          <h2>Admin Panel</h2>
          <p>School Management</p>
        </div>

        <ul className="admin-sidebar-menu">
          <li>
            <NavLink to="/admindashboard/home" className="admin-link">
              <FaTachometerAlt /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/admindashboard/managestudents" className="admin-link">
              <FaUsers /> Manage Students
            </NavLink>
          </li>
          <li>
            <NavLink to="/admindashboard/managestaff" className="admin-link">
              <FaUserShield /> Manage Staff
            </NavLink>
          </li>
          <li>
            <NavLink to="/admindashboard/classessubject" className="admin-link">
              <FaSchool /> Classes & Subjects
            </NavLink>
          </li>
          <li>
            <NavLink to="/admindashboard/schoolupdates" className="admin-link">
              <MdCampaign  /> School Updates
            </NavLink>
          </li>
          <li>
            <NavLink to="/admindashboard/systemsettings" className="admin-link">
              <FaCog /> System Settings
            </NavLink>
          </li>
        </ul>

        <button
          className="admin-logout-btn"
          onClick={() => setShowLogoutModal(true)}
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>

      {/* Modal */}
      {showLogoutModal && (
        <div className="admin-modal-overlay">
          <div className="admin-modal">
            <h3>Confirm Logout</h3>
            <p>Are you sure you want to logout?</p>

            <div className="admin-modal-actions">
              <button
                className="admin-btn-cancel"
                onClick={() => setShowLogoutModal(false)}
              >
                Cancel
              </button>
              <button className="admin-btn-logout" onClick={handleLogout}>
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminSidebar;
