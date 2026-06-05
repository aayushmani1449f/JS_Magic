const args = process.argv.slice(2);
if (args.length < 1) {
    console.log("Please provide a single digit number.");
    process.exit(1);
}
const num = parseInt(args[0]);

console.log("Using If-Else:");
if (num === 0) {
    console.log("Zero");
} else if (num === 1) {
    console.log("One");
} else if (num === 2) {
    console.log("Two");
} else if (num === 3) {
    console.log("Three");
} else if (num === 4) {
    console.log("Four");
} else if (num === 5) {
    console.log("Five");
} else if (num === 6) {
    console.log("Six");
} else if (num === 7) {
    console.log("Seven");
} else if (num === 8) {
    console.log("Eight");
} else if (num === 9) {
    console.log("Nine");
} else {
    console.log("Not a single digit number");
}

console.log("\nUsing Switch-Case:");
switch (num) {
    case 0: console.log("Zero"); break;
    case 1: console.log("One"); break;
    case 2: console.log("Two"); break;
    case 3: console.log("Three"); break;
    case 4: console.log("Four"); break;
    case 5: console.log("Five"); break;
    case 6: console.log("Six"); break;
    case 7: console.log("Seven"); break;
    case 8: console.log("Eight"); break;
    case 9: console.log("Nine"); break;
    default: console.log("Not a single digit number");
}
