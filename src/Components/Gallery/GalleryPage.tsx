import React, { useState } from "react";
import Image2 from "../../assets/NewsImage-2.jpg";
import Image3 from "../../assets/NewsImage-3.jpg";
import "./GalleryPage.css";

interface PhotoItem {
  id: number;
  category: string;
  title: string;
  image: string;
}

const photoData: PhotoItem[] = [
  { id: 1, category: "Events", title: "Innovation Bootcamp 2025", image: Image2 },
  { id: 2, category: "Campus Life", title: "New Digital Lab", image: Image2 },
  { id: 3, category: "Announcements", title: "Admission Open", image: Image3 },
  { id: 4, category: "Events", title: "Robotics Workshop", image: Image2 },
];

const categories = ["All", "Events", "Campus Life", "Announcements"];

const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const filteredPhotos = activeCategory === "All"
    ? photoData
    : photoData.filter((photo) => photo.category === activeCategory);

  const closeModal = () => setCurrentIndex(null);

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev! - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev! + 1) % filteredPhotos.length);
  };

  return (
    <div className="gallery-page-wrapper">
      <header className="gallery-header">
        <h1>Photo Gallery</h1>
        <p>Explore our events, campus life, and announcements through photos.</p>
      </header>

      <div className="gallery-categories">
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

      <div className="photo-grid">
        {filteredPhotos.map((photo, index) => (
          <div
            key={photo.id}
            className="photo-card"
            onClick={() => setCurrentIndex(index)}
          >
            <img src={photo.image} alt={photo.title} />
            <div className="photo-overlay"><p>{photo.title}</p></div>
          </div>
        ))}
      </div>

      {currentIndex !== null && (
        <div className="photo-modal" onClick={closeModal}>
          <div className="photo-modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>✖</span>

            <button className="nav-btn prev" onClick={prevPhoto}>◀</button>
            <button className="nav-btn next" onClick={nextPhoto}>▶</button>

            <img src={filteredPhotos[currentIndex].image} alt={filteredPhotos[currentIndex].title} />
            <h2>{filteredPhotos[currentIndex].title}</h2>
            <p>Category: {filteredPhotos[currentIndex].category}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;