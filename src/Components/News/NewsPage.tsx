import React, { useState } from "react";
import "./NewsPage.css";
import Image1 from "../../assets/NewsImage-1.jpeg";
import Image2 from "../../assets/NewsImage-2.jpg";
import Image3 from "../../assets/NewsImage-3.jpg";

interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  description: string;
  fullText: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "CIC Innovation Bootcamp 2025 Begins",
    category: "Innovation",
    date: "Jan 15, 2025",
    image: Image2,
    description:
      "CIC kicks off its annual Innovation Bootcamp, training over 200 young innovators...",
    fullText:
      "CIC kicks off its annual Innovation Bootcamp for 2025, welcoming over 200 young innovators across Enugu State. Students will be trained in Software Engineering, AI, Robotics, Entrepreneurship and Civic Leadership. The program will run for 6 weeks with mentorship from local and international tech leaders."
  },
  {
    id: 2,
    title: "New Digital Skills Centre Commissioned",
    category: "Campus Development",
    date: "Feb 5, 2025",
    image: Image3,
    description:
      "The new digital lab is now open for students and creators...",
    fullText:
      "A state-of-the-art digital lab has been commissioned to support student training in Engineering, AI, Data Science, and Robotics. The facility will serve CIC students and external innovators across Enugu, providing digital skills, hardware tools, and startup incubation support."
  },
  {
    id: 3,
    title: "CIC Partners with Enugu Tech Leaders",
    category: "Community",
    date: "Mar 2, 2025",
    image: Image1,
    description:
      "CIC partners with industry leaders to empower youth in technology...",
    fullText:
      "CIC is collaborating with top tech founders and innovation hubs across Enugu to scale tech adoption and youth training programs. The partnership will enable internship pipelines, hackathons, mentorship, and startup support programs."
  },
  {
    id: 4,
    title: "2025 Admission into Innovation Program is Open",
    category: "Announcements",
    date: "Jan 25, 2025",
    image: Image1,
    description:
      "Admission for the 2025 CIC innovation program has officially opened...",
    fullText:
      "Admission into CIC's 2025 Innovation and Entrepreneurship Program is now open. Students interested in tech careers in Web Development, AI, Robotics, and Business Innovation are encouraged to apply. Application closes March 15, 2025."
  },
];

const categories = [
  "All",
  "Innovation",
  "Campus Development",
  "Community",
  "Announcements",
  "Opportunities",
];

const NewsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const filteredNews =
    activeCategory === "All"
      ? newsData
      : newsData.filter((item) => item.category === activeCategory);

  return (
    <div className="page-wrapper">
      <div className={`news-page-content ${selectedNews ? "blur-bg" : ""}`}>
        <header className="news-header">
          <h1>News & Announcements</h1>
          <p>
            Stay updated with the latest happenings at CIC Enugu — innovation,
            community impact, and academic excellence.
          </p>
        </header>

        <div className="categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={activeCategory === cat ? "active" : ""}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="news-content">
          <div className="news-list">
            {filteredNews.map((news) => (
              <div className="news-card" key={news.id}>
                <img src={news.image} alt={news.title} />
                <div className="tag">{news.category}</div>
                <div className="date">{news.date}</div>
                <h3>{news.title}</h3>
                <p>{news.description}</p>
                <button
                  className="read-more"
                  onClick={() => setSelectedNews(news)}
                >
                  Read More
                </button>
              </div>
            ))}
          </div>

          <aside className="news-sidebar">
            <div className="filter-group">
              <h3>Upcoming Events</h3>
              <ul>
                <li>Tech Incubator Demo Day — Feb 20</li>
                <li>Student Entrepreneurs Pitch — Mar 10</li>
                <li>Robotics Workshop — Apr 6</li>
              </ul>
            </div>

            <div className="filter-group">
              <h3>Announcements</h3>
              <ul>
                <li>Admission into 2025 innovation program is open</li>
                <li>New mentorship slots available</li>
                <li>Volunteer applications now accepted</li>
              </ul>
            </div>

            <div className="news-subscribe">
              <h3>Stay Updated</h3>
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </aside>
        </div>
      </div>

      {/* ✅ POPUP MODAL */}
      {selectedNews && (
  <div
    className="news-modal"
    onClick={() => setSelectedNews(null)} // closes when clicking outside
  >
    <div
      className="news-modal-content"
      onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
    >
      <span
        className="close-btn"
        onClick={() => setSelectedNews(null)}
      >
        ✖
      </span>
      <div className="modal-scroll">
        <img src={selectedNews.image} alt="" />
        <h2>{selectedNews.title}</h2>
        <p className="modal-date">{selectedNews.date}</p>
        <p className="modal-text">{selectedNews.fullText}</p>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default NewsPage;
