const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("1. Feet to Inch\n2. Feet to Meter\n3. Inch to Feet\n4. Meter to Feet");

rl.question("Choose conversion option (1-4): ", (choice) => {
    rl.question("Enter value to convert: ", (val) => {
        const value = parseFloat(val);
        switch (parseInt(choice)) {
            case 1:
                console.log(`${value} Feet = ${value * 12} Inches`);
                break;
            case 2:
                console.log(`${value} Feet = ${value * 0.3048} Meters`);
                break;
            case 3:
                console.log(`${value} Inches = ${value / 12} Feet`);
                break;
            case 4:
                console.log(`${value} Meters = ${value / 0.3048} Feet`);
                break;
            default:
                console.log("Invalid choice");
        }
        rl.close();
    });
});
