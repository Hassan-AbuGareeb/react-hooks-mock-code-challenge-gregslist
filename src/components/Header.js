import React from "react";
import Search from "./Search";
import Sort from "./Sort";

function Header({ setSearch, setSort }) {
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
      <Sort setSort={setSort} />
    </header>
  );
}

export default Header;
