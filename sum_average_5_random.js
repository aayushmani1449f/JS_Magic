let sum = 0;
for (let i = 0; i < 5; i++) {
    let randomNum = Math.floor(Math.random() * 90) + 10;
    console.log(`Number ${i + 1}: ${randomNum}`);
    sum += randomNum;
}
console.log("Sum:", sum);
console.log("Average:", sum / 5);
