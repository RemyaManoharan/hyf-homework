import React, { useState, useEffect } from "react";
import Data from "./Data";
import { SearchContext } from "../Context/searchContext";
import SearchWidget from "./SearchWidget";

function SearchPage() {
  return (
    <div className="SearchPage">
      <SearchWidget />
      <Data />
    </div>
  );
}

export default SearchPage;
