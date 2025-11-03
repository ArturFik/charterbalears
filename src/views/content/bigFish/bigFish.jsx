import React from "react";
import "./styles.scss";

export const BigFish = () => {
  return (
    <div className="big-fish-page">
      <header className="big-fish-hero">
        <div className="content-container">
          <h1>Big Fish Mallorca - Catch Your Dream Golden Fish!</h1>
          <p>BIG GAME FISHING on a comfortable luxury yacht!</p>
        </div>
      </header>

      <main className="content-container">
        <section className="big-game-intro" aria-labelledby="biggame-heading">
          <div className="big-game-content">
            <div className="big-game-text">
              <h2 id="biggame-heading">What is BIG GAME Fishing?</h2>
              <p className="lead-text">
                This is the most mind-blowing fishing in the world! It's not
                pier fishing small coastal fry... This is the real hunt for big
                fish!
              </p>
              <p>
                Just imagine: a 100-200 kg tuna takes the bait! What a piece of
                good luck! Who will overcome? These are really inexpressible
                feelings and emotions! This is the brightest memory that will
                remain with you for a lifetime!
              </p>
              <p>
                The Balearic waters are the habitat of the bluefin tuna reaching
                400 kilograms, which awakens most incredible fantasies! And what
                about a swordfish 4.5 meters long?! It is a dream fish! This is
                what you call a real paradise for a fisherman and an extreme
                tourist!
              </p>
            </div>
            <div className="big-game-image">
              {/* Место для фото: Большой тунец или рыбаки с уловом, эмоциональное фото */}
              <img
                src="/placeholder-big-fish.jpg"
                alt="Big game fishing catch - large tuna in Mediterranean waters"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section
          className="advantages-section"
          aria-labelledby="advantages-heading"
        >
          <h2 id="advantages-heading">Why Choose Our Big Game Fishing?</h2>
          <div className="advantages-grid">
            <div className="advantage-card">
              <h3>Professional Team</h3>
              <p>
                Our team consists of professionals who are good at fishing and
                will definitely ensure your safety
              </p>
            </div>
            <div className="advantage-card">
              <h3>Comfortable Options</h3>
              <p>
                Should you grow tired of fishing, you can relax in comfortable
                cabins or enjoy time on the covered deck
              </p>
            </div>
            <div className="advantage-card">
              <h3>Personalized Service</h3>
              <p>
                We agree on the route and all your wishes in advance for the
                perfect fishing experience
              </p>
            </div>
            <div className="advantage-card">
              <h3>Premium Equipment</h3>
              <p>
                We provide the best fishing gear solutions for any type of sea
                fishing, suitable for both pros and amateurs
              </p>
            </div>
          </div>
        </section>

        <section
          className="fishing-packages"
          aria-labelledby="packages-heading"
        >
          <h2 id="packages-heading">Fishing Tour Packages</h2>
          <div className="packages-grid">
            <article className="package-card">
              <div className="package-header">
                <h3>Big Game</h3>
                <div className="package-price">1300 €</div>
              </div>
              <div className="package-details">
                <p>
                  <strong>Target:</strong> Giant tuna (100/200 kg)
                </p>
                <p>
                  <strong>Departure:</strong> 8:00
                </p>
                <p>
                  <strong>Return:</strong> 16:00
                </p>
              </div>
              <div className="package-highlight">
                Premium big game experience
              </div>
            </article>

            <article className="package-card">
              <div className="package-header">
                <h3>Trolling</h3>
                <div className="package-price">1300 €</div>
              </div>
              <div className="package-details">
                <p>
                  <strong>Target:</strong> Medium tuna (6/10 kg)
                </p>
                <p>
                  <strong>Departure:</strong> 8:00
                </p>
                <p>
                  <strong>Return:</strong> 16:00
                </p>
              </div>
              <div className="package-highlight">Classic trolling fishing</div>
            </article>

            <article className="package-card">
              <div className="package-header">
                <h3>Half-day</h3>
                <div className="package-price">750 €</div>
              </div>
              <div className="package-details">
                <p>
                  <strong>Target:</strong> Small fish (up to 5 kg)
                </p>
                <p>
                  <strong>Start:</strong> 10:00
                </p>
                <p>
                  <strong>Return:</strong> 14:00
                </p>
              </div>
              <div className="package-highlight">
                Flexible schedule available
              </div>
            </article>
          </div>
          <div className="discount-note">
            <p>
              <strong>Special Offer:</strong> 20% discount for multi-day tours
              or repeat customers!
            </p>
          </div>
        </section>

        <section className="booking-steps" aria-labelledby="booking-heading">
          <h2 id="booking-heading">How to Book Your Fishing Adventure</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <h3>Contact Us</h3>
              <p>
                Reach out by phone, message, or email with your preferred dates
                and fishing preferences
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">02</div>
              <h3>Discuss Details</h3>
              <p>
                We clarify your wishes and arrange the booking with a nominal
                confirmation payment
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">03</div>
              <h3>Weather Confirmation</h3>
              <p>
                Tour confirmed 48-72 hours before departure based on weather
                conditions and regulations
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">04</div>
              <h3>Final Payment & Departure</h3>
              <p>
                Complete payment and meet at the yacht for your big game fishing
                adventure
              </p>
            </div>
          </div>
        </section>

        <section className="fishing-cta">
          <div className="cta-content">
            <h2>Stop Jerking Threads! Join the «Big Game»!</h2>
            <p>
              Order a fishing tour from us and you are guaranteed to have a
              breathtaking epic fishing and unforgettable experience!
            </p>
            <div className="cta-actions">
              <a href="tel:+34697726944" className="btn-primary">
                Book Your Fishing Tour
              </a>
              <a
                href="mailto:charterbalears@gmail.com"
                className="btn-secondary"
              >
                Get More Information
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
