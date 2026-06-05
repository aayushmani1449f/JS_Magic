const args = process.argv.slice(2);
if (args.length < 2) {
    console.log("Please provide two numbers to check for palindrome. Example: node palindrome.js 121 343");
    process.exit(1);
}

function isPalindrome(num) {
    const strNum = num.toString();
    const reversedStr = strNum.split('').reverse().join('');
    return strNum === reversedStr;
}

const num1 = parseInt(args[0]);
const num2 = parseInt(args[1]);

console.log(`${num1} is Palindrome? ${isPalindrome(num1)}`);
console.log(`${num2} is Palindrome? ${isPalindrome(num2)}`);
