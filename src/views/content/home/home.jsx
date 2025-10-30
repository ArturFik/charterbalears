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
      <section className="home__about" aria-labelledby="yacht-heading">
        <div className="content-container">
          <div className="home__about-content">
            <div className="home__about-text">
              <h1 id="yacht-heading">
                Luxury Yacht Charter EDENROC in Mallorca
              </h1>
              <p className="home__about-lead">
                16-meter luxury yacht EDENROC - premium maritime engineering and
                exclusive design in Balearic Islands
              </p>
              <p>
                The EDENROC luxury yacht represents the pinnacle of nautical
                sophistication in Mallorca. With three meticulously appointed
                cabins accommodating up to seven guests, two elegant washrooms,
                and a galley featuring bespoke Italian craftsmanship, every
                detail has been curated for the discerning traveler.
              </p>
              <p>
                Experience unparalleled comfort on the expansive sun deck or
                retreat to the refined interiors designed for both intimate
                gatherings and grand entertainment. Perfect for yacht charter in
                Balearic Islands.
              </p>
              <a
                href="/yacht"
                className="btn-primary"
                aria-label="Explore EDENROC luxury yacht details"
              >
                Explore EDENROC Yacht
              </a>
            </div>
            <div className="home__about-image">
              <img
                src="/3.png"
                alt="Luxury yacht EDENROC interior with Italian design and premium amenities"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section
        className="home__activities"
        aria-labelledby="activities-heading"
      >
        <div className="content-container">
          <div className="home__activities-header">
            <h2 id="activities-heading">
              Exclusive Yacht Experiences in Mallorca
            </h2>
            <p>
              Premium curated activities for sophisticated travelers in Balearic
              Islands
            </p>
          </div>
          <div className="home__activities-grid">
            <article className="activity-card">
              <div className="activity-card__icon" aria-hidden="true">
                →
              </div>
              <h3>Underwater Exploration & Snorkeling</h3>
              <p>
                Discover Mediterranean depths with premium sea scooters,
                offering graceful underwater movement at speeds up to 6 km/h.
                Professional guidance included for safe snorkeling adventures.
              </p>
            </article>
            <article className="activity-card">
              <div className="activity-card__icon" aria-hidden="true">
                →
              </div>
              <h3>Premium Sport Fishing</h3>
              <p>
                Engage in exclusive sport fishing around Mallorca with
                state-of-the-art equipment and expert guidance. Exceptional
                catches in prestigious Mediterranean fishing grounds.
              </p>
            </article>
            <article className="activity-card">
              <div className="activity-card__icon" aria-hidden="true">
                →
              </div>
              <h3>Private Yacht Events</h3>
              <p>
                Host exclusive gatherings and corporate events with bespoke
                catering and premium service. The ultimate luxury venue for
                sophisticated entertainment on Mediterranean waters.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="home__contact" aria-labelledby="contact-heading">
        <div className="content-container">
          <div className="home__contact-content">
            <h2 id="contact-heading">
              Begin Your Luxury Yacht Journey in Mallorca
            </h2>
            <p>
              Contact our charter specialists to reserve your premium experience
              aboard EDENROC yacht
            </p>
            <div className="home__contact-actions">
              <a
                href="tel:+34697726944"
                className="btn-primary"
                aria-label="Call yacht charter phone number"
              >
                +34 (697) 726-944
              </a>
              <a
                href="mailto:charterbalears@gmail.com"
                className="btn-secondary"
                aria-label="Send email to yacht charter"
              >
                Contact Yacht Charter
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
