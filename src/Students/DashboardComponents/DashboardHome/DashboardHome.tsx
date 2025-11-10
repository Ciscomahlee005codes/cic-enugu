import React from "react";
import "./DashboardHome.css";
import { FaBook, FaFileDownload, FaUserGraduate, FaCreditCard, FaSchool } from "react-icons/fa";

const DashboardHome: React.FC = () => {
  const student = {
    name: "John Doe",
    matric: "STU-2024-0301",
    class: "JSS 1 – A",
    img: "https://via.placeholder.com/90"
  };

  return (
    <div className="student-dashboard">
      
      {/* Welcome Banner */}
      <div className="welcome-card">
        <div className="welcome-info">
          <h2>Welcome Back, {student.name} 👋</h2>
          <p>{student.class} | {student.matric}</p>
          <button className="btn-small">View Profile</button>
        </div>
        <img src={student.img} alt="Student" className="student-avatar" />
      </div>

      {/* Quick Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <FaSchool className="icon"/>
          <h3>Current Term</h3>
          <p>1st Term, 2024/2025</p>
        </div>
        <div className="stat-card">
          <FaBook className="icon"/>
          <h3>Subjects</h3>
          <p>12 Courses</p>
        </div>
        <div className="stat-card">
          <FaFileDownload className="icon"/>
          <h3>Results</h3>
          <p>View & Download</p>
        </div>
      </div>

      {/* Quick Actions */}
      <h3 className="section-title">Quick Actions</h3>
      <div className="action-grid">
        <button className="action-btn"><FaBook /> Check Result</button>
        <button className="action-btn"><FaCreditCard /> Pay School Fees</button>
        <button className="action-btn"><FaSchool /> School Bookshop</button>
        <button className="action-btn"><FaUserGraduate /> Student E-Library</button>
      </div>

      {/* Recent Activity */}
      <h3 className="section-title">Recent Activity</h3>
      <div className="recent-activity">
        <p>📄 Result checked — 1 week ago</p>
        <p>💳 Fees payment draft initiated — 3 weeks ago</p>
        <p>🛒 Purchased School Tie — 2 months ago</p>
      </div>
    </div>
  );
};

export default DashboardHome;
