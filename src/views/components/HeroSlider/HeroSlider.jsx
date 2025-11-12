import React, { useState, useEffect, useCallback } from "react";
import "./styles.scss";
import { useI18n } from "../../../i18n/I18nProvider";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { t } = useI18n();
  const slides = t("heroSlider.slides") || [];
  const slidesCount = slides.length;
  const phoneHref = t("common.phoneHref");
  const phoneLabel = t("common.phoneDisplay");
  const phoneCta = t("heroSlider.phoneCta");

  const nextSlide = useCallback(() => {
    if (!slidesCount) return;
    setCurrentSlide((prev) => (prev + 1) % slidesCount);
  }, [slidesCount]);

  const prevSlide = useCallback(() => {
    if (!slidesCount) return;
    setCurrentSlide((prev) => (prev - 1 + slidesCount) % slidesCount);
  }, [slidesCount]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    if (!slidesCount || !isAutoPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [slidesCount, isAutoPlaying, nextSlide]);

  const handleSliderInteraction = useCallback(() => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  const handleSliderClick = useCallback(
    (e) => {
      if (window.innerWidth <= 768) {
        handleSliderInteraction();
        const clickX = e.clientX;
        const screenWidth = window.innerWidth;
        const screenMiddle = screenWidth / 2;

        if (clickX > screenMiddle) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    },
    [handleSliderInteraction, nextSlide, prevSlide]
  );

  const handleKeyDown = useCallback(
    (e) => {
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          handleSliderInteraction();
          prevSlide();
          break;
        case "ArrowRight":
          e.preventDefault();
          handleSliderInteraction();
          nextSlide();
          break;
        case "Home":
          e.preventDefault();
          handleSliderInteraction();
          goToSlide(0);
          break;
        case "End":
          e.preventDefault();
          handleSliderInteraction();
          goToSlide(slidesCount - 1);
          break;
        default:
          break;
      }
    },
    [handleSliderInteraction, prevSlide, nextSlide, goToSlide, slidesCount]
  );

  useEffect(() => {
    const slider = document.querySelector(".hero-slider");
    if (slider) {
      slider.focus();
    }
  }, []);

  if (!slidesCount) {
    return (
      <div className="hero-slider" role="region" aria-label="Image carousel">
        <div className="hero-slide hero-slide--active">
          <div className="content__container">
            <div className="hero-slide__content">
              <h1 className="hero-slide__title">Charter Balears</h1>
              <p className="hero-slide__description">
                Luxury yacht experiences in Mallorca
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section
      className="hero-slider"
      onClick={handleSliderClick}
      onKeyDown={handleKeyDown}
      role="region"
      aria-label="Featured yacht tours carousel"
      aria-roledescription="carousel"
      aria-live="polite"
      tabIndex={0}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id ?? index}
          className={`hero-slide ${
            index === currentSlide ? "hero-slide--active" : ""
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${slidesCount}`}
          aria-hidden={index !== currentSlide}
        >
          <div className="hero-slide__overlay" aria-hidden="true"></div>
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
                <a
                  href={slide.buttonLink}
                  className="btn-primary"
                  aria-label={`Book ${slide.title} tour`}
                >
                  {slide.buttonLabel || slide.buttonText}
                </a>
                {phoneHref && phoneLabel && (
                  <a
                    href={phoneHref}
                    className="btn-secondary-white"
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

      {/* Navigation arrows */}
      <button
        className="hero-slider__nav hero-slider__nav--prev"
        onClick={(e) => {
          e.stopPropagation();
          handleSliderInteraction();
          prevSlide();
        }}
        aria-label="Previous slide"
        aria-controls="hero-slider-content"
      >
        ‹<span className="sr-only"></span>
      </button>

      <button
        className="hero-slider__nav hero-slider__nav--next"
        onClick={(e) => {
          e.stopPropagation();
          handleSliderInteraction();
          nextSlide();
        }}
        aria-label="Next slide"
        aria-controls="hero-slider-content"
      >
        ›<span className="sr-only"></span>
      </button>

      {/* Dots indicator */}
      <div
        className="hero-slider__dots"
        role="tablist"
        aria-label="Slide navigation"
      >
        {slides.map((slide, index) => (
          <button
            key={slide.id ?? index}
            className={`hero-slider__dot ${
              index === currentSlide ? "hero-slider__dot--active" : ""
            }`}
            onClick={(e) => {
              e.stopPropagation();
              handleSliderInteraction();
              goToSlide(index);
            }}
            role="tab"
            aria-label={`Go to slide ${index + 1}`}
            aria-selected={index === currentSlide}
            aria-controls={`slide-${index}`}
          >
            <span className="sr-only"></span>
          </button>
        ))}
      </div>

      {/* Screen reader status */}
      <div className="sr-only" aria-live="polite" aria-atomic="true"></div>
    </section>
  );
};

export default HeroSlider;
