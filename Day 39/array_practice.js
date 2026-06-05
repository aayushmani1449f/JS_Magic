let randomNumbers = [];
for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 900) + 100);
}
console.log(randomNumbers);

let max = -Infinity, secondMax = -Infinity;
let min = Infinity, secondMin = Infinity;

for (let num of randomNumbers) {
    if (num > max) {
        secondMax = max;
        max = num;
    } else if (num > secondMax && num !== max) {
        secondMax = num;
    }

    if (num < min) {
        secondMin = min;
        min = num;
    } else if (num < secondMin && num !== min) {
        secondMin = num;
    }
}
console.log(secondMax, secondMin);

let sortedNumbers = [...randomNumbers].sort((a, b) => a - b);
console.log(sortedNumbers[sortedNumbers.length - 2], sortedNumbers[1]);

function getPrimeFactors(n) {
    let factors = [];
    while (n % 2 === 0) {
        factors.push(2);
        n = n / 2;
    }
    for (let i = 3; i * i <= n; i = i + 2) {
        while (n % i === 0) {
            factors.push(i);
            n = n / i;
        }
    }
    if (n > 2) {
        factors.push(n);
    }
    return factors;
}
console.log(getPrimeFactors(315));

let arr = [0, -1, 2, -3, 1];
function findTriplets(arr) {
    let triplets = [];
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    triplets.push([arr[i], arr[j], arr[k]]);
                }
            }
        }
    }
    return triplets;
}
console.log(findTriplets(arr));

let repeatedDigits = [];
for (let i = 11; i < 100; i++) {
    if (i % 11 === 0) {
        repeatedDigits.push(i);
    }
}
console.log(repeatedDigits);
