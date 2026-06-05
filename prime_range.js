const args = process.argv.slice(2);
if (args.length < 2) {
    console.log("Please provide start and end of range. Example: node prime_range.js 10 50");
    process.exit(1);
}

const start = parseInt(args[0]);
const end = parseInt(args[1]);

console.log(`Prime numbers between ${start} and ${end}:`);

for (let i = start; i <= end; i++) {
    if (i <= 1) continue;
    
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    
    if (isPrime) {
        console.log(i);
    }
}
