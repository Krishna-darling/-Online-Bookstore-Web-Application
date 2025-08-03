// src/SearchBar.js
import React from "react";
import "./SearchBar.css";

function SearchBar({ search, setSearch, category, setCategory }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="🔍 Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All Categories</option>
        <option value="Fiction">Fiction</option>
        <option value="Drama">Drama</option>
        <option value="Sci-Fi">Sci-Fi</option>
        {/* Add more categories as needed */}
      </select>
    </div>
  );
}

export default SearchBar;
