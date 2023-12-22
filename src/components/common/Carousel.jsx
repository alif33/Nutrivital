"use client";
import React, { useState } from "react";
import "./Carousel.css"; // Create this file for your custom styles

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <button onClick={prevSlide} className="carousel-button left">
        &lt;
      </button>
      <div className="carousel-items">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="carousel-button right">
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
