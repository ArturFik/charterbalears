import React, { useState, useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import "./styles.scss";
import { useI18n } from "../../../i18n/I18nProvider";
import Seo from "../../components/seo/Seo";
import { getWebpSource, getMimeType } from "../../../utils/image";

const DEFAULT_PLACEHOLDER = "/placeholder.jpg";

const getCoveImages = (cove) => {
  if (!cove) {
    return [DEFAULT_PLACEHOLDER];
  }
  if (Array.isArray(cove.images) && cove.images.length > 0) {
    return cove.images;
  }
  if (cove.image) {
    return [cove.image];
  }
  return [DEFAULT_PLACEHOLDER];
};

export const TourDetail = () => {
  const { id } = useParams();
  const numericId = Number.parseInt(id, 10);
  const { t } = useI18n();
  const copy = t("tourDetail") || {};
  const tours = t("tours.list") || [];
  const perPersonSuffix =
    copy.perPersonSuffix || t("tours.labels.perPersonSuffix", "per guest");

  const tour = useMemo(
    () => tours.find((item) => item.id === numericId),
    [tours, numericId]
  );

  const [activeCove, setActiveCove] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (tour?.coves) {
      setActiveCove(0);
      setActiveImageIndex(0);
    }
  }, [tour]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const currentCove = tour?.coves?.[activeCove];
  const currentImages = currentCove ? getCoveImages(currentCove) : [];
  const activeImageSrc = currentImages[activeImageIndex] ?? null;
  const activeImageWebp = getWebpSource(activeImageSrc);
  const activeImageMimeType = getMimeType(activeImageSrc);
  const activeImageAlt =
    currentCove && activeImageSrc
      ? `${currentCove.name} - ${copy.photoLabel || "Photo"} ${
          activeImageIndex + 1
        }`
      : null;
  const tourImageWebp = getWebpSource(tour?.image);
  const tourImageMimeType = getMimeType(tour?.image);

  const nextSlide = () => {
    if (!tour?.coves?.length) return;

    if (activeImageIndex < currentImages.length - 1) {
      setActiveImageIndex((prev) => prev + 1);
    } else if (activeCove < tour.coves.length - 1) {
      setActiveCove((prev) => prev + 1);
      setActiveImageIndex(0);
    } else {
      setActiveCove(0);
      setActiveImageIndex(0);
    }

    setImageLoaded(false);
  };

  const totalCoves = tour?.coves?.length || 0;

  const totalSlides =
    totalCoves > 0
      ? tour.coves.reduce((total, cove, index) => {
          const images = getCoveImages(cove);
          return total + images.length;
        }, 0)
      : 0;

  const currentSlideIndex = tour?.coves
    ? tour.coves.slice(0, activeCove).reduce((total, cove) => {
        return total + getCoveImages(cove).length;
      }, 0) +
      activeImageIndex +
      1
    : 0;

  const progress = totalSlides > 0 ? currentSlideIndex / totalSlides : 0;

  const getButtonColor = () => {
    if (progress < 0.3) return "#1a1a1a";
    if (progress < 0.7) return "#2d5bff";
    return "#ff6b35";
  };

  if (!tour) {
    return (
      <div className="tour-detail">
        {" "}
        <Seo title="Tour Not Found" />
        <div className="content-container">
          <div className="not-found">
            <h2>{copy.notFound?.title}</h2>
            <Link to="/tours" className="btn-primary">
              {copy.notFound?.cta}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="tour-detail">
      {" "}
      <Seo
        title={tour.title}
        description={tour.shortDescription}
        keywords={tour.highlights?.join(", ")}
        url={`/tours/${tour.id}`}
      />
      <header className="tour-detail__hero">
        <div className="content-container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/tours">{copy.breadcrumbRoot}</Link>
            <span aria-hidden="true">/</span>
            <span>{tour.title}</span>
          </nav>
        </div>
      </header>
      <main className="content-container">
        <div className="tour-detail__content">
          <section
            className="tour-detail__gallery"
            aria-label={copy.galleryAria || "Tour gallery"}
          >
            {currentCove ? (
              <div className="coves-gallery">
                <div className="gallery-main">
                  <figure className="main-image">
                    {currentImages.length > 0 && activeImageSrc ? (
                      <picture>
                        {activeImageWebp ? (
                          <source srcSet={activeImageWebp} type="image/webp" />
                        ) : null}
                        <source
                          srcSet={activeImageSrc}
                          type={activeImageMimeType}
                        />
                        <img
                          src={activeImageSrc}
                          alt={
                            activeImageAlt ??
                            `${currentCove.name} - ${
                              copy.photoLabel || "Photo"
                            }`
                          }
                          onLoad={handleImageLoad}
                          className={imageLoaded ? "loaded" : ""}
                          loading={activeImageIndex === 0 ? "eager" : "lazy"}
                          decoding="async"
                        />
                      </picture>
                    ) : null}

                    {!imageLoaded && (
                      <div className="image-loading">{copy.loading}</div>
                    )}

                    <button
                      className="next-button"
                      onClick={nextSlide}
                      style={{ backgroundColor: getButtonColor() }}
                      aria-label={copy.nextButtonAria}
                    >
                      <span className="next-button-icon" aria-hidden="true">
                        ›
                      </span>
                      <span className="next-button-text">
                        {copy.nextButton}
                      </span>
                    </button>

                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${progress * 100}%` }}
                      />
                    </div>

                    <div className="slide-counter">
                      {currentSlideIndex} / {totalSlides}
                    </div>
                  </figure>

                  <div className="cove-info">
                    <div className="cove-header">
                      <h2>{currentCove.name}</h2>
                      <div className="cove-counter">
                        {copy.photoLabel} {activeImageIndex + 1} {copy.photoOf}{" "}
                        {currentImages.length}
                      </div>
                    </div>
                    <p className="cove-description">
                      {currentCove.description}
                    </p>
                    <div className="cove-highlights">
                      {currentCove.highlights?.map((highlight, index) => (
                        <span key={index} className="highlight-tag">
                          #{highlight}
                        </span>
                      ))}
                    </div>
                    <div className="visit-type">{currentCove.visitType}</div>
                  </div>
                </div>

                <div className="gallery-thumbnails">
                  {tour.coves.map((cove, index) => {
                    const coveImages = getCoveImages(cove);
                    return (
                      <button
                        key={cove.id}
                        className={`thumbnail ${
                          index === activeCove ? "active" : ""
                        }`}
                        onClick={() => {
                          setActiveCove(index);
                          setActiveImageIndex(0);
                          setImageLoaded(false);
                        }}
                        aria-label={`View ${cove.name} - ${coveImages.length} photos`}
                        aria-pressed={index === activeCove}
                      >
                        <picture>
                          {getWebpSource(coveImages[0]) ? (
                            <source
                              srcSet={getWebpSource(coveImages[0])}
                              type="image/webp"
                            />
                          ) : null}
                          <source
                            srcSet={coveImages[0]}
                            type={getMimeType(coveImages[0])}
                          />
                          <img
                            src={coveImages[0]}
                            alt={`Thumbnail for ${cove.name}`}
                            loading="lazy"
                            decoding="async"
                          />
                        </picture>
                        <div className="thumbnail-overlay">
                          <span>{cove.name}</span>
                          <span className="thumbnail-count">
                            {coveImages.length} photos
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <figure className="main-image">
                {tour.image ? (
                  <picture>
                    <source
                      srcSet={getWebpSource(tour.image) ?? undefined}
                      type="image/webp"
                    />
                    <source
                      srcSet={tour.image}
                      type={getMimeType(tour.image)}
                    />
                    <img
                      src={tour.image}
                      alt={`${tour.title} - Luxury yacht tour in Mallorca`}
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                ) : null}
              </figure>
            )}
          </section>

          <section
            className="tour-detail__info"
            aria-labelledby="tour-info-heading"
          >
            <div className="tour-header">
              <div className="tour-meta">
                <span className="tour-type">{tour.typeLabel || tour.type}</span>
                <span
                  className={`tour-availability ${
                    !tour.available ? "unavailable" : ""
                  }`}
                >
                  {tour.available
                    ? copy.availability?.available
                    : copy.availability?.unavailable}
                </span>
              </div>
              <h1 id="tour-info-heading">{tour.title}</h1>
              <p className="tour-description">{tour.shortDescription}</p>
            </div>

            <div className="tour-pricing">
              <div className="price-section">
                <div className="price-main">{tour.price}</div>
                <div className="price-details">
                  <span>
                    {tour.pricePerPerson} {perPersonSuffix}
                  </span>
                  <span aria-hidden="true">•</span>
                  <span>{tour.capacityLabel || tour.capacity}</span>
                </div>
              </div>
            </div>

            <div className="tour-features">
              <div className="feature">
                <span className="feature-label">{copy.features?.duration}</span>
                <span className="feature-value">
                  {tour.durationLabel || tour.duration}
                </span>
              </div>
              <div className="feature">
                <span className="feature-label">{copy.features?.season}</span>
                <span className="feature-value">
                  {tour.seasonLabel || tour.season}
                </span>
              </div>
              <div className="feature">
                <span className="feature-label">
                  {copy.features?.departure}
                </span>
                <span className="feature-value">{tour.departure}</span>
              </div>
            </div>

            <div className="tour-highlights">
              <h3>{copy.highlightsTitle}</h3>
              <div className="highlights-grid">
                {tour.highlights?.map((highlight, index) => (
                  <div key={index} className="highlight-item">
                    <span className="highlight-icon" aria-hidden="true">
                      →
                    </span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tour-actions">
              {tour.available ? (
                <div className="available-actions">
                  <a
                    href={t("common.phoneHref")}
                    className="btn-primary btn-large"
                    aria-label={copy.actions?.bookByPhone}
                  >
                    {copy.actions?.bookByPhone}
                  </a>
                  <a
                    href={t("common.whatsappHref")}
                    className="btn-secondary"
                    aria-label={copy.actions?.whatsapp}
                  >
                    {copy.actions?.whatsapp}
                  </a>
                </div>
              ) : (
                <div className="unavailable-notice">
                  <p>{copy.actions?.unavailableNotice}</p>
                  <Link to="/tours" className="btn-primary">
                    {copy.actions?.viewAvailableTours}
                  </Link>
                </div>
              )}
            </div>

            <div className="tour-contact">
              <h3>{copy.contact?.title}</h3>
              <p>{copy.contact?.description}</p>
              <div className="contact-methods">
                <a href={t("common.phoneHref")} className="contact-link">
                  📞 {copy.contact?.phoneLabel}
                </a>
                <a href={t("common.emailHref")} className="contact-link">
                  ✉️ {copy.contact?.emailLabel}
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
