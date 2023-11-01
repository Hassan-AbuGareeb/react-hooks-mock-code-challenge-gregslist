import React from "react";

const Sort = ({ setSort }) => {
  function handleSortChange(event) {
    setSort(event.target.value);
  }
  return (
    <div className="sort">
      <select onChange={handleSortChange}>
        <option value="new">New</option>
        <option value="ascend">Ascend</option>
        <option value="descend">Descend</option>
      </select>
    </div>
  );
};

export default Sort;
