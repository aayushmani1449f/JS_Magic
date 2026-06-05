console.log("Single Coin Flip:");
const coinFlip = Math.floor(Math.random() * 2);
if (coinFlip === 0) {
    console.log("Heads");
} else {
    console.log("Tails");
}

console.log("\nCoin Flip Game (First to 11):");
let headsCount = 0;
let tailsCount = 0;

while (headsCount < 11 && tailsCount < 11) {
    const flip = Math.floor(Math.random() * 2);
    if (flip === 0) {
        headsCount++;
        console.log("Heads");
    } else {
        tailsCount++;
        console.log("Tails");
    }
}

console.log(`\nFinal Score:`);
console.log(`Heads: ${headsCount}`);
console.log(`Tails: ${tailsCount}`);

if (headsCount === 11) {
    console.log("Heads wins!");
} else {
    console.log("Tails wins!");
}
