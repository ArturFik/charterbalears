import React, { useState } from "react";
import "./styles.scss";

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "What is included in the yacht charter price?",
      answer:
        "Our charter price includes the yacht rental with full equipment, professional crew services, fuel for the planned route, insurance, and port fees. Additional services like catering, special activities, or extra fuel for extended routes are available at an additional cost.",
    },
    {
      question: "Do I need sailing experience to charter a yacht?",
      answer:
        "No sailing experience is required for our charters. Our professional crew handles all navigation and yacht operations. For bareboat charters, appropriate licenses and experience certificates are necessary.",
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "Cancellations made 30+ days before departure receive full refund. 15-29 days: 50% refund. Less than 15 days: no refund, but we offer rescheduling based on availability. Weather-related cancellations are fully refundable.",
    },
    {
      question: "How many people can the yacht accommodate?",
      answer:
        "Yacht EDENROC can comfortably accommodate up to 10 guests for daytime tours and up to 7 guests for overnight stays across 3 luxurious cabins. Each cabin features premium bedding and en-suite facilities.",
    },
    {
      question: "What should I bring for the fishing tour?",
      answer:
        "We provide all professional fishing equipment, safety gear, and licenses. Recommended personal items: sunscreen, sunglasses, comfortable non-slip shoes, light jacket, camera, and any personal medications. For big game fishing, we suggest motion sickness prevention if prone to seasickness.",
    },
    {
      question: "Are children allowed on board?",
      answer:
        "Yes, children are welcome! We provide life jackets for all ages and can adjust activities for family-friendly experiences. Children under 12 must be supervised by adults at all times. Safety briefing is mandatory for all passengers.",
    },
    {
      question: "What happens in case of bad weather?",
      answer:
        "We monitor weather conditions closely. Tours may be rescheduled or modified for safety. Full refund is provided for weather cancellations. Mediterranean weather is generally stable, but we prioritize guest safety above all.",
    },
    {
      question: "Is food and drinks included?",
      answer:
        "Basic refreshments (water, soft drinks) are included. Catering services are available at extra cost - from light snacks to gourmet meals prepared by our onboard chef. You're also welcome to bring your preferred beverages.",
    },
    {
      question: "Can we customize the tour route?",
      answer:
        "Absolutely! We specialize in personalized experiences. During booking, we discuss your preferences for swimming spots, fishing locations, scenic routes, and duration. Popular destinations include hidden coves, marine reserves, and coastal villages.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept bank transfers, credit cards (Visa, MasterCard), and cash (EUR). 30% deposit required to secure booking, balance due 14 days before charter. For last-minute bookings, full payment may be required.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <header className="faq-hero">
        <div className="content-container">
          <h1>Frequently Asked Questions</h1>
          <p>
            Everything you need to know about our luxury yacht charters in
            Mallorca
          </p>
        </div>
      </header>

      <main className="content-container">
        <section className="faq-content" aria-labelledby="faq-heading">
          <div className="faq-intro">
            <h2 id="faq-heading">
              Common Questions About Yacht EDENROC Charters
            </h2>
            <p>
              Find answers to the most frequently asked questions about our
              services, booking process, and what to expect during your luxury
              yacht experience in the Balearic Islands.
            </p>
          </div>

          <div className="faq-accordion">
            {faqItems.map((item, index) => (
              <div key={index} className="faq-item">
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
            <h2>Still Have Questions?</h2>
            <p>
              Our charter specialists are here to help you plan the perfect
              Mediterranean experience
            </p>
            <div className="cta-actions">
              <a href="tel:+34697726944" className="btn-primary">
                Call Us Now
              </a>
              <a
                href="mailto:charterbalears@gmail.com"
                className="btn-secondary"
              >
                Send Email
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
