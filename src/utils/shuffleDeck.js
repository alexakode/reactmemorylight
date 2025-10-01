export default function shuffleDeck(values) {
  const deck = [...values, ...values]; //Dupliserte verdier for å lage/sikre par
  const shuffled = [];

  while (deck.length > 0) {
    const index = Math.floor(Math.random() * deck.length);
    shuffled.push(deck[index]);
    deck.splice(index, 1);
  }
  return shuffled;
}
