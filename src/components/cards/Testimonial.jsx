import React, { useState } from "react";
import "./Testimonial.css";

const testimonials = [
  {
    text: "For our brand, their creativity, professionalism, and attention to detail exceeded our expectations. Highly recommended!",
    name: "Tim Cook",
    role: "CEO, Apple",
    rating: 5
  },
  {
    text: "Working with this team has been an absolute pleasure. Their expertise in design and branding is top-notch!",
    name: "Elon Musk",
    role: "CEO, Tesla & SpaceX",
    rating: 4
  },
  {
    text: "The level of professionalism and creativity is unmatched. They delivered beyond our expectations.",
    name: "Sundar Pichai",
    role: "CEO, Google",
    rating: 5
  }
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial">
        <p>"{testimonials[currentIndex].text}"</p>
        <div className="author">
          <div>
            <h4>{testimonials[currentIndex].name}</h4>
            <p>{testimonials[currentIndex].role}</p>
            <p className="rating">{renderStars(testimonials[currentIndex].rating)}</p>
          </div>
        </div>
      </div>

      <div className="navigation">
        <button className="nav-button prev" onClick={prevTestimonial}>←</button>
        <div className="dots">
          {testimonials.map((_, index) => (
            <span key={index} className={`dot ${index === currentIndex ? "active" : ""}`}></span>
          ))}
        </div>
        <button className="nav-button next" onClick={nextTestimonial}>→</button>
      </div>
    </div>
  );
};

export default Testimonial;
