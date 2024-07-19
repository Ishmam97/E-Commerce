import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Filter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: "",
    priceRange: [0, 500],
  });

  const handleCategoryChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = {
      ...filters,
      [name]: value,
    };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handlePriceChange = (value) => {
    const updatedFilters = {
      ...filters,
      priceRange: value,
    };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="filter-panel">
      <h2>Filters</h2>
      <div className="filter-group">
        <label htmlFor="category">Category</label>
        <select name="category" id="category" onChange={handleCategoryChange}>
          <option value="">All</option>
          <option value="Basketball">Basketball</option>
          <option value="Casual">Casual</option>
          <option value="Formal">Formal</option>
          <option value="Running">Running</option>
          {/* Add more categories as needed */}
        </select>
      </div>
      <div className="filter-group">
        <label>Price Range</label>
        <Slider
          range
          min={0}
          max={500}
          defaultValue={[0, 500]}
          value={filters.priceRange}
          onChange={handlePriceChange}
          tipFormatter={(value) => `$${value}`}
        />
        <div className="price-range-display">
          ${filters.priceRange[0]} - ${filters.priceRange[1]}
        </div>
      </div>
    </div>
  );
};

export default Filter;
