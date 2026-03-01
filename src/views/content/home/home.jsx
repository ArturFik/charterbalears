import React from "react";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import "./styles.scss";
import { useI18n } from "../../../i18n/I18nProvider";
import Seo from "../../components/seo/Seo";
import { getWebpSource, getMimeType } from "../../../utils/image";
export const Home = () => {
  const { t } = useI18n();
  const about = t("home.about") || {};
  const activities = t("home.activities") || {};
  const activityCards = activities.cards || [];
  const contact = t("home.contact") || {};

  const handleCopyEmail = async () => {
    const email = "charterbalears@gmail.com";

    try {
      await navigator.clipboard.writeText(email);
      alert("Email copy!");
    } catch (err) {
      console.error("Error email: ", err);
      copyToClipboardFallback(email);
    }
  };

  const copyToClipboardFallback = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      alert("Email copy!");
    } catch (err) {
      console.error("Fallback: error email: ", err);
      alert("Error copy email" + text);
    }
    document.body.removeChild(textArea);
  };
  return (
    <div className="home">
      <Seo
        title={about.title}
        description={about.lead}
        keywords="luxury yacht charter Mallorca, Azimut 50 EDENROC, Balearic Islands yacht rental"
        url="/"
      />
      <section className="home__hero">
        <HeroSlider />
      </section>

      <section className="home__about" aria-labelledby="yacht-heading">
        <div className="content-container">
          <div className="home__about-content">
            <div className="home__about-text">
              <h1 id="yacht-heading">{about.title}</h1>
              {about.lead ? (
                <p className="home__about-lead">{about.lead}</p>
              ) : null}
              {about.paragraphs?.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              {about.ctaLabel ? (
                <a
                  href={about.ctaLink}
                  className="btn-primary"
                  aria-label={about.ctaAria}
                >
                  {about.ctaLabel}
                </a>
              ) : null}
            </div>
            <div className="home__about-image">
              <picture>
                {getWebpSource("/3.png") ? (
                  <source srcSet={getWebpSource("/3.png")} type="image/webp" />
                ) : null}
                <source srcSet="/3.png" type={getMimeType("/3.png")} />
                <img
                  src="/3.png"
                  alt={about.imageAlt || "Luxury yacht EDENROC interior"}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      <section
        className="home__activities"
        aria-labelledby="activities-heading"
      >
        <div className="content-container">
          <div className="home__activities-header">
            <h2 id="activities-heading">{activities.heading}</h2>
            {activities.description ? <p>{activities.description}</p> : null}
          </div>
          <div className="home__activities-grid">
            {activityCards.map((card, index) => (
              <article key={card.title || index} className="activity-card">
                <div className="activity-card__icon" aria-hidden="true">
                  →
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home__contact" aria-labelledby="contact-heading">
        <div className="content-container">
          <div className="home__contact-content">
            <h2 id="contact-heading">{contact.heading}</h2>
            {contact.description ? <p>{contact.description}</p> : null}
            <div className="home__contact-actions">
              {contact.primary ? (
                <a
                  href={contact.primary.href}
                  className="btn-primary"
                  aria-label={contact.primary.ariaLabel}
                >
                  {contact.primary.label}
                </a>
              ) : null}
              {contact.secondary ? (
                <button
                  onClick={handleCopyEmail}
                  className="btn-secondary"
                  aria-label={
                    contact.secondary.ariaLabel || "Скопировать email адрес"
                  }
                  type="button"
                >
                  {contact.secondary.label}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
