const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function cToF(degC) {
    return (degC * 9/5) + 32;
}

function fToC(degF) {
    return (degF - 32) * 5/9;
}

console.log("Temperature Conversion");
console.log("1. Celsius to Fahrenheit");
console.log("2. Fahrenheit to Celsius");

rl.question("Choose conversion (1 or 2): ", (choice) => {
    rl.question("Enter temperature value: ", (val) => {
        const temp = parseFloat(val);
        
        switch (parseInt(choice)) {
            case 1:
                if (temp >= 0 && temp <= 100) {
                    console.log(`${temp}°C = ${cToF(temp).toFixed(2)}°F`);
                } else {
                    console.log("Temperature must be within freezing point (0°C) and boiling point (100°C) of water.");
                }
                break;
            case 2:
                if (temp >= 32 && temp <= 212) {
                    console.log(`${temp}°F = ${fToC(temp).toFixed(2)}°C`);
                } else {
                    console.log("Temperature must be within freezing point (32°F) and boiling point (212°F) of water.");
                }
                break;
            default:
                console.log("Invalid choice");
        }
        rl.close();
    });
});
