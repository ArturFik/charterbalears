import { useState, useEffect } from "react";
import "./styles.scss";
import { useI18n } from "../../../i18n/I18nProvider";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPromotionVisible, setIsPromotionVisible] = useState(true);
  const { t, language, setLanguage, languages } = useI18n();

  const navItems = [
    { href: "/main", label: t("header.nav.home") },
    { href: "/tours", label: t("header.nav.tours") },
    { href: "/day_charter", label: t("header.nav.day_charter") },
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
  const promotionText = t("header.promotion");
  const promotionLinkText = t("header.promotionLinkText");

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

  const handleClosePromotion = () => {
    setIsPromotionVisible(false);
    // Можно сохрать в localStorage, чтобы не показывать повторно
    localStorage.setItem("promotionClosed", "true");
  };

  useEffect(() => {
    const promotionClosed = localStorage.getItem("promotionClosed");
    if (promotionClosed === "true") {
      setIsPromotionVisible(false);
    }
  }, []);

  return (
    <header className="header">
      {/* Основной header */}
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
            <button className="header__cta">+34 (697) 726-944</button>
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
      <div className="header__promotion">
        <div className="header__promotion-container">
          <div className="header__promotion-content">
            <span className="header__promotion-text">{promotionText}</span>
            <a
              href="/tours"
              className="header__promotion-link"
              onClick={closeMenu}
            >
              {promotionLinkText}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
