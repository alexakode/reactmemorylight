import React from "react";
import calculateInitialGridSize from "../utils/calculateInitialGridSize";
import { emojiPool } from "../utils/emojiPool";
import Card from "./Card";
export default function GameBoard({ deck }){
    const { cols } =calculateInitialGridSize();
const boardStyle = {
  display: 'grid',
  gridTemplateColumns: `repeat(${cols}, minmax(10rem, 1fr))`,
  gap: '1rem',
  maxWidth: `${cols * 11}rem`, // 10rem kort + 1rem gap
  margin: '0 auto',
};
return (
    <div className="game-board" style={boardStyle}>
        {deck.map((emoji, index) => (<Card key={index} emoji={emoji}/>))}
    </div>
)
}