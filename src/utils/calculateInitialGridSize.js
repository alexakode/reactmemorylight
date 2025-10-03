export default function calculateInitialGridSize(cardMinSize = 160){
    const cols = Math.floor(window.innerWidth/cardMinSize);
    const rows = Math.floor(window.innerHeight/cardMinSize);
    let total = rows * cols;
    if (total % 2 !== 0) total -= 1 //sikre partall
    return {rows, cols, total};
}