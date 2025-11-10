import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./StudentSidebar.css";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaTachometerAlt,
  FaBook,
  FaShoppingCart,
  FaUserGraduate,
  FaFileInvoice,
  FaCreditCard,
  FaSignOutAlt,
} from "react-icons/fa";

const StudentSidebar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); // redirect to home page
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className={`menu-btn ${open ? "hide" : ""}`}
        onClick={() => setOpen(true)}
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${open ? "open" : ""}`}>
        {/* Close Button Mobile */}
        <button className="close-btn" onClick={() => setOpen(false)}>
          <FaTimes />
        </button>

        <div className="sidebar-header">
          <h2>CIC Portal</h2>
          <p>Student Dashboard</p>
        </div>

        <ul className="sidebar-menu">
          <li>
            <NavLink to="/" className="link">
              <FaHome /> HomePage
            </NavLink>
          </li>
          <li>
            <NavLink to="/studentdashboard/home" className="link">
              <FaTachometerAlt /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/studentdashboard/checkResult" className="link">
              <FaBook /> Check Results
            </NavLink>
          </li>
          <li>
            <NavLink to="/studentdashboard/bookshop" className="link">
              <FaShoppingCart /> School Bookshop
            </NavLink>
          </li>
          <li>
            <NavLink to="/studentdashboard/uniforms" className="link">
              <FaUserGraduate /> Buy School Outfits
            </NavLink>
          </li>
          <li>
            <NavLink to="/studentdashboard/payment" className="link">
              <FaCreditCard /> Pay School Fees
            </NavLink>
          </li>
          <li>
            <NavLink to="/studentdashboard/paymenthistory" className="link">
              <FaFileInvoice /> Payment History
            </NavLink>
          </li>
        </ul>

        <button
          className="logout-btn"
          onClick={() => setShowLogoutModal(true)}
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Confirm Logout</h3>
            <p>Are you sure you want to logout?</p>
            <div className="modal-actions">
              <button
                className="btn-cancel"
                onClick={() => setShowLogoutModal(false)}
              >
                Cancel
              </button>
              <button className="btn-logout" onClick={handleLogout}>
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StudentSidebar;
