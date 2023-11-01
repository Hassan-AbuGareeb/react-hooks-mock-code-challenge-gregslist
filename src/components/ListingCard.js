import React, { useState } from "react";

function ListingCard({ id, description, image, location, onItemDelete }) {
  const [liked, setLiked] = useState(false);

  function handleLikeClick() {
    setLiked(!liked);
  }

  function handleItemDelete(itemId) {
    onItemDelete(id);
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <button
          className={`emoji-button favorite ${liked && "active"}`}
          onClick={handleLikeClick}
        >
          {liked ? "★" : "☆"}
        </button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleItemDelete}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
