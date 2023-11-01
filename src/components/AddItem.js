import React, { useState } from "react";

const AddItem = ({ onAddItem }) => {
  const [itemData, setItemData] = useState({
    description: "",
    location: "",
    image: "",
  });
  function handleSubmit(event) {
    event.preventDefault();
    const newItem = { ...itemData };
    onAddItem(newItem);
    setItemData((prev) => {
      return { ...prev, description: "" };
    });
    setItemData((prev) => {
      return { ...prev, location: "" };
    });
    setItemData((prev) => {
      return { ...prev, image: "" };
    });

    //fetch request
    fetch("http://localhost:6001/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  }

  function handleInputChange(event) {
    const key = event.target.name;
    const value = event.target.value;
    setItemData({ ...itemData, [key]: value });
  }

  return (
    <div className="addForm">
      <form onSubmit={handleSubmit}>
        <label>Description </label>
        <input
          name="description"
          type="text"
          value={itemData.description}
          onChange={handleInputChange}
        ></input>
        <label>Location </label>
        <input
          name="location"
          type="text"
          value={itemData.location}
          onChange={handleInputChange}
        ></input>
        <label>Image link </label>
        <input
          name="image"
          type="text"
          value={itemData.image}
          onChange={handleInputChange}
        ></input>
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddItem;
