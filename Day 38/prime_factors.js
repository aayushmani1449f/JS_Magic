const args = process.argv.slice(2);
if (args.length < 1) {
    console.log("Please provide a number N");
    process.exit(1);
}

let N = parseInt(args[0]);
console.log(`Prime factors of ${N}:`);

for (let i = 2; i * i <= N; i++) {
    while (N % i === 0) {
        console.log(i);
        N = N / i;
    }
}

if (N > 2) {
    console.log(N);
}
