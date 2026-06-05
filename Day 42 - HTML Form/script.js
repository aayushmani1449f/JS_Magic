const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
if (text) {
    text.addEventListener('input', function() {
        let nameRegex = RegExp('^[A-Z][a-zA-Z]{2,}$');
        if (nameRegex.test(text.value)) textError.textContent = "";
        else textError.textContent = "Name is Incorrect";
    });
}

const pwd = document.querySelector('#pwd');
const pwdError = document.querySelector('.pwd-error');
if (pwd) {
    pwd.addEventListener('input', function() {
        let pwdRegex = RegExp('^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]*[^a-zA-Z0-9][a-zA-Z0-9]*$');
        if (pwd.value.length >= 8 && pwdRegex.test(pwd.value)) pwdError.textContent = "";
        else pwdError.textContent = "Password is Incorrect";
    });
}

const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
if (email) {
    email.addEventListener('input', function() {
        let emailRegex = RegExp('^[0-9a-zA-Z]+([._+-][0-9a-zA-Z]+)*@[0-9a-zA-Z]+(\\.[a-zA-Z]{2,}){1,2}$');
        if (emailRegex.test(email.value)) emailError.textContent = "";
        else emailError.textContent = "Email is Incorrect";
    });
}

const tel = document.querySelector('#tel');
const telError = document.querySelector('.tel-error');
if (tel) {
    tel.addEventListener('input', function() {
        let telRegex = RegExp('^[0-9]{2}\\s[0-9]{10}$');
        if (telRegex.test(tel.value)) telError.textContent = "";
        else telError.textContent = "Tel is Incorrect";
    });
}

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
if (salary && output) {
    output.textContent = salary.value;
    salary.addEventListener('input', function() {
        output.textContent = salary.value;
    });
}
