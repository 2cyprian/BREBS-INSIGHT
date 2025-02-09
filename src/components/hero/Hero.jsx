import React, { useState } from 'react';
import './hero.css';
import cardsData from './CardsData';


const HeroCards = () => {
  const [items] = useState(cardsData)
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="carousel-container">
      <div 
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div 
            key={index}
            className="carousel-card"
            style={{ 
              backgroundImage: `url(${item.image})`,
              backgroundColor: index % 2 === 0 ? 'var(--primary-color)' : 'var(--secondary-color)'
            }}
          >
            <div className="card-overlay"></div>
            <div className="card-content">
              <h2 className="card-title">{item.title}</h2>
              <p className="card-subtitle">{item.subtitle}</p>
              <button className="cta-button">
                {item.ctaText}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <button className="carousel-button prev" onClick={prevSlide}>&#10094;</button>
      <button className="carousel-button next" onClick={nextSlide}>&#10095;</button>
      
      <div className="dots-container">
        {items.map((_, index) => (
          <span 
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCards;