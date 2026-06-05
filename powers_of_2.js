const args = process.argv.slice(2);
if (args.length < 1) {
    console.log("Please provide a value for n");
    process.exit(1);
}
const n = parseInt(args[0]);

console.log(`Using For Loop (up to 2^${n}):`);
for (let i = 0; i <= n; i++) {
    console.log(`2^${i} = ${Math.pow(2, i)}`);
}

console.log(`\nUsing While Loop (up to 2^${n} or 256):`);
let i = 0;
let powerOf2 = 1;
while (i <= n && powerOf2 <= 256) {
    console.log(`2^${i} = ${powerOf2}`);
    i++;
    powerOf2 = Math.pow(2, i);
}
