const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Think of a number between 1 to 100");

let low = 1;
let high = 100;

function guess() {
    if (low > high) {
        console.log("Something went wrong with your responses!");
        rl.close();
        return;
    }

    if (low === high) {
        console.log(`Your magic number is ${low}!`);
        rl.close();
        return;
    }

    let mid = Math.floor((low + high) / 2);
    
    rl.question(`Is your number greater than ${mid}? (y/n/e for equal): `, (answer) => {
        if (answer.toLowerCase() === 'y') {
            low = mid + 1;
            guess();
        } else if (answer.toLowerCase() === 'n') {
            high = mid;
            guess();
        } else if (answer.toLowerCase() === 'e') {
            console.log(`Your magic number is ${mid}!`);
            rl.close();
        } else {
            console.log("Invalid input, please use 'y', 'n', or 'e'");
            guess();
        }
    });
}

guess();
