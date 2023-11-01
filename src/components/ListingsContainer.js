import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ items, setItems, searchValue, sortValue }) {
  const searchedItems = items.filter((item) => {
    if (
      item.description
        .toLowerCase()
        .trim()
        .includes(searchValue.toLowerCase().trim())
    )
      return true;
    return false;
  });

  const sortedValues = searchedItems.sort((itemA, itemB) => {
    const locationA = itemA.location;
    const locationB = itemB.location;
    if (sortValue === "ascend") {
      if (locationA > locationB) return 1;
      else if (locationA < locationB) return -1;
      else return 0;
    } else if (sortValue === "descend") {
      if (locationA < locationB) return 1;
      else if (locationA > locationB) return -1;
      else return 0;
    } else return 0;
  });

  const itemsCards = sortedValues.map((item) => {
    return (
      <ListingCard
        id={item.id}
        key={item.id}
        description={item.description}
        location={item.location}
        image={item.image}
        onItemDelete={DeleteItem}
      />
    );
  });

  function DeleteItem(itemId) {
    const newItems = items.filter((item) => {
      if (item.id === itemId) return false;
      return true;
    });
    setItems([...newItems]);
  }

  return (
    <main>
      <ul className="cards">{itemsCards}</ul>
    </main>
  );
}

export default ListingsContainer;
