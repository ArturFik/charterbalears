import React from "react";
import "./styles.scss";
import { useI18n } from "../../../i18n/I18nProvider";
import Seo from "../../components/seo/Seo";
import { getWebpSource, getMimeType } from "../../../utils/image";

export const AboutYacht = () => {
  const { t } = useI18n();
  const about = t("about") || {};
  const specs = about.specs || {};
  const features = about.features || {};
  const specItems = specs.items || [];
  const featureItems = features.items || [];
  const contentBlocks = about.contentBlocks || [];

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
        {/* Чередующиеся блоки контента */}
        {contentBlocks.map((block, index) => (
          <section
            key={index}
            className={`content-block ${
              block.type === "text-first" ? "text-first" : "image-first"
            }`}
            aria-labelledby={`block-heading-${index}`}
          >
            <div className="content-block-inner">
              {block.type === "text-first" ? (
                <>
                  <div className="content-text">
                    <h3 id={`block-heading-${index}`}>{block.title}</h3>
                    <p>{block.description}</p>
                  </div>
                  <div className="content-image">
                    <picture>
                      {getWebpSource(block.image) ? (
                        <source
                          srcSet={getWebpSource(block.image)}
                          type="image/webp"
                        />
                      ) : null}
                      <source
                        srcSet={block.image}
                        type={getMimeType(block.image)}
                      />
                      <img
                        src={block.image}
                        alt={block.imageAlt}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                </>
              ) : (
                <>
                  <div className="content-image">
                    <picture>
                      {getWebpSource(block.image) ? (
                        <source
                          srcSet={getWebpSource(block.image)}
                          type="image/webp"
                        />
                      ) : null}
                      <source
                        srcSet={block.image}
                        type={getMimeType(block.image)}
                      />
                      <img
                        src={block.image}
                        alt={block.imageAlt}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="content-text">
                    <h3 id={`block-heading-${index}`}>{block.title}</h3>
                    <p>{block.description}</p>
                  </div>
                </>
              )}
            </div>
          </section>
        ))}
        {/* Блок с техническими характеристиками */}
        <section className="yacht-specs-main" aria-labelledby="specs-heading">
          <h2 id="specs-heading">{specs.title}</h2>
          <div className="specs-highlight-grid">
            {specItems.map((item) => (
              <div key={item.label} className="spec-highlight-item">
                <div className="spec-highlight-value">{item.value}</div>
                <div className="spec-highlight-label">{item.label}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
