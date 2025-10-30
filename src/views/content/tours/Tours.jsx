import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import toursData from "../../../data/tours.json";
import "./styles.scss";

export const Tours = () => {
  const [tours, setTours] = useState([]);
  const [filteredTours, setFilteredTours] = useState([]);
  const [filters, setFilters] = useState({
    type: "all",
    season: "all",
    duration: "all",
    availability: "all",
  });

  useEffect(() => {
    setTours(toursData.tours);
    setFilteredTours(toursData.tours);
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters, tours]);

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
        filters.availability === "available" ? tour.available : !tour.available
      );
    }

    setFilteredTours(result);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      type: "all",
      season: "all",
      duration: "all",
      availability: "all",
    });
  };

  return (
    <div className="tours-page">
      <header className="tours-hero">
        <div className="content-container">
          <h1>Exclusive Sea Tours & Yacht Charter in Mallorca</h1>
          <p>
            Find your perfect luxury journey aboard the EDENROC yacht in
            Balearic Islands
          </p>
        </div>
      </header>

      <main className="content-container">
        {/* Filters */}
        <section className="tours-filters" aria-labelledby="filters-heading">
          <h2 id="filters-heading">Find Your Perfect Yacht Tour</h2>
          <div className="filters-grid">
            <div className="filter-group">
              <label htmlFor="tour-type">Tour Type</label>
              <select
                id="tour-type"
                value={filters.type}
                onChange={(e) => handleFilterChange("type", e.target.value)}
              >
                {toursData.filters.types.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="season">Season</label>
              <select
                id="season"
                value={filters.season}
                onChange={(e) => handleFilterChange("season", e.target.value)}
              >
                <option value="all">All Seasons</option>
                <option value="year-round">Year-Round</option>
                <option value="April-October">April-October</option>
                <option value="May-September">May-September</option>
                <option value="March-November">March-November</option>
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="duration">Duration</label>
              <select
                id="duration"
                value={filters.duration}
                onChange={(e) => handleFilterChange("duration", e.target.value)}
              >
                {toursData.filters.durations.map((duration) => (
                  <option key={duration} value={duration}>
                    {duration}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="availability">Availability</label>
              <select
                id="availability"
                value={filters.availability}
                onChange={(e) =>
                  handleFilterChange("availability", e.target.value)
                }
              >
                <option value="all">All Tours</option>
                <option value="available">Available Now</option>
                <option value="unavailable">Currently Unavailable</option>
              </select>
            </div>
          </div>

          <button className="clear-filters" onClick={clearFilters}>
            Clear All Filters
          </button>
        </section>

        {/* Tours List */}
        <section className="tours-grid" aria-label="Available yacht tours">
          {filteredTours.map((tour) => (
            <article key={tour.id} className="tour-card">
              <div className="tour-card__image">
                <img
                  src={tour.image}
                  alt={`${tour.title} - Luxury yacht tour in Mallorca`}
                  loading="lazy"
                />
                {!tour.available && (
                  <div
                    className="tour-card__unavailable"
                    aria-label="This tour is currently unavailable"
                  >
                    Unavailable
                  </div>
                )}
                <div className="tour-card__type">{tour.type}</div>
              </div>

              <div className="tour-card__content">
                <h3>{tour.title}</h3>
                <p className="tour-card__description">
                  {tour.shortDescription}
                </p>

                <div className="tour-card__details">
                  <div className="tour-card__detail">
                    <span className="detail-label">Duration:</span>
                    <span>{tour.duration}</span>
                  </div>
                  <div className="tour-card__detail">
                    <span className="detail-label">Capacity:</span>
                    <span>{tour.capacity}</span>
                  </div>
                  <div className="tour-card__detail">
                    <span className="detail-label">Season:</span>
                    <span>{tour.season}</span>
                  </div>
                </div>

                <div className="tour-card__highlights">
                  {tour.highlights.map((highlight, index) => (
                    <span key={index} className="highlight-tag">
                      #{highlight}
                    </span>
                  ))}
                </div>

                <div className="tour-card__price">
                  <div className="price-main">{tour.price}</div>
                  <div className="price-per-person">
                    {tour.pricePerPerson} per person
                  </div>
                </div>

                <div className="tour-card__actions">
                  <Link
                    to={`/tours/${tour.id}`}
                    className="btn-primary"
                    aria-label={`View details for ${tour.title}`}
                  >
                    View Tour Details
                  </Link>
                  {tour.available && (
                    <a
                      href="tel:+34697726944"
                      className="btn-secondary"
                      aria-label="Book this yacht tour by phone"
                    >
                      Book Now
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>

        {filteredTours.length === 0 && (
          <div className="no-tours" role="status">
            <h3>No Yacht Tours Found</h3>
            <p>
              Try adjusting your filter criteria to find available luxury tours
            </p>
          </div>
        )}
      </main>
    </div>
  );
};
