import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

export const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="not-found__container">
        <div className="not-found__content">
          <div className="not-found__number">
            <span>4</span>
            <div className="not-found__yacht">0</div>
            <span>4</span>
          </div>

          <div className="not-found__text">
            <h1>Page Not Found</h1>
            <p>
              The page you're looking for seems to have sailed away. Perhaps
              it's exploring distant shores or enjoying the Mediterranean
              sunset.
            </p>
          </div>

          <div className="not-found__actions">
            <Link to="/" className="btn-primary">
              Return to Home
            </Link>
            <Link to="/tours" className="btn-secondary">
              Explore Our Tours
            </Link>
          </div>

          <div className="not-found__contact">
            <p>Can't find what you're looking for?</p>
            <div className="contact-links">
              <a href="tel:+34697726944" className="contact-link">
                +34 (697) 726-944
              </a>
              <a
                href="mailto:charterbalears@gmail.com"
                className="contact-link"
              >
                charterbalears@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
