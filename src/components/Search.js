import React, { useState } from "react";

function Search({ setSearch }) {
  const [localSearch, setLocalSearch] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    setSearch(localSearch);
  }

  function handleSearch(event) {
    setLocalSearch(event.target.value);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={localSearch}
        onChange={handleSearch}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
