const args = process.argv.slice(2);
if (args.length < 1) {
    console.log("Please provide a value for n");
    process.exit(1);
}

const n = parseInt(args[0]);

if (n === 0) {
    console.log("Harmonic number is not defined for n=0");
    process.exit(1);
}

let harmonic = 0;
for (let i = 1; i <= n; i++) {
    harmonic += 1 / i;
}

console.log(`The ${n}th harmonic number is: ${harmonic}`);
