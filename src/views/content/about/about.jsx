import React from "react";
import "./styles.scss";
import { useI18n } from "../../../i18n/I18nProvider";
import Seo from "../../components/seo/Seo";
export const AboutYacht = () => {
  const { t } = useI18n();
  const about = t("about") || {};
  const specs = about.specs || {};
  const features = about.features || {};
  const specItems = specs.items || [];
  const featureItems = features.items || [];

  return (
    <div className="about-yacht-page">
      <Seo
        title={about.hero?.title}
        description={about.hero?.subtitle}
        keywords="Azimut 50 specifications, EDENROC yacht features, luxury boat amenities"
        url="/yacht"
      />
      <header className="about-yacht-hero">
        <div className="content-container">
          <h1>{about.hero?.title}</h1>
          <p>{about.hero?.subtitle}</p>
        </div>
      </header>

      <main className="content-container">
        <section className="yacht-specs" aria-labelledby="specs-heading">
          <div className="yacht-specs-content">
            <div className="yacht-specs-text">
              <h2 id="specs-heading">{specs.title}</h2>
              <div className="specs-grid">
                {specItems.map((item) => (
                  <div key={item.label} className="spec-item">
                    <span className="spec-label">{item.label}</span>
                    <span className="spec-value">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="yacht-specs-image">
              <img
                src="/new 05/charter mallorca.jpg"
                alt="Luxury motor yacht Azimut 50 EDENROC exterior view"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="yacht-features" aria-labelledby="features-heading">
          <h2 id="features-heading">{features.title}</h2>
          <div className="features-grid">
            {featureItems.map((feature) => (
              <article key={feature.title} className="feature-card">
                <div className="feature-card__icon" aria-hidden="true">
                  →
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
