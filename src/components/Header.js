import React from "react";
import Search from "./Search";
import Sort from "./Sort";
import AddItem from "./AddItem";

function Header({ setSearch, setSort, onAddItem }) {
  return (
    <header>
      <div className="header">
        <h1>
          <span className="logo" role="img">
            ☮
          </span>
          gregslist
        </h1>
        <Search setSearch={setSearch} />
      </div>
      <div className="flex">
        <Sort setSort={setSort} />
        <AddItem onAddItem={onAddItem} />
      </div>
    </header>
  );
}

export default Header;
