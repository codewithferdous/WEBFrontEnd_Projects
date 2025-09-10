// src/Components/Rooms.jsx
import React from "react";
import '../Styling/Rooms.css'; // Ensure this import

function Room({ name, details, pic, reverse }) {
  return (
    <div className={`room ${reverse ? 'reverse' : ''}`}>
      <img src={pic} alt={name} className="room-img" />
      <div className="room-details">
        <h1 className="room-heading">{name}</h1>
        <p className="room-description">{details}</p>
      </div>
    </div>
  );
}
export default Room;