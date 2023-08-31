import React, { useEffect, useContext, useState } from "react";
import { SearchContext } from "../Context/searchContext";

function Data() {
  const { query } = useContext(SearchContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const API_URL = `https://api.github.com/search/users?q=${query}`;

  const fetchData = async () => {
    setIsLoading(true);
    setError("");
    setSearchResults([]);

    try {
      const response = await fetch(API_URL);

      if (response.ok) {
        const data = await response.json();
        const users = data.items;

        const result = users
          .filter((user) => {
            return user.login.toLowerCase().includes(query.toLowerCase());
          })
          .sort((a, b) => {
            return a.login > b.login ? 1 : -1;
          });

        setSearchResults(result);
      } else {
        throw new Error(
          `Failed to fetch data: ${response.status} ${response.statusText}`
        );
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (query.trim() !== "") {
      fetchData();
    }
  }, [query]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error}</div>;
  }

  return (
    <div>
      {searchResults.length === 0 ? (
        <div>No results...</div>
      ) : (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.login}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Data;
