import React, { useState } from "react";
import "./SystemSettings.css";
import { FaCog, FaMoon, FaSun, FaSave, FaLock, FaBell, FaDatabase } from "react-icons/fa";

const SystemSettings: React.FC = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [darkMode, setDarkMode] = useState(false);
  const [twoFA, setTwoFA] = useState(false);
  const [emailNoti, setEmailNoti] = useState(true);
  const [smsNoti, setSmsNoti] = useState(false);
  const [appNoti, setAppNoti] = useState(true);

  return (
    <div className="system-settings">
      <h2><FaCog /> System Settings</h2>

      {/* Settings Tabs */}
      <div className="settings-tabs">
        <button 
          className={activeTab === "general" ? "active" : ""} 
          onClick={() => setActiveTab("general")}
        >General</button>

        <button 
          className={activeTab === "appearance" ? "active" : ""} 
          onClick={() => setActiveTab("appearance")}
        >Appearance</button>

        <button 
          className={activeTab === "security" ? "active" : ""} 
          onClick={() => setActiveTab("security")}
        >Security</button>

        <button 
          className={activeTab === "notifications" ? "active" : ""} 
          onClick={() => setActiveTab("notifications")}
        >Notifications</button>

        <button 
          className={activeTab === "backup" ? "active" : ""} 
          onClick={() => setActiveTab("backup")}
        >Backup</button>
      </div>

      {/* ---------------- GENERAL SETTINGS ---------------- */}
      {activeTab === "general" && (
        <div className="settings-card">
          <h3>General Settings</h3>

          <label>School Name</label>
          <input type="text" placeholder="Enter school name..." />

          <label>School Email</label>
          <input type="email" placeholder="Enter email..." />

          <label>School Phone</label>
          <input type="text" placeholder="Enter phone number..." />

          <label>Address</label>
          <textarea placeholder="Enter school address..."></textarea>

          <button className="save-btn"><FaSave /> Save Changes</button>
        </div>
      )}

      {/* ---------------- APPEARANCE SETTINGS ---------------- */}
      {activeTab === "appearance" && (
        <div className="settings-card">
          <h3>Appearance</h3>

          <div className="toggle-row">
            <span>Dark Mode</span>
            <button 
              className="toggle-btn"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <FaMoon /> : <FaSun />}
            </button>
          </div>

          <label>Theme Color</label>
          <input type="color" className="color-input" />
        </div>
      )}

      {/* ---------------- SECURITY SETTINGS ---------------- */}
      {activeTab === "security" && (
        <div className="settings-card">
          <h3>Security</h3>

          <label>Current Password</label>
          <input type="password" />

          <label>New Password</label>
          <input type="password" />

          <label>Confirm Password</label>
          <input type="password" />

          <div className="toggle-row">
            <span>Two-Factor Authentication</span>
            <button 
              className="toggle-btn"
              onClick={() => setTwoFA(!twoFA)}
            >
              <FaLock />
            </button>
          </div>

          <button className="save-btn"><FaSave /> Update Security</button>
        </div>
      )}

      {/* ---------------- NOTIFICATION SETTINGS ---------------- */}
      {activeTab === "notifications" && (
        <div className="settings-card">
          <h3>Notification Preferences</h3>

          <div className="toggle-row">
            <span>Email Notifications</span>
            <input 
              type="checkbox"
              checked={emailNoti}
              onChange={() => setEmailNoti(!emailNoti)}
            />
          </div>

          <div className="toggle-row">
            <span>SMS Notifications</span>
            <input 
              type="checkbox"
              checked={smsNoti}
              onChange={() => setSmsNoti(!smsNoti)}
            />
          </div>

          <div className="toggle-row">
            <span>In-App Alerts</span>
            <input 
              type="checkbox"
              checked={appNoti}
              onChange={() => setAppNoti(!appNoti)}
            />
          </div>

          <button className="save-btn"><FaBell /> Save Preferences</button>
        </div>
      )}

      {/* ---------------- BACKUP SETTINGS ---------------- */}
      {activeTab === "backup" && (
        <div className="settings-card">
          <h3>Backup & Restore</h3>

          <button className="backup-btn"><FaDatabase /> Backup Database</button>
          <button className="restore-btn">Restore Database</button>
        </div>
      )}
    </div>
  );
};

export default SystemSettings;
