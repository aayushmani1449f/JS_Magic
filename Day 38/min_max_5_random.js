let min = 999;
let max = 100;
for (let i = 0; i < 5; i++) {
    let randomNum = Math.floor(Math.random() * 900) + 100;
    console.log(`Number ${i + 1}: ${randomNum}`);
    if (randomNum > max) {
        max = randomNum;
    }
    if (randomNum < min) {
        min = randomNum;
    }
}
console.log("Maximum Value:", max);
console.log("Minimum Value:", min);
