const args = process.argv.slice(2);
if (args.length < 1) {
    console.log("Please provide a year. Example: node leap_year.js 2024");
    process.exit(1);
}

const year = parseInt(args[0]);

if (year >= 1000 && year <= 9999) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a Leap Year`);
    } else {
        console.log(`${year} is not a Leap Year`);
    }
} else {
    console.log("Please enter a valid 4-digit year");
}
