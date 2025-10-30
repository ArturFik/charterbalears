import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import toursData from "../../../data/tours.json";
import "./styles.scss";

export const TourDetail = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [activeCove, setActiveCove] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const foundTour = toursData.tours.find((t) => t.id === parseInt(id));
    setTour(foundTour);
    if (foundTour?.coves) {
      setActiveCove(0);
      setActiveImageIndex(0);
    }
  }, [id]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const getCoveImages = (cove) => {
    if (cove.images && Array.isArray(cove.images) && cove.images.length > 0) {
      return cove.images;
    }
    if (cove.image) {
      return [cove.image];
    }
    return ["/placeholder.jpg"];
  };

  const nextSlide = () => {
    if (!tour?.coves) return;

    const currentCove = tour.coves[activeCove];
    const currentImages = getCoveImages(currentCove);

    if (activeImageIndex < currentImages.length - 1) {
      setActiveImageIndex(activeImageIndex + 1);
    } else if (activeCove < tour.coves.length - 1) {
      setActiveCove(activeCove + 1);
      setActiveImageIndex(0);
    } else {
      setActiveCove(0);
      setActiveImageIndex(0);
    }

    setImageLoaded(false);
  };

  const currentCove = tour?.coves?.[activeCove];
  const currentImages = currentCove ? getCoveImages(currentCove) : [];
  const totalCoves = tour?.coves?.length || 0;

  const totalSlides =
    totalCoves > 0
      ? tour.coves.reduce((total, cove, index) => {
          const images = getCoveImages(cove);
          return total + images.length;
        }, 0)
      : 0;

  const currentSlideIndex = tour?.coves
    ? tour.coves.slice(0, activeCove).reduce((total, cove) => {
        return total + getCoveImages(cove).length;
      }, 0) +
      activeImageIndex +
      1
    : 0;

  const progress = totalSlides > 0 ? currentSlideIndex / totalSlides : 0;

  const getButtonColor = () => {
    if (progress < 0.3) return "#1a1a1a";
    if (progress < 0.7) return "#2d5bff";
    return "#ff6b35";
  };

  if (!tour) {
    return (
      <div className="tour-detail">
        <div className="content-container">
          <div className="not-found">
            <h2>Yacht Tour Not Found</h2>
            <Link to="/tours" className="btn-primary">
              Back to Luxury Yacht Tours
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="tour-detail">
      <header className="tour-detail__hero">
        <div className="content-container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/tours">Luxury Yacht Tours</Link>
            <span aria-hidden="true">/</span>
            <span>{tour.title}</span>
          </nav>
        </div>
      </header>

      <main className="content-container">
        <div className="tour-detail__content">
          {/* Галерея бухт */}
          <section className="tour-detail__gallery" aria-label="Tour gallery">
            {currentCove ? (
              <div className="coves-gallery">
                <div className="gallery-main">
                  <figure className="main-image">
                    {currentImages.length > 0 && (
                      <img
                        src={currentImages[activeImageIndex]}
                        alt={`${
                          currentCove.name
                        } - Luxury yacht destination in Mallorca - Image ${
                          activeImageIndex + 1
                        }`}
                        onLoad={handleImageLoad}
                        className={imageLoaded ? "loaded" : ""}
                        loading={activeImageIndex === 0 ? "eager" : "lazy"}
                      />
                    )}

                    {!imageLoaded && (
                      <div className="image-loading">Loading...</div>
                    )}

                    <button
                      className="next-button"
                      onClick={nextSlide}
                      style={{ backgroundColor: getButtonColor() }}
                      aria-label="Next slide"
                    >
                      <span className="next-button-icon" aria-hidden="true">
                        ›
                      </span>
                      <span className="next-button-text">Next</span>
                    </button>

                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${progress * 100}%` }}
                      />
                    </div>

                    <div className="slide-counter">
                      {currentSlideIndex} / {totalSlides}
                    </div>
                  </figure>

                  <div className="cove-info">
                    <div className="cove-header">
                      <h2>{currentCove.name} - Premium Yacht Destination</h2>
                      <div className="cove-counter">
                        Photo {activeImageIndex + 1} of {currentImages.length}
                      </div>
                    </div>
                    <p className="cove-description">
                      {currentCove.description}
                    </p>
                    <div className="cove-highlights">
                      {currentCove.highlights?.map((highlight, index) => (
                        <span key={index} className="highlight-tag">
                          #{highlight}
                        </span>
                      ))}
                    </div>
                    <div className="visit-type">{currentCove.visitType}</div>
                  </div>
                </div>

                <div className="gallery-thumbnails">
                  {tour.coves.map((cove, index) => {
                    const coveImages = getCoveImages(cove);
                    return (
                      <button
                        key={cove.id}
                        className={`thumbnail ${
                          index === activeCove ? "active" : ""
                        }`}
                        onClick={() => {
                          setActiveCove(index);
                          setActiveImageIndex(0);
                          setImageLoaded(false);
                        }}
                        aria-label={`View ${cove.name} - ${coveImages.length} photos`}
                        aria-pressed={index === activeCove}
                      >
                        <img
                          src={coveImages[0]}
                          alt={`Thumbnail for ${cove.name}`}
                          loading="lazy"
                        />
                        <div className="thumbnail-overlay">
                          <span>{cove.name}</span>
                          <span className="thumbnail-count">
                            {coveImages.length} photos
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <figure className="main-image">
                <img
                  src={tour.image}
                  alt={`${tour.title} - Luxury yacht tour in Mallorca`}
                />
              </figure>
            )}
          </section>

          {/* Информация о туре */}
          <section
            className="tour-detail__info"
            aria-labelledby="tour-info-heading"
          >
            <div className="tour-header">
              <div className="tour-meta">
                <span className="tour-type">{tour.type}</span>
                <span
                  className={`tour-availability ${
                    !tour.available ? "unavailable" : ""
                  }`}
                >
                  {tour.available
                    ? "Available for Booking"
                    : "Currently Unavailable"}
                </span>
              </div>
              <h1 id="tour-info-heading">
                {tour.title} - Luxury Yacht Experience
              </h1>
              <p className="tour-description">{tour.shortDescription}</p>
            </div>

            <div className="tour-pricing">
              <div className="price-section">
                <div className="price-main">{tour.price}</div>
                <div className="price-details">
                  <span>{tour.pricePerPerson} per person</span>
                  <span aria-hidden="true">•</span>
                  <span>{tour.capacity}</span>
                </div>
              </div>
            </div>

            <div className="tour-features">
              <div className="feature">
                <span className="feature-label">Tour Duration</span>
                <span className="feature-value">{tour.duration}</span>
              </div>
              <div className="feature">
                <span className="feature-label">Best Season</span>
                <span className="feature-value">{tour.season}</span>
              </div>
              <div className="feature">
                <span className="feature-label">Departure Location</span>
                <span className="feature-value">{tour.departure}</span>
              </div>
            </div>

            <div className="tour-highlights">
              <h3>Premium Tour Highlights</h3>
              <div className="highlights-grid">
                {tour.highlights?.map((highlight, index) => (
                  <div key={index} className="highlight-item">
                    <span className="highlight-icon" aria-hidden="true">
                      →
                    </span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tour-actions">
              {tour.available ? (
                <div className="available-actions">
                  <a
                    href="tel:+34697726944"
                    className="btn-primary btn-large"
                    aria-label="Book this yacht tour by phone"
                  >
                    Book Luxury Yacht Tour
                  </a>
                  <a
                    href="https://wa.me/34697726944"
                    className="btn-secondary"
                    aria-label="Contact yacht charter on WhatsApp"
                  >
                    Message on WhatsApp
                  </a>
                </div>
              ) : (
                <div className="unavailable-notice">
                  <p>This luxury yacht tour is temporarily unavailable</p>
                  <Link to="/tours" className="btn-primary">
                    View Available Yacht Tours
                  </Link>
                </div>
              )}
            </div>

            <div className="tour-contact">
              <h3>Questions About This Yacht Tour?</h3>
              <p>
                Our luxury charter team will be happy to help you choose the
                perfect yacht experience in Mallorca
              </p>
              <div className="contact-methods">
                <a href="tel:+34697726944" className="contact-link">
                  📞 +34 (697) 726-944
                </a>
                <a
                  href="mailto:charterbalears@gmail.com"
                  className="contact-link"
                >
                  ✉️ charterbalears@gmail.com
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
