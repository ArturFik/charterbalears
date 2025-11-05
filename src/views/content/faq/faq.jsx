import React, { useState } from "react";
import "./styles.scss";
import { useI18n } from "../../../i18n/I18nProvider";

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { t } = useI18n();
  const faqCopy = t("faq") || {};
  const faqItems = faqCopy.items || [];

  const toggleAccordion = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="faq-page">
      <header className="faq-hero">
        <div className="content-container">
          <h1>{faqCopy.hero?.title}</h1>
          <p>{faqCopy.hero?.subtitle}</p>
        </div>
      </header>

      <main className="content-container">
        <section className="faq-content" aria-labelledby="faq-heading">
          <div className="faq-intro">
            <h2 id="faq-heading">{faqCopy.intro?.title}</h2>
            <p>{faqCopy.intro?.description}</p>
          </div>

          <div className="faq-accordion">
            {faqItems.map((item, index) => (
              <div key={item.question} className="faq-item">
                <button
                  className={`faq-question ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="question-text">{item.question}</span>
                  <span className="accordion-icon" aria-hidden="true">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`faq-answer ${
                    activeIndex === index ? "active" : ""
                  }`}
                  role="region"
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="faq-contact-cta">
          <div className="cta-content">
            <h2>{faqCopy.contact?.title}</h2>
            <p>{faqCopy.contact?.description}</p>
            <div className="cta-actions">
              <a href={t("common.phoneHref")} className="btn-primary">
                {faqCopy.contact?.phoneCta}
              </a>
              <a href={t("common.emailHref")} className="btn-secondary">
                {faqCopy.contact?.emailCta}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
