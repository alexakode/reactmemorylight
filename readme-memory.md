# React Memory light 🎴⚡️

## Oppgave

Lag et enkelt Memory-spill der brukeren kan:

- Klikke på kort for å snu dem
- Finne to like kort som matcher
- Få en vinnermelding når alle par er funnet
- Starte en ny runde med stokket kortstokk

## Funksjonalitet

- Start spillet med stokkede kort (kan bruke emoji eller ikon)
- Bruk useState til å holde styr på
  . hvilke kort som er snudd
  . hvilke kort som er matchet
  . antall trekk spilleren har gjort

- Bruk `useEffect` til å holde styr på
  . om to snudde kort matcher
  . nullstille kort hvis de ikke matcher

- Når alle kort er funnet → vis en enkel vinnermelding
- Ha en knapp for å _starte spillet på nytt_ (stokke kortene på nytt og nullstille state)

## Visning

- Kortene vises i et enkelt (CSS) Grid (kan ha flex, liker ikke)
- Hvert kort har en _bakside_ (f.eks. ❓️) og en forside (f.eks. 😺)
- Når kortet snus vises forsiden

# Refleksjon: State management

Før du begynner å kode, tenk over

- Hvilke _states_ trenger du å tracke for å få spillet til å fungere?
  Hvilke oppdateringer skjer når brukeren trykker på et kort?
  Hvilke states må "snakke sammen" for at spillet skal føles riktig (f.eks. når to kort er åpnet)?

Husk at `useState` holder på dataen, mens `useEffect` lar deg reagere på at dataen endrer seg.
Lag gjerne en liste eller diagram før du begynner å kode ✔️

Bonus

- timer
- best score
- css-animert flip-effekt

🎯Mål: bli trygg på state-håndtering og `useEffect` i et lite spillprosjekt
🎉Husk: Designet kan være superenkelt — det viktigste er at logikken sitter.
