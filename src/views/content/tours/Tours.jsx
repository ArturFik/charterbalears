import React, { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import { useI18n } from "../../../i18n/I18nProvider";
import Seo from "../../components/seo/Seo";
const availabilityFilterOptions = ["all", "available", "unavailable"];

export const Tours = () => {
  const { t } = useI18n();
  const translations = t("tours") || {};
  const tours = translations.list || [];
  const filtersDefinition = translations.filters || {};
  const labels = translations.labels || {};

  const initialFilters = useMemo(
    () => ({
      type: filtersDefinition.type?.options?.[0]?.value ?? "all",
      season: filtersDefinition.season?.options?.[0]?.value ?? "all",
      duration: filtersDefinition.duration?.options?.[0]?.value ?? "all",
      availability: availabilityFilterOptions[0],
    }),
    [filtersDefinition]
  );

  const [filters, setFilters] = useState(initialFilters);
  const [filteredTours, setFilteredTours] = useState(tours);

  useEffect(() => {
    setFilters(initialFilters);
  }, [initialFilters]);

  useEffect(() => {
    const applyFilters = () => {
      let result = [...tours];

      if (filters.type !== "all") {
        result = result.filter((tour) => tour.type === filters.type);
      }

      if (filters.season !== "all") {
        result = result.filter((tour) => tour.season === filters.season);
      }

      if (filters.duration !== "all") {
        result = result.filter((tour) => tour.duration === filters.duration);
      }

      if (filters.availability !== "all") {
        result = result.filter((tour) =>
          filters.availability === "available"
            ? tour.available
            : !tour.available
        );
      }

      setFilteredTours(result);
    };

    applyFilters();
  }, [filters, tours]);

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const clearFilters = () => {
    setFilters(initialFilters);
  };

  return (
    <div className="tours-page">
      <Seo
        title={translations.hero?.title}
        description={translations.hero?.subtitle}
        keywords="yacht tours Mallorca, boat excursions Balearic Islands, luxury sea trips"
        url="/tours"
      />
      <header className="tours-hero">
        <div className="content-container">
          <h1>{translations.hero?.title}</h1>
          <p>{translations.hero?.subtitle}</p>
        </div>
      </header>

      <main className="content-container">
        {/* Filters */}
        <section className="tours-filters" aria-labelledby="filters-heading">
          <h2 id="filters-heading">{filtersDefinition.heading}</h2>
          <div className="filters-grid">
            <div className="filter-group">
              <label htmlFor="tour-type">{filtersDefinition.type?.label}</label>
              <select
                id="tour-type"
                value={filters.type}
                onChange={(e) => handleFilterChange("type", e.target.value)}
              >
                {filtersDefinition.type?.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="season">{filtersDefinition.season?.label}</label>
              <select
                id="season"
                value={filters.season}
                onChange={(e) => handleFilterChange("season", e.target.value)}
              >
                {filtersDefinition.season?.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="duration">
                {filtersDefinition.duration?.label}
              </label>
              <select
                id="duration"
                value={filters.duration}
                onChange={(e) => handleFilterChange("duration", e.target.value)}
              >
                {filtersDefinition.duration?.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="availability">
                {filtersDefinition.availability?.label}
              </label>
              <select
                id="availability"
                value={filters.availability}
                onChange={(e) =>
                  handleFilterChange("availability", e.target.value)
                }
              >
                {filtersDefinition.availability?.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button className="clear-filters" onClick={clearFilters}>
            {labels.clear}
          </button>
        </section>

        {/* Tours List */}
        <section className="tours-grid" aria-label="Available yacht tours">
          {filteredTours.map((tour) => (
            <article key={tour.id} className="tour-card">
              <div className="tour-card__image">
                <img
                  src={tour.image}
                  alt={tour.imageAlt || `${tour.title} - Luxury yacht tour`}
                  loading="lazy"
                />
                {!tour.available && (
                  <div
                    className="tour-card__unavailable"
                    aria-label={labels.unavailable}
                  >
                    {labels.unavailable}
                  </div>
                )}
                <div className="tour-card__type">{tour.typeLabel}</div>
              </div>

              <div className="tour-card__content">
                <h3>{tour.title}</h3>
                <p className="tour-card__description">
                  {tour.shortDescription}
                </p>

                <div className="tour-card__details">
                  <div className="tour-card__detail">
                    <span className="detail-label">
                      {translations.detailLabels?.duration ?? "Duration:"}
                    </span>
                    <span>{tour.durationLabel || tour.duration}</span>
                  </div>
                  <div className="tour-card__detail">
                    <span className="detail-label">
                      {translations.detailLabels?.capacity ?? "Capacity:"}
                    </span>
                    <span>{tour.capacityLabel || tour.capacity}</span>
                  </div>
                  <div className="tour-card__detail">
                    <span className="detail-label">
                      {translations.detailLabels?.season ?? "Season:"}
                    </span>
                    <span>{tour.seasonLabel || tour.season}</span>
                  </div>
                </div>

                <div className="tour-card__highlights">
                  {tour.highlights?.map((highlight, index) => (
                    <span key={index} className="highlight-tag">
                      #{highlight}
                    </span>
                  ))}
                </div>

                <div className="tour-card__price">
                  <div className="price-main">{tour.price}</div>
                  <div className="price-per-person">
                    {tour.pricePerPerson} {labels.perPersonSuffix}
                  </div>
                </div>

                <div className="tour-card__actions">
                  <Link
                    to={`/tours/${tour.id}`}
                    className="btn-primary"
                    aria-label={`${labels.viewDetails} ${tour.title}`}
                  >
                    {labels.viewDetails}
                  </Link>
                  {tour.available && (
                    <a
                      href={tour.bookingPhoneHref || t("common.phoneHref")}
                      className="btn-secondary"
                      aria-label={labels.bookNow}
                    >
                      {labels.bookNow}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>

        {filteredTours.length === 0 && (
          <div className="no-tours" role="status">
            <h3>{labels.noResultsTitle}</h3>
            <p>{labels.noResultsDescription}</p>
          </div>
        )}
      </main>
    </div>
  );
};
