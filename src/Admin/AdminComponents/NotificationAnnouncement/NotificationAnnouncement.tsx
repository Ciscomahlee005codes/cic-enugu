import React, { useState } from "react";
import "./NotificationAnnouncement.css";
import { FaBell, FaBullhorn, FaPlus } from "react-icons/fa";

type Notification = {
  id: number;
  title: string;
  message: string;
  time: string;
};

type Announcement = {
  id: number;
  title: string;
  content: string;
  date: string;
};

const NotificationAnnouncement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"notification" | "announcement">("notification");

  const [notifications] = useState<Notification[]>([
    { id: 1, title: "Fees Reminder", message: "School fees is due next week.", time: "2 hours ago" },
    { id: 2, title: "PTA Meeting", message: "Parents meeting scheduled for Friday.", time: "1 day ago" },
  ]);

  const [announcements, setAnnouncements] = useState<Announcement[]>([
    { id: 1, title: "Mid-Term Break", content: "Students go on break next Monday.", date: "Jan 8, 2025" },
    { id: 2, title: "New Hostel Rules", content: "Updated guidelines for hostel students.", date: "Jan 3, 2025" },
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const [modalData, setModalData] = useState<{ title: string; content: string } | null>(null);

  const publishAnnouncement = () => {
    if (!newTitle || !newContent) return;

    const newAnn = {
      id: announcements.length + 1,
      title: newTitle,
      content: newContent,
      date: new Date().toDateString(),
    };

    setAnnouncements((prev) => [newAnn, ...prev]);
    setNewTitle("");
    setNewContent("");
  };

  return (
    <div className="notice-page">
      <h2>Notifications & Announcements</h2>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === "notification" ? "active" : ""}
          onClick={() => setActiveTab("notification")}
        >
          <FaBell /> Notifications
        </button>
        <button
          className={activeTab === "announcement" ? "active" : ""}
          onClick={() => setActiveTab("announcement")}
        >
          <FaBullhorn /> Announcements
        </button>
      </div>

      {/* ---------------- NOTIFICATIONS TAB ---------------- */}
      {activeTab === "notification" && (
        <div className="notifications-list">
          {notifications.map((n) => (
            <div
              key={n.id}
              className="notification-card"
              onClick={() => setModalData({ title: n.title, content: n.message })}
            >
              <h4>{n.title}</h4>
              <p>{n.message}</p>
              <span>{n.time}</span>
            </div>
          ))}
        </div>
      )}

      {/* ---------------- ANNOUNCEMENTS TAB ---------------- */}
      {activeTab === "announcement" && (
        <div className="announcement-section">

          {/* Publish New Announcement */}
          <div className="create-announcement">
            <h3>Create Announcement</h3>

            <input
              type="text"
              placeholder="Announcement Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />

            <textarea
              placeholder="Write announcement content..."
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
            />

            <button onClick={publishAnnouncement}>
              <FaPlus /> Publish
            </button>
          </div>

          <h3 className="prev-title">Previous Announcements</h3>

          <div className="announcement-list">
            {announcements.map((a) => (
              <div
                key={a.id}
                className="announcement-card"
                onClick={() => setModalData({ title: a.title, content: a.content })}
              >
                <h4>{a.title}</h4>
                <p>{a.content.slice(0, 60)}...</p>
                <span>{a.date}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MODAL */}
      {modalData && (
        <div className="modal-overlay" onClick={() => setModalData(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>{modalData.title}</h3>
            <p>{modalData.content}</p>
            <button onClick={() => setModalData(null)}>Close</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default NotificationAnnouncement;
