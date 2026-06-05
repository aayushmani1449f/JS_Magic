const args = process.argv.slice(2);
if (args.length < 1) {
    console.log("Please provide a number to compute factorial");
    process.exit(1);
}

const num = parseInt(args[0]);

if (num < 0) {
    console.log("Factorial is not defined for negative numbers.");
    process.exit(1);
}

let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i;
}

console.log(`${num}! = ${factorial}`);
