let name = document.getElementById('name-content');
let email = document.getElementById('email-content');
let message = document.getElementById('message-content');
let button = document.getElementById('button-submit');
let sendForm = document.getElementById('sendForm');


sendForm.addEventListener('input', () => {
    if (name.value.length > 0 &&
        email.value.length > 0 &&
        message.value.length > 0) {
        button.removeAttribute('disabled')
    } else {
        button.setAttribute('disabled', 'disabled');
    }
});

checkForWhiteSpaces = function (name) {
    if (name.value && !name.value.trim()) {
        console.log("Name only consists of whitespaces or is empty!")
    } else {
        console.log("No only white spaces!")
    }
}

checkIfOnlyLettersAndSpace = function (name) {
    const letters = name.value;
    if (letters.match("[a-zA-Z\\s\'\"]+")) {
        console.log("Letters and whitespace!")
    } else {
        console.log("Boooo!")
    }
}

button.addEventListener('click', () => {
    // checkForWhiteSpaces(name);
    checkIfOnlyLettersAndSpace(name);
});
