const args = process.argv.slice(2);
if (args.length < 1) {
    console.log("Please provide a number like 1, 10, 100, 1000...");
    process.exit(1);
}
const num = parseInt(args[0]);

console.log("Using If-Else:");
if (num === 1) {
    console.log("Unit");
} else if (num === 10) {
    console.log("Ten");
} else if (num === 100) {
    console.log("Hundred");
} else if (num === 1000) {
    console.log("Thousand");
} else if (num === 10000) {
    console.log("Ten Thousand");
} else if (num === 100000) {
    console.log("Lakh");
} else if (num === 1000000) {
    console.log("Ten Lakh");
} else if (num === 10000000) {
    console.log("Crore");
} else {
    console.log("Invalid number");
}

console.log("\nUsing Switch-Case:");
switch (num) {
    case 1: console.log("Unit"); break;
    case 10: console.log("Ten"); break;
    case 100: console.log("Hundred"); break;
    case 1000: console.log("Thousand"); break;
    case 10000: console.log("Ten Thousand"); break;
    case 100000: console.log("Lakh"); break;
    case 1000000: console.log("Ten Lakh"); break;
    case 10000000: console.log("Crore"); break;
    default: console.log("Invalid number");
}
