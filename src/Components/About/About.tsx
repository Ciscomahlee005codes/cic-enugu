import React from "react";
import { FaLightbulb, FaUsers, FaAward, FaHandshake } from "react-icons/fa";
import Bg1 from "../../assets/cic-bg-6.jpg"
import "./About.css";

const About: React.FC = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About CIC Enugu</h1>
          <p>
            CIC Enugu is a hub of innovation, education, and community
            development, dedicated to empowering individuals and organizations
            to reach their full potential. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni itaque maxime omnis consequuntur optio delectus distinctio numquam neque nobis? Eum unde consectetur alias, odio eos at autem exercitationem dolorem eligendi.
            Modi iusto aspernatur quibusdam quaerat veritatis, impedit illo sed beatae molestiae, molestias non nobis quas officiis incidunt natus deleniti ut eos asperiores corrupti atque ea enim quod voluptatem. Nam, totam!
            Porro quos nobis libero ratione velit. Tempore sint recusandae soluta reprehenderit incidunt dolor vero deserunt est, pariatur veniam dolorum labore quasi vitae quia molestiae libero dolorem quidem illo iste cumque!
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="about-intro">
        <div className="intro-text">
          <h2>Who We Are</h2>
          <p>
            CIC Enugu is committed to fostering a culture of excellence,
            innovation, and inclusivity. We believe in shaping the next
            generation of leaders, thinkers, and creators in Enugu and beyond.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium nulla, deserunt esse voluptatibus odit dicta quisquam iure voluptatum voluptas debitis vitae, sunt porro ipsa nisi ad est fuga quis atque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam repellendus ipsa pariatur adipisci officiis ad accusantium nobis provident, inventore aliquam consequatur quisquam aspernatur dolorum laboriosam fugiat eum quaerat quasi sapiente.
          </p>
        </div>
        <div className="intro-image">
          <img src={Bg1} alt="CIC Enugu" />
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission">
        <div className="vm-card">
          <h3>Our Vision</h3>
          <p>
            To be a leading hub for innovation, technology, and community
            development in Enugu and beyond.
          </p>
        </div>
        <div className="vm-card">
          <h3>Our Mission</h3>
          <p>
            To empower communities and individuals through innovative solutions,
            educational programs, and impactful initiatives.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <FaLightbulb className="value-icon" />
            <h4>Innovation</h4>
            <p>We embrace creativity and forward-thinking solutions.</p>
          </div>
          <div className="value-card">
            <FaUsers className="value-icon" />
            <h4>Community</h4>
            <p>We believe in supporting and uplifting our local communities.</p>
          </div>
          <div className="value-card">
            <FaAward className="value-icon" />
            <h4>Excellence</h4>
            <p>We strive for the highest quality in every initiative.</p>
          </div>
          <div className="value-card">
            <FaHandshake className="value-icon" />
            <h4>Integrity</h4>
            <p>We operate with honesty and transparency in all we do.</p>
          </div>
        </div>
      </section>

      {/* Achievements / Stats */}
      <section className="stats">
        <div className="stat-card">
          <h3>500+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat-card">
          <h3>2000+</h3>
          <p>Students Impacted</p>
        </div>
        <div className="stat-card">
          <h3>50+</h3>
          <p>Community Initiatives</p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Join CIC Enugu Today</h2>
        <p>Be part of a growing community of innovators and changemakers.</p>
        <button className="btn primary-btn">Get Involved</button>
      </section>
    </div>
  );
};

export default About;
