import React, { useState } from "react";
import "./styles.scss";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <a href="/" className="header__logo-link">
            <span className="header__logo-text">CharterBalears</span>
          </a>
        </div>

        <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="/" className="header__nav-link">
                Home
              </a>
            </li>
            <li className="header__nav-item">
              <a href="/yacht" className="header__nav-link">
                The Yacht
              </a>
            </li>
            <li className="header__nav-item">
              <a href="/routes" className="header__nav-link">
                Routes
              </a>
            </li>
            <li className="header__nav-item">
              <a href="/services" className="header__nav-link">
                Services
              </a>
            </li>
            <li className="header__nav-item">
              <a href="/blog" className="header__nav-link">
                Blog
              </a>
            </li>
            <li className="header__nav-item">
              <a href="/faq" className="header__nav-link">
                FAQ
              </a>
            </li>
            <li className="header__nav-item">
              <a href="/contact" className="header__nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="header__actions">
          <button className="header__cta">
            <span className="header__cta-icon">⛵</span>
            Rent a Yacht
          </button>
          <button
            className={`header__hamburger ${
              isMenuOpen ? "header__hamburger--open" : ""
            }`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};
