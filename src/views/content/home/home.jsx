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
              <h2>Explore the Majesty of the EDENROC Yacht</h2>
              <p>
                The EDENROC yacht is not just any vessel; spanning an impressive
                16 meters, it presents an amalgamation of luxury and
                functionality. With three plush cabins accommodating up to seven
                guests, two fully equipped washrooms, and a galley adorned with
                high-end Italian furnishings, every corner of the EDENROC echoes
                sophistication.
              </p>
              <p>
                This yacht is designed to cater to both relaxation and
                entertainment, allowing guests to soak up the sun on the
                spacious deck or retreat into the cozy interiors.
              </p>
              <a href="/yacht" className="btn-primary">
                Discover EDENROC
              </a>
            </div>
            <div className="home__about-image">
              <img
                src="/images/yacht-interior.jpg"
                alt="EDENROC Yacht Interior"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="home__activities">
        <div className="content-container">
          <h2>Very Fun Activities on the Water</h2>
          <div className="home__activities-grid">
            <div className="activity-card">
              <div className="activity-card__icon">🏄‍♂️</div>
              <h3>Sea Scooter</h3>
              <p>
                Immerse yourself in the exciting world of deep underwater
                exploration with sea scooter! This amazing underwater scooter
                provides incredibly smooth movement underwater reaching speeds
                up to 6 km/h.
              </p>
            </div>
            <div className="activity-card">
              <div className="activity-card__icon">🎣</div>
              <h3>Fishing</h3>
              <p>
                Professional gear, a huge catch, and your best friends with whom
                you can share a storm of emotions! Perfect for fishing
                enthusiasts.
              </p>
            </div>
            <div className="activity-card">
              <div className="activity-card__icon">🎉</div>
              <h3>Boat Party</h3>
              <p>
                Hire the boat with a group of friends with your favorite drinks
                and food, hot dancing and an endless fun. The perfect party
                venue!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="home__contact">
        <div className="content-container">
          <div className="home__contact-content">
            <h2>Ready for Your Luxury Yacht Experience?</h2>
            <p>Contact us now to book your unforgettable journey</p>
            <div className="home__contact-actions">
              <a href="tel:+34697726944" className="btn-primary">
                📞 Call +34 (697) 726-944
              </a>
              <a
                href="mailto:charterbalears@gmail.com"
                className="btn-secondary"
              >
                ✉️ Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
