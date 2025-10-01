import { useEffect, useState } from "react";
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
  const [flippedCards, setFlippedCards] = useState([]);
  const handleCardClick = (id) => {
    if (flippedCards.length === 2 || deck.find((c) => c.id === id).flipped)
      return;
    const updatedDeck = deck.map((card) =>
      card.id === id ? { ...card, flipped: true } : card
    );
    setDeck(updatedDeck);
    setFlippedCards([...flippedCards, id]);
  };
  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstId, secondId] = flippedCards;
      const firstCard = deck.find((card) => card.id === firstId);
      const secondCard = deck.find((card) => card.id === secondId);
      if (firstCard.value === secondCard.value) {
        // match
        setDeck((prev) =>
          prev.map((card) =>
            card.id === firstId || card.id === secondId
              ? { ...card, matched: true }
              : card
          )
        );
        setFlippedCards([]);
      } else {
        // Ikke match, snu tilbake etter delay
        setTimeout(() => {
          setDeck((prev) =>
            prev.map((card) =>
              card.id === firstId || card.id === secondId
                ? { ...card, flipped: false }
                : card
            )
          );
          setFlippedCards([]);
        }, 1000); //1 sekund
      }
    }
  }, [flippedCards, deck]);
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
