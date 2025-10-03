import { emojiPool } from "./emojiPool";
export function getInitialValues(pairCount) {
    if (pairCount > emojiPool.length) {
        throw new Error("Ikke nok emoji i poolen");
    }
    const shuffled = [...emojiPool].sort(() => Math.random()-.5);
    return shuffled.slice(0, pairCount);
}