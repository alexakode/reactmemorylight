import React from "react";
import "./Card.css"
// import ./Card.css for stil (ikke lagd ennå)
export default function Card({ value, flipped, matched, onClick }) {
  const handleClick = () => {
    if (!flipped && !matched) {
      onClick();
    }
  };
  return (
    <div
      className={`card ${flipped || matched ? "flipped" : ""}`}
      onClick={handleClick}
    >
      <div className="card-inner">
        <div className="card-front">{value}</div>
        <div className="card-back">❓️</div>
      </div>
    </div>
  );
}
