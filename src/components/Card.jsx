import React from "react";
import "./Card.css";
export default function Card({ value, flipped, matched, onClick }) {
  const handleClick = () => {
    if (!flipped && !matched) {
      onClick();
    }
  };
  return (
    <div className="card" onClick={handleClick}>
      {flipped || matched ? (
        <div className="card-front">{value}</div>
      ) : (
        <div className="card-back">❓️</div>
      )}
    </div>
  );
}
