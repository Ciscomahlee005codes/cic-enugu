import React from "react";
import "./AdminHome.css";
import { FaUsers, FaUserShield, FaSchool, FaBook, FaCreditCard, FaFileInvoice, FaChartLine } from "react-icons/fa";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const AdminHome: React.FC = () => {
  const admin = {
    name: "Admin John",
    role: "Super Admin",
    img: "https://via.placeholder.com/90",
  };

  // Info cards
  const stats = [
    { title: "Total Students", value: 1280, icon: <FaUsers /> },
    { title: "Total Academic Staff", value: 75, icon: <FaUserShield /> },
    { title: "Total Non-Academic Staff", value: "40", icon: <FaUsers /> },
    { title: "Total Classes", value: 32, icon: <FaSchool /> },
  ];

  // Charts data
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Monthly Fees Collected",
        data: [1500000, 1200000, 1800000, 1400000, 1600000, 2000000],
        borderColor: "#1a2b6b",
        backgroundColor: "rgba(26,43,107,0.2)",
        tension: 0.4,
      },
    ],
  };

  const barData = {
    labels: ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5"],
    datasets: [
      {
        label: "Students per Class",
        data: [120, 110, 150, 140, 130],
        backgroundColor: "#1a2b6b",
      },
    ],
  };

  return (
    <div className="admin-dashboard">
      {/* Welcome Banner */}
      <div className="welcome-card">
        <div className="welcome-info">
          <h2>Welcome Back, {admin.name} 👋</h2>
          <p>{admin.role}</p>
          <button className="btn-small">View Profile</button>
        </div>
        <img src={admin.img} alt="Admin" className="admin-avatar" />
      </div>

      {/* Quick Stats */}
      <div className="stats-grid">
        {stats.map((stat, idx) => (
          <div className="stat-card" key={idx}>
            {stat.icon}
            <h3>{stat.value}</h3>
            <p>{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <h3 className="section-title">Quick Actions</h3>
      <div className="action-grid">
        <button className="action-btn"><FaUsers /> Manage Students</button>
        <button className="action-btn"><FaUserShield /> Manage Staff</button>
        <button className="action-btn"><FaCreditCard /> Manage Payments</button>
        <button className="action-btn"><FaBook /> Manage Classes</button>
        <button className="action-btn"><FaFileInvoice /> Reports</button>
        <button className="action-btn"><FaChartLine /> Analytics</button>
      </div>

      {/* Charts */}
      <h3 className="section-title">Analytics</h3>
      <div className="charts-grid">
        <div className="chart-card">
          <h4>Monthly Fees Collected</h4>
          <Line data={lineData} />
        </div>
        <div className="chart-card">
          <h4>Students per Class</h4>
          <Bar data={barData} />
        </div>
      </div>

      {/* Recent Activity */}
      <h3 className="section-title">Recent Activity</h3>
      <div className="recent-activity">
        <p>📄 Student registration — 1 week ago</p>
        <p>💳 Fees payment received — 3 days ago</p>
        <p>🛒 Class schedule updated — 2 weeks ago</p>
      </div>
    </div>
  );
};

export default AdminHome;
