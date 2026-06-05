let money = 100;
let bets = 0;
let wins = 0;

while (money > 0 && money < 200) {
    bets++;
    const betResult = Math.floor(Math.random() * 2);
    
    if (betResult === 1) {
        wins++;
        money++;
    } else {
        money--;
    }
}

console.log(`Total bets made: ${bets}`);
console.log(`Total games won: ${wins}`);
if (money === 200) {
    console.log("Gambler reached the goal of Rs 200!");
} else {
    console.log("Gambler is broke!");
}
