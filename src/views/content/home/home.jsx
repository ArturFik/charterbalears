import React from "react";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import "./styles.scss";

export const Home = () => {
  return (
    <div className="home">
      {/* Hero Slider Section */}
      <section className="home__hero">
        <HeroSlider />
      </section>

      {/* About Yacht Section */}
      <section className="home__about">
        <div className="content-container">
          <div className="home__about-content">
            <div className="home__about-text">
              <h2>Discover the EDENROC Yacht</h2>
              <p className="home__about-lead">
                A 16-meter masterpiece of maritime engineering and luxury design
              </p>
              <p>
                The EDENROC yacht represents the pinnacle of nautical
                sophistication. With three meticulously appointed cabins
                accommodating up to seven guests, two elegant washrooms, and a
                galley featuring bespoke Italian craftsmanship, every detail has
                been curated for the discerning traveler.
              </p>
              <p>
                Experience unparalleled comfort on the expansive sun deck or
                retreat to the refined interiors designed for both intimate
                gatherings and grand entertainment.
              </p>
              <a href="/yacht" className="btn-primary">
                Explore EDENROC
              </a>
            </div>
            <div className="home__about-image">
              <img src="/3.png" alt="EDENROC Yacht Interior" />
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="home__activities">
        <div className="content-container">
          <div className="home__activities-header">
            <h2>Exclusive Experiences</h2>
            <p>Curated activities for the sophisticated traveler</p>
          </div>
          <div className="home__activities-grid">
            <div className="activity-card">
              <div className="activity-card__icon">→</div>
              <h3>Underwater Exploration</h3>
              <p>
                Discover the depths with our premium sea scooters, offering
                graceful underwater movement at speeds up to 6 km/h.
                Professional guidance included.
              </p>
            </div>
            <div className="activity-card">
              <div className="activity-card__icon">→</div>
              <h3>Sport Fishing</h3>
              <p>
                Engage in premium sport fishing with state-of-the-art equipment
                and expert guidance. Exceptional catches in the most prestigious
                fishing grounds.
              </p>
            </div>
            <div className="activity-card">
              <div className="activity-card__icon">→</div>
              <h3>Private Events</h3>
              <p>
                Host exclusive gatherings with bespoke catering and premium
                service. The ultimate venue for sophisticated entertainment on
                the water.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="home__contact">
        <div className="content-container">
          <div className="home__contact-content">
            <h2>Begin Your Luxury Journey</h2>
            <p>Contact our charter specialists to reserve your experience</p>
            <div className="home__contact-actions">
              <a href="tel:+34697726944" className="btn-primary">
                +34 (697) 726-944
              </a>
              <a
                href="mailto:charterbalears@gmail.com"
                className="btn-secondary"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
