import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((resp) => resp.json())
      .then((data) => setItems([...data]));
  }, []);

  return (
    <div className="app">
      <Header items={items} setItems={setItems} setSearch={setSearch} />
      <ListingsContainer
        items={items}
        setItems={setItems}
        searchValue={search}
      />
    </div>
  );
}

export default App;
