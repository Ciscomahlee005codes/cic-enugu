import React, { useState, useEffect } from "react";
import Bg1 from "../../assets/cic-bg-3.jpg"
import Bg2 from "../../assets/cic-bg-4.jpg"
import Bg3 from "../../assets/cic-bg-5.jpg"
import "./Hero.css";

interface Slide {
  title: string;
  subtitle: string;
  bg: string;
}

const slides: Slide[] = [
  {
    title: "Welcome to CIC Enugu",
    subtitle: "Empowering innovation and community growth in Enugu.",
    bg: Bg1,
  },
  {
    title: "Connecting Communities",
    subtitle: "Join us in building a brighter future for everyone.",
    bg: Bg2,
  },
  {
    title: "Innovate. Impact. Inspire.",
    subtitle: "Together we make a difference in technology and society.",
    bg: Bg3,
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade out
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setFade(true); // fade in new slide
      }, 500); // match fade-out duration
    }, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, []);

  const { title, subtitle, bg } = slides[currentSlide];

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="hero-overlay">
        <div className={`hero-content ${fade ? "fade-in-slide" : "fade-out"}`}>
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          <div className="hero-buttons">
            <button className="btn primary-btn">Get Started</button>
            <button className="btn secondary-btn">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
