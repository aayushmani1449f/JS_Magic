const args = process.argv.slice(2);
if (args.length < 1) {
    console.log("Please provide a number");
    process.exit(1);
}

const num = parseInt(args[0]);

if (num <= 1) {
    console.log(`${num} is not a prime number`);
    process.exit(0);
}

let isPrime = true;
for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log(`${num} is a prime number`);
} else {
    console.log(`${num} is not a prime number`);
}
