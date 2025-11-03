import React from "react";
import "./styles.scss";

export const AboutYacht = () => {
  return (
    <div className="about-yacht-page">
      <header className="about-yacht-hero">
        <div className="content-container">
          <h1>Motor Yacht EDENROC - Azimut 50</h1>
          <p>
            16-meter luxury flybridge yacht for premium experiences in Balearic
            Islands
          </p>
        </div>
      </header>

      <main className="content-container">
        <section className="yacht-specs" aria-labelledby="specs-heading">
          <div className="yacht-specs-content">
            <div className="yacht-specs-text">
              <h2 id="specs-heading">Technical Specifications</h2>
              <div className="specs-grid">
                <div className="spec-item">
                  <span className="spec-label">Model</span>
                  <span className="spec-value">Azimut 50</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Length</span>
                  <span className="spec-value">15.54 m</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Width</span>
                  <span className="spec-value">4.55 m</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Hull Material</span>
                  <span className="spec-value">Fiberglass</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Engines</span>
                  <span className="spec-value">2</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Cruising Speed</span>
                  <span className="spec-value">26 knots</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Maximum Speed</span>
                  <span className="spec-value">32 knots</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Fuel Capacity</span>
                  <span className="spec-value">2200 L</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Fresh Water Capacity</span>
                  <span className="spec-value">590 L</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Passenger Capacity</span>
                  <span className="spec-value">10 people</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Cabins</span>
                  <span className="spec-value">3</span>
                </div>
              </div>
            </div>
            <div className="yacht-specs-image">
              {/* Место для фото: Экстерьер яхты Azimut 50, желательно сбоку чтобы показать размеры */}
              <img
                src="/new 05/charter mallorca.jpg"
                alt="Luxury motor yacht Azimut 50 EDENROC exterior view"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="yacht-features" aria-labelledby="features-heading">
          <h2 id="features-heading">Premium Features & Amenities</h2>
          <div className="features-grid">
            <article className="feature-card">
              <div className="feature-card__icon" aria-hidden="true">
                →
              </div>
              <h3>Spacious Flybridge</h3>
              <p>
                Expansive upper deck with comfortable seating, perfect for
                sunbathing and enjoying panoramic Mediterranean views
              </p>
            </article>
            <article className="feature-card">
              <div className="feature-card__icon" aria-hidden="true">
                →
              </div>
              <h3>Luxury Cabins</h3>
              <p>
                Three elegantly appointed cabins with premium bedding and
                climate control for ultimate comfort during your journey
              </p>
            </article>
            <article className="feature-card">
              <div className="feature-card__icon" aria-hidden="true">
                →
              </div>
              <h3>Modern Galley</h3>
              <p>
                Fully equipped kitchen with premium appliances for preparing
                gourmet meals with your fresh catch
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
};
