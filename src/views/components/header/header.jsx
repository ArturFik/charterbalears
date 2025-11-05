import React, { useState } from "react";
import "./styles.scss";
import { useI18n } from "../../../i18n/I18nProvider";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language, setLanguage, languages } = useI18n();

  const navItems = [
    { href: "/main", label: t("header.nav.home") },
    { href: "/tours", label: t("header.nav.tours") },
    { href: "/yacht", label: t("header.nav.yacht") },
    { href: "/blog", label: t("header.nav.blog") },
    { href: "/faq", label: t("header.nav.faq") },
  ];

  const brandLabel = t("common.brand");
  const ctaLabel = t("header.actions.cta");
  const languageAria = t("header.language.ariaLabel");
  const navigationToggleLabel = t(
    "header.navigationToggle",
    "Toggle navigation"
  );

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <a href="/main" className="header__logo-link" onClick={closeMenu}>
            <span className="header__logo-text">{brandLabel}</span>
          </a>
        </div>

        <nav
          id="header-navigation"
          className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}
        >
          <ul className="header__nav-list">
            {navItems.map((item) => (
              <li key={item.href} className="header__nav-item">
                <a
                  href={item.href}
                  className="header__nav-link"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <div className="header__language">
            <label className="header__language-label" htmlFor="language-select">
              {languageAria}
            </label>
            <select
              id="language-select"
              className="header__language-select"
              value={language}
              onChange={handleLanguageChange}
              aria-label={languageAria}
            >
              {languages.map((option) => (
                <option key={option.code} value={option.code}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          {ctaLabel ? (
            <button className="header__cta">{ctaLabel}</button>
          ) : null}
          <button
            type="button"
            className={`header__hamburger ${
              isMenuOpen ? "header__hamburger--open" : ""
            }`}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="header-navigation"
            aria-label={navigationToggleLabel}
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
