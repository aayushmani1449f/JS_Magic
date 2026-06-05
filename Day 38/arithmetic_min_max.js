const args = process.argv.slice(2);
if (args.length < 3) {
    console.log("Please provide 3 numbers.");
    process.exit(1);
}

const a = parseInt(args[0]);
const b = parseInt(args[1]);
const c = parseInt(args[2]);

const op1 = a + b * c;
const op2 = a % b + c;
const op3 = c + a / b;
const op4 = a * b + c;

console.log(`a + b * c = ${op1}`);
console.log(`a % b + c = ${op2}`);
console.log(`c + a / b = ${op3}`);
console.log(`a * b + c = ${op4}`);

let max = op1;
let min = op1;

if (op2 > max) max = op2;
if (op3 > max) max = op3;
if (op4 > max) max = op4;

if (op2 < min) min = op2;
if (op3 < min) min = op3;
if (op4 < min) min = op4;

console.log("Maximum:", max);
console.log("Minimum:", min);
