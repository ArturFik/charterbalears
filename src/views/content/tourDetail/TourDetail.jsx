import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import toursData from "../../../data/tours.json";
import "./styles.scss";

export const TourDetail = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);

  useEffect(() => {
    const foundTour = toursData.tours.find((t) => t.id === parseInt(id));
    setTour(foundTour);
  }, [id]);

  if (!tour) {
    return (
      <div className="tour-detail">
        <div className="content-container">
          <div className="not-found">
            <h2>Tour Not Found</h2>
            <Link to="/tours" className="btn-primary">
              Back to Tours
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="tour-detail">
      <div className="tour-detail__hero">
        <div className="content-container">
          <nav className="breadcrumb">
            <Link to="/tours">Tours</Link>
            <span>/</span>
            <span>{tour.title}</span>
          </nav>
        </div>
      </div>

      <div className="content-container">
        <div className="tour-detail__content">
          <div className="tour-detail__gallery">
            <div className="main-image">
              <img src={tour.image} alt={tour.title} />
            </div>
          </div>

          <div className="tour-detail__info">
            <div className="tour-header">
              <div className="tour-meta">
                <span className="tour-type">{tour.type}</span>
                <span
                  className={`tour-availability ${
                    !tour.available ? "unavailable" : ""
                  }`}
                >
                  {tour.available ? "Available" : "Unavailable"}
                </span>
              </div>
              <h1>{tour.title}</h1>
              <p className="tour-description">{tour.shortDescription}</p>
            </div>

            <div className="tour-pricing">
              <div className="price-section">
                <div className="price-main">{tour.price}</div>
                <div className="price-details">
                  <span>{tour.pricePerPerson} per person</span>
                  <span>•</span>
                  <span>{tour.capacity}</span>
                </div>
              </div>
            </div>

            <div className="tour-features">
              <div className="feature">
                <span className="feature-label">Duration</span>
                <span className="feature-value">{tour.duration}</span>
              </div>
              <div className="feature">
                <span className="feature-label">Season</span>
                <span className="feature-value">{tour.season}</span>
              </div>
              <div className="feature">
                <span className="feature-label">Departure</span>
                <span className="feature-value">{tour.departure}</span>
              </div>
            </div>

            <div className="tour-highlights">
              <h3>Tour Highlights</h3>
              <div className="highlights-grid">
                {tour.highlights.map((highlight, index) => (
                  <div key={index} className="highlight-item">
                    <span className="highlight-icon">→</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tour-actions">
              {tour.available ? (
                <div className="available-actions">
                  <a href="tel:+34697726944" className="btn-primary btn-large">
                    Book Now
                  </a>
                  <a href="https://wa.me/34697726944" className="btn-secondary">
                    Message on WhatsApp
                  </a>
                </div>
              ) : (
                <div className="unavailable-notice">
                  <p>This tour is temporarily unavailable</p>
                  <Link to="/tours" className="btn-primary">
                    View Other Tours
                  </Link>
                </div>
              )}
            </div>

            <div className="tour-contact">
              <h3>Have Questions?</h3>
              <p>Our team will be happy to help you choose the perfect tour</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};
