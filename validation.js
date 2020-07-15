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
        console.log("Name only consists of whitespaces or is empty, good!")
    } else {
        console.log("Not only white spaces and not empty!")
    }
}

checkIfOnlyLettersAndSpace = function (name) {
    if (name.value.match("[a-zA-Z\\s\'\"]+")) {
        console.log("Letters and whitespace, good!")
    } else {
        console.log("Boooo!")
    }
}

checkIfWordStartWithCapital = function (name) {
    let words = name.value.split(' ');
    let counter = 0;
    for (let i = 0; i < words.length; i++){
        if (words[i][0] !== words[i][0].toLowerCase()) {
            counter++;
        }
    }
    if (counter === words.length) {
        console.log("Words start wit capital, Good!")
    } else {
        console.log("Bad!")
    }
}

checkLengthOfName = function (name) {
    if(name.value.length < 25) {
        console.log("Length is ok!")
    }else {
        console.log("Length is not ok!")
    }
}

button.addEventListener('click', () => {
    checkForWhiteSpaces(name);
    checkIfOnlyLettersAndSpace(name);
    checkIfWordStartWithCapital(name);
    checkLengthOfName(name);
});

