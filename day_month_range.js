const args = process.argv.slice(2);
if (args.length < 2) {
    console.log("Please provide day and month as arguments. Example: node day_month_range.js 25 3");
    process.exit(1);
}

const day = parseInt(args[0]);
const month = parseInt(args[1]);

let isBetween = false;

if ((month === 3 && day >= 20 && day <= 31) ||
    (month === 4 && day >= 1 && day <= 30) ||
    (month === 5 && day >= 1 && day <= 31) ||
    (month === 6 && day >= 1 && day <= 20)) {
    isBetween = true;
}

console.log(isBetween);
