import React from "react";

const GalleryPage = () => {
  const galleryImages = [
    {
      id: 1,
      src: "/src/media/ChaanaShaak.jpg",
      alt: "Chaana Shaak",
      size: "large",
    },
    {
      id: 2,
      src: "/src/media/ChickenMakhani.jpg",
      alt: "Chicken Makhani",
      size: "medium",
    },
    {
      id: 3,
      src: "/src/media/GobiMakhani.jpg",
      alt: "Gobi Makhani",
      size: "small",
    },
    {
      id: 4,
      src: "/src/media/SalmonKorma.jpg",
      alt: "Salmon Korma",
      size: "medium",
    },
    { id: 5, color: "#555", alt: "Butter Chicken", size: "large" },
    { id: 6, color: "#666", alt: "Paneer Tikka", size: "medium" },
    { id: 7, color: "#444", alt: "Biryani Special", size: "large" },
    { id: 8, color: "#777", alt: "Dal Makhani", size: "small" },
    { id: 9, color: "#888", alt: "Naan Bread", size: "medium" },
    { id: 10, color: "#999", alt: "Samosa Platter", size: "small" },
    { id: 11, color: "#555", alt: "Tandoori Roti", size: "medium" },
    { id: 12, color: "#666", alt: "Raita", size: "small" },
  ];

  return (
    <div className='galleryPage'>
      <h1>Our Food Gallery</h1>
      <div className='galleryGrid'>
        {galleryImages.map((img) => (
          <div
            key={img.id}
            className={`galleryItem ${img.size}`}
          >
            {img.src ? (
              <img
                src={img.src}
                alt={img.alt}
              />
            ) : (
              <div
                className='placeholderImage'
                style={{ backgroundColor: img.color }}
              />
            )}
            <div className='overlay'>
              <h3>{img.alt}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
