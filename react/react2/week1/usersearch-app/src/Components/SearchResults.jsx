import React, { useContext } from "react";
import { SearchContext } from "../Context/searchContext";

function SearchResults() {
  const { results } = useContext(SearchContext);

  if (!results) {
    return null; // or any fallback component if desired
  }

  const loginList = results.map((result) => result.login);

  return (
    <div>
      {loginList.length === 0 ? (
        <div>No results...</div>
      ) : (
        <ul>
          {loginList.map((login) => (
            <li key={login}>{login}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchResults;
