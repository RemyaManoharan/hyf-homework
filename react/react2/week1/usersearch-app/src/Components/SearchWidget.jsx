import React from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

function SearchWidget() {
  return (
    <div className="SearchWidget">
      <SearchForm />
      <SearchResults />
    </div>
  );
}

export default SearchWidget;
