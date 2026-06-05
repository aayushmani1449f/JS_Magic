let dieRolls = new Map();
for (let i = 1; i <= 6; i++) {
    dieRolls.set(i, 0);
}

let maxReached = false;
while (!maxReached) {
    let roll = Math.floor(Math.random() * 6) + 1;
    let count = dieRolls.get(roll);
    dieRolls.set(roll, count + 1);
    if (dieRolls.get(roll) === 10) {
        maxReached = true;
    }
}
console.log(dieRolls);

let maxCount = 0;
let minCount = Infinity;
let maxNumber, minNumber;

for (let [number, count] of dieRolls) {
    if (count > maxCount) {
        maxCount = count;
        maxNumber = number;
    }
    if (count < minCount) {
        minCount = count;
        minNumber = number;
    }
}
console.log(maxNumber, minNumber);

let birthMonths = new Map();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

for (let i = 1; i <= 50; i++) {
    let month = months[Math.floor(Math.random() * 12)];
    if (!birthMonths.has(month)) {
        birthMonths.set(month, []);
    }
    birthMonths.get(month).push(`Individual ${i}`);
}

for (let [month, individuals] of birthMonths) {
    console.log(month, individuals);
}
