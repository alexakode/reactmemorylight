import { useState } from "react";
import shuffleDeck from "./utils/shuffleDeck";
import Card from "./components/Card";
import "./App.css";

export default function App() {
  const initialValues = ["🍎", "🍌"]; //unike kort, begynner med hardkode for å teste
  const [deck, setDeck] = useState(() =>
    shuffleDeck(initialValues).map((value, index) => ({
      id: index,
      value,
      flipped: false,
      matched: false,
    }))
  );
  const handleCardClick = (id) => {
    setDeck((prev) =>
      prev.map((card) => (card.id === id ? { ...card, flipped: true } : card))
    );
  };
  return (
    <div className="game-board">
      {deck.map((card) => (
        <Card
          key={card.id}
          value={card.value}
          flipped={card.flipped}
          matched={card.matched}
          onClick={() => handleCardClick(card.id)}
        />
      ))}
    </div>
  );
}
