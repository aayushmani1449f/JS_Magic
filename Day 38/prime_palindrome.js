const args = process.argv.slice(2);
if (args.length < 1) {
    console.log("Please provide a number.");
    process.exit(1);
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function getPalindrome(num) {
    const strNum = num.toString();
    const reversedStr = strNum.split('').reverse().join('');
    return parseInt(reversedStr);
}

const num = parseInt(args[0]);

if (isPrime(num)) {
    console.log(`${num} is a Prime number`);
    
    const palindrome = getPalindrome(num);
    console.log(`Its palindrome is ${palindrome}`);
    
    if (isPrime(palindrome)) {
        console.log(`The palindrome ${palindrome} is also a Prime number!`);
    } else {
        console.log(`The palindrome ${palindrome} is not a Prime number.`);
    }
} else {
    console.log(`${num} is not a Prime number`);
}
