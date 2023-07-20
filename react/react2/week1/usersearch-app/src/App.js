import { useState } from "react";
import "./App.css";
import SearchPage from "./Components/SearchPage";
import { SearchContext } from "./Context/searchContext";

function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <h1>Github User Search App</h1>
      <SearchContext.Provider value={{ query, setQuery }}>
        <SearchPage />
      </SearchContext.Provider>
    </div>
  );
}

export default App;
