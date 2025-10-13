import React, { useState, useEffect } from "react";
import slidesData from "../../../data/slides.json";
import "./styles.scss";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { slides } = slidesData;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${
            index === currentSlide ? "hero-slide--active" : ""
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-slide__overlay"></div>
          <div className="content__container">
            <div className="hero-slide__content">
              <h1 className="hero-slide__title">{slide.title}</h1>
              <h2 className="hero-slide__subtitle">{slide.subtitle}</h2>
              <p className="hero-slide__description">{slide.description}</p>

              <div className="hero-slide__details">
                <div className="hero-slide__detail">
                  <span className="hero-slide__price">{slide.price}</span>
                </div>
                <div className="hero-slide__detail">
                  <span className="hero-slide__duration">{slide.duration}</span>
                </div>
                <div className="hero-slide__detail">
                  <span className="hero-slide__capacity">{slide.capacity}</span>
                </div>
              </div>

              <div className="hero-slide__actions">
                <a href={slide.buttonLink} className="btn-primary">
                  {slide.buttonText}
                </a>
                <a href="tel:+34697726944" className="btn-secondary">
                  📞 +34 (697) 726-944
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="content__container">
        {/* Navigation arrows */}
        <button
          className="hero-slider__nav hero-slider__nav--prev"
          onClick={prevSlide}
        >
          ‹
        </button>
        <button
          className="hero-slider__nav hero-slider__nav--next"
          onClick={nextSlide}
        >
          ›
        </button>

        {/* Dots indicator */}
        <div className="hero-slider__dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-slider__dot ${
                index === currentSlide ? "hero-slider__dot--active" : ""
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
