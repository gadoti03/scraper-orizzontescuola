import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Importa il file CSS per il Carousel

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 3000); // Cambia slide ogni 5 secondi

    return () => clearInterval(interval);
  }, [currentIndex, items.length, isHovered]);

  const prev = () => {
    const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const next = () => {
    const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleSelect = (selectedIndex) => {
    setCurrentIndex(selectedIndex);
  };

  return (
    <div 
      className="carousel" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="carousel-inner">
        {items.map((item, index) => (
          <div 
            key={index} 
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" onClick={prev}>
        &#10092;
      </button>
      <button className="carousel-control-next" onClick={next}>
        &#10093;
      </button>
      <div className="carousel-indicators">
        {items.map((_, index) => (
          <span
            key={index}
            className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleSelect(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
