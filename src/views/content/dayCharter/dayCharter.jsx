import React from "react";
import "./styles.scss";
import Seo from "../../components/seo/Seo";
import { useI18n } from "../../../i18n/I18nProvider";
import { getMimeType, getWebpSource } from "../../../utils/image";

export const DayTour = () => {
  const { t } = useI18n();

  const handleCopyEmail = async () => {
    const email = t("common.emailDisplay");
    try {
      await navigator.clipboard.writeText(email);
      alert(t("day_tour.cta.emailCopied"));
    } catch (err) {
      console.error("Error copying email: ", err);
    }
  };

  const galleryImages = t("day_tour.gallery.images");

  return (
    <div className="day-tour">
      <Seo
        title={`${t("day_tour.hero.title")} | ${t("common.brand")}`}
        description={t("day_tour.cta.description")}
        keywords="day tour Mallorca, yacht charter 8 hours, Balearic Islands day trip, luxury yacht tour"
        url="/day-tour"
      />

      {/* Hero Section */}
      <section
        className="day-tour__hero"
        aria-labelledby="daytour-heading"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url('/gallery/4.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="content-container">
          <div className="day-tour__hero-content">
            <h1 id="daytour-heading">{t("day_tour.hero.title")}</h1>
            <p className="day-tour__hero-subtitle">
              {t("day_tour.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="day-tour__intro" aria-labelledby="intro-heading">
        <div className="content-container">
          <div className="day-tour__intro-content">
            <div className="day-tour__intro-text">
              <h2 id="intro-heading">{t("day_tour.intro.title")}</h2>

              <div className="day-tour__activities">
                <article className="activity-card">
                  <div className="activity-card__icon" aria-hidden="true">
                    →
                  </div>
                  <h3>{t("day_tour.intro.activities.party.title")}</h3>
                  <p>{t("day_tour.intro.activities.party.description")}</p>
                </article>

                <article className="activity-card">
                  <div className="activity-card__icon" aria-hidden="true">
                    →
                  </div>
                  <h3>{t("day_tour.intro.activities.family.title")}</h3>
                  <p>{t("day_tour.intro.activities.family.description")}</p>
                </article>

                <article className="activity-card">
                  <div className="activity-card__icon" aria-hidden="true">
                    →
                  </div>
                  <h3>{t("day_tour.intro.activities.fishing.title")}</h3>
                  <p>{t("day_tour.intro.activities.fishing.description")}</p>
                </article>
              </div>

              <div className="day-tour__note">
                <p>{t("day_tour.intro.note")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="day-tour__pricing" aria-labelledby="pricing-heading">
        <div className="content-container">
          <h2 id="pricing-heading">{t("day_tour.pricing.title")}</h2>
          <p className="day-tour__pricing-subtitle">
            {t("day_tour.pricing.subtitle")}
          </p>

          <div className="day-tour__pricing-tables">
            {/* Charter Pricing */}
            <div className="pricing-table">
              <h3>{t("day_tour.pricing.charter.title")}</h3>
              <table>
                <thead>
                  <tr>
                    {t("day_tour.pricing.charter.table.headers", [], {
                      returnObjects: true,
                    }).map((header, index) => (
                      <th key={index}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t("day_tour.pricing.charter.table.rows", [], {
                    returnObjects: true,
                  }).map((row, index) => (
                    <tr key={index}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="day-tour__gallery" aria-labelledby="gallery-heading">
        <div className="content-container">
          <h2 id="gallery-heading">{t("day_tour.gallery.title")}</h2>
          <div className="day-tour__gallery-grid">
            {galleryImages.map((image, index) => (
              <div className="gallery-item" key={index}>
                <picture>
                  {getWebpSource(image.src) && (
                    <source
                      srcSet={getWebpSource(image.src)}
                      type="image/webp"
                    />
                  )}
                  <source srcSet={image.src} type={getMimeType(image.src)} />
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="day-tour__cta" aria-labelledby="cta-heading">
        <div className="content-container">
          <div className="day-tour__cta-content">
            <h2 id="cta-heading">{t("day_tour.cta.title")}</h2>
            <p>{t("day_tour.cta.description")}</p>
            <div className="day-tour__cta-actions">
              <a
                href="/contact"
                className="btn-primary"
                aria-label={`${t("day_tour.cta.buttons.contact")} - ${t(
                  "common.brand"
                )}`}
              >
                {t("day_tour.cta.buttons.contact")}
              </a>
              <button
                onClick={handleCopyEmail}
                className="btn-secondary"
                aria-label={t("day_tour.cta.buttons.copyEmail")}
                type="button"
              >
                {t("day_tour.cta.buttons.copyEmail")}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
