import React from "react";

const Filter = ({ onCategoryChange }) => {
  return (
    <select onChange={(e) => onCategoryChange(e.target.value)}>
      <option value="All">All</option>
      <option value="Dairy">Dairy</option>
      <option value="Fruits">Fruits</option>
      <option value="Vegetables">Vegetables</option>
    </select>
  );
};

export default Filter;
