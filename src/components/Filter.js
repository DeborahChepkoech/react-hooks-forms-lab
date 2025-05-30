import React from "react";

function Filter({ searchText, onSearchChange, selectedCategory, onCategoryChange }) {
  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select
        name="filter"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
