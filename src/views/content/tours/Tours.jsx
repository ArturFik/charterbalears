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
      <div className="tours-hero">
        <div className="content-container">
          <h1>Exclusive Sea Tours</h1>
          <p>Find your perfect journey aboard the EDENROC yacht</p>
        </div>
      </div>

      <div className="content-container">
        {/* Filters */}
        <div className="tours-filters">
          <h2>Find Your Tour</h2>
          <div className="filters-grid">
            <div className="filter-group">
              <label>Tour Type</label>
              <select
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
              <label>Season</label>
              <select
                value={filters.season}
                onChange={(e) => handleFilterChange("season", e.target.value)}
              >
                <option value="all">all</option>
                <option value="year-round">year-round</option>
                <option value="April-October">April-October</option>
                <option value="May-September">May-September</option>
                <option value="March-November">March-November</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Duration</label>
              <select
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
              <label>Availability</label>
              <select
                value={filters.availability}
                onChange={(e) =>
                  handleFilterChange("availability", e.target.value)
                }
              >
                <option value="all">all</option>
                <option value="available">available</option>
                <option value="unavailable">unavailable</option>
              </select>
            </div>
          </div>

          <button className="clear-filters" onClick={clearFilters}>
            Clear Filters
          </button>
        </div>

        {/* Tours List */}
        <div className="tours-grid">
          {filteredTours.map((tour) => (
            <div key={tour.id} className="tour-card">
              <div className="tour-card__image">
                <img src={tour.image} alt={tour.title} />
                {!tour.available && (
                  <div className="tour-card__unavailable">Unavailable</div>
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
                  <Link to={`/tours/${tour.id}`} className="btn-primary">
                    View Details
                  </Link>
                  {tour.available && (
                    <a href="tel:+34697726944" className="btn-secondary">
                      Book Now
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTours.length === 0 && (
          <div className="no-tours">
            <h3>No Tours Found</h3>
            <p>Try adjusting your filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};
