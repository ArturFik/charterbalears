import React, { useState, useEffect } from "react";
import "./styles.scss";
import { useI18n } from "../../../i18n/I18nProvider";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useI18n();
  const slides = t("heroSlider.slides") || [];
  const slidesCount = slides.length;
  const phoneHref = t("common.phoneHref");
  const phoneLabel = t("common.phoneDisplay");
  const phoneCta = t("heroSlider.phoneCta");

  useEffect(() => {
    if (!slidesCount) {
      return undefined;
    }

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesCount);
    }, 5000);

    return () => clearInterval(interval);
  }, [slidesCount]);

  const nextSlide = () => {
    if (!slidesCount) {
      return;
    }
    setCurrentSlide((prev) => (prev + 1) % slidesCount);
  };

  const prevSlide = () => {
    if (!slidesCount) {
      return;
    }
    setCurrentSlide((prev) => (prev - 1 + slidesCount) % slidesCount);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleSliderClick = (e) => {
    if (window.innerWidth <= 768) {
      const clickX = e.clientX;
      const screenWidth = window.innerWidth;
      const screenMiddle = screenWidth / 2;

      if (clickX > screenMiddle) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  return (
    <div className="hero-slider" onClick={handleSliderClick}>
      {slides.map((slide, index) => (
        <div
          key={slide.id ?? index}
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
                  {slide.buttonLabel || slide.buttonText}
                </a>
                {phoneHref && phoneLabel && (
                  <a
                    href={phoneHref}
                    className="btn-secondary"
                    aria-label={phoneCta}
                  >
                    {phoneLabel}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows - скрываются на мобильных */}
      <div
        className="hero-slider__nav hero-slider__nav--prev"
        onClick={prevSlide}
      >
        ‹
      </div>
      <div
        className="hero-slider__nav hero-slider__nav--next"
        onClick={nextSlide}
      >
        ›
      </div>

      {/* Dots indicator */}
      <div className="hero-slider__dots">
        {slides.map((slide, index) => (
          <button
            key={slide.id ?? index}
            className={`hero-slider__dot ${
              index === currentSlide ? "hero-slider__dot--active" : ""
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
