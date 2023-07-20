import React from "react";
import { useState, useEffect, useContext } from "react";
import { SearchContext } from "../Context/searchContext";

function SearchForm() {
  const { setQuery } = useContext(SearchContext);
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="search for user"
      />
    </div>
  );
}

export default SearchForm;
