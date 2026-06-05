let pinRegex = /^[1-9]{1}[0-9]{2}\s?[0-9]{3}$/;
let pinCodes = ["400088", "A400088", "400088B", "400 088", "40008"];
for (let pin of pinCodes) {
    console.log(pin + " " + pinRegex.test(pin));
}

let emailRegex = /^[0-9a-zA-Z]+([._+-][0-9a-zA-Z]+)*@[0-9a-zA-Z]+(\.[a-zA-Z]{2,}){1,2}$/;
let validEmails = [
    "abc@yahoo.com",
    "abc-100@yahoo.com",
    "abc.100@yahoo.com",
    "abc111@abc.com",
    "abc-100@abc.net",
    "abc.100@abc.com.au",
    "abc@1.com",
    "abc@gmail.com.com",
    "abc+100@gmail.com"
];
let invalidEmails = [
    "abc",
    "abc@.com.my",
    "abc123@gmail.a",
    "abc123@.com",
    "abc123@.com.com",
    ".abc@abc.com",
    "abc()*@gmail.com",
    "abc@%*.com",
    "abc..2002@gmail.com",
    "abc.@gmail.com",
    "abc@abc@gmail.com",
    "abc@gmail.com.1a",
    "abc@gmail.com.aa.au"
];

for (let email of validEmails) {
    console.log(email + " " + emailRegex.test(email));
}
for (let email of invalidEmails) {
    console.log(email + " " + emailRegex.test(email));
}
