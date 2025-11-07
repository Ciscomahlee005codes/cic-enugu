import React from "react";
import { FaLaptopCode, FaUsers, FaChalkboardTeacher, FaGlobeAfrica, FaLightbulb, FaHandshake } from "react-icons/fa";
import "./Offer.css";

const offers = [
  {
    icon: <FaLaptopCode />,
    title: "Tech Training & Bootcamps",
    desc: "Hands-on programs in software development, digital skills and emerging technologies.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Workshops & Seminars",
    desc: "Industry-led sessions to empower youth with knowledge and practical exposure.",
  },
  {
    icon: <FaUsers />,
    title: "Community Leadership Programs",
    desc: "Building youth leadership, teamwork, and volunteer-driven community growth.",
  },
  {
    icon: <FaHandshake />,
    title: "Partnerships & Collaboration",
    desc: "We connect with institutions, NGOs, and innovation hubs to achieve impact.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation & Startup Support",
    desc: "Incubation, mentoring and support for entrepreneurs and innovators.",
  },
  {
    icon: <FaGlobeAfrica />,
    title: "Digital Transformation Projects",
    desc: "Empowering organizations and communities with modern technology.",
  },
];

const Offer: React.FC = () => {
  return (
    <div className="offer-container">
      {/* Hero Section */}
      <header className="offer-hero">
        <h1>What We Offer</h1>
        <p>
          At CIC Enugu, we provide world-class learning and innovation programs designed 
          to empower youth, drive digital transformation, and build a thriving future-ready community.
        </p>
      </header>

      {/* Card Section */}
      <section className="offer-grid">
        {offers.map((item, i) => (
          <div className="offer-card" key={i}>
            <div className="offer-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Offer;
