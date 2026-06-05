const args = process.argv.slice(2);
if (args.length < 1) {
    console.log("Please provide a number (1-7) for the weekday.");
    process.exit(1);
}
const day = parseInt(args[0]);

console.log("Using If-Else:");
if (day === 1) {
    console.log("Sunday");
} else if (day === 2) {
    console.log("Monday");
} else if (day === 3) {
    console.log("Tuesday");
} else if (day === 4) {
    console.log("Wednesday");
} else if (day === 5) {
    console.log("Thursday");
} else if (day === 6) {
    console.log("Friday");
} else if (day === 7) {
    console.log("Saturday");
} else {
    console.log("Invalid day number");
}

console.log("\nUsing Switch-Case:");
switch (day) {
    case 1: console.log("Sunday"); break;
    case 2: console.log("Monday"); break;
    case 3: console.log("Tuesday"); break;
    case 4: console.log("Wednesday"); break;
    case 5: console.log("Thursday"); break;
    case 6: console.log("Friday"); break;
    case 7: console.log("Saturday"); break;
    default: console.log("Invalid day number");
}
