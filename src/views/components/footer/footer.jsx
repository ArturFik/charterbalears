import React from "react";
import "./styles.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__section">
            <div className="footer__brand">
              <h3 className="footer__title">CharterBalears</h3>
              <div className="footer__yacht-name">Yacht EDENROC</div>
            </div>
            <p className="footer__description">
              For a unique maritime experience in the heart of Majorca, take
              advantage of Balears charter flights. By offering to rent a luxury
              yacht on the exquisite EDENROC vessel, we will satisfy all your
              needs. Regardless of whether you are Looking for a relaxing
              vacation, an unforgettable party, or an exciting Adventures on the
              water, our professional team is here to, your day is perfect.
            </p>
            <div className="footer__social">
              <div className="footer__view">
                <img
                  src="/logo/wts.png"
                  alt=""
                  className="footer__view--logo"
                />
                <a
                  href="https://wa.me/34697726944"
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </div>
              <div className="footer__view">
                <img
                  src="/logo/insta.png"
                  alt=""
                  className="footer__view--logo"
                />
                <a
                  href="#"
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="footer__section">
            <h4 className="footer__subtitle">Quick Links</h4>
            <ul className="footer__links">
              <li>
                <a href="/yacht">The Yacht EDENROC</a>
              </li>
              <li>
                <a href="/tours">Routes</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__subtitle">Contact Info</h4>
            <div className="footer__contact">
              <div className="footer__contact-item">
                <a href="tel:+34697726944">+34 (697) 726-944</a>
              </div>
              <div className="footer__contact-item">
                <a href="mailto:charterbalears@gmail.com">
                  charterbalears@gmail.com
                </a>
              </div>
              <div className="footer__contact-item">
                <div>
                  <div>MARINA PORT DE MALLORCA</div>
                  <div>Berth A44, Port de Mallorca</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__legal-info">
          <div className="footer__company">
            <strong>SWAE Group OÜ</strong> | NIF N0531322F Spain | Boat EDENROC
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__copyright">
            © 2024 CharterBalears. All rights reserved.
          </div>
          <div className="footer__legal">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
