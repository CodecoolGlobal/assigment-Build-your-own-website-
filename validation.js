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

checkForWhiteSpacesName = function (name) {
    if (name.value && !name.value.trim()) {
        console.log("Name only consists of whitespaces or is empty!");
        name.value = "Whitespaces or empty!";
        return false;
    } else {
        console.log("Not only white spaces and not empty!");
        return true;
    }
}

checkIfOnlyLettersAndSpace = function (name) {
    if (name.value.match("[a-zA-Z\\s\'\"]+")) {
        console.log("Letters and whitespace, good!")
        return true;
    } else {
        name.value = "Disallowed signs used!";
        return false;
    }
}

checkIfWordStartWithCapital = function (name) {
    let words = name.value.split(' ');
    let counter = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i][0] !== words[i][0].toLowerCase()) {
            counter++;
        }
    }
    if (counter === words.length) {
        console.log("Words start wit capital, Good!");
        return true;
    } else {
        name.value = "Capitals required!";
        console.log("Bad!");
        return false;
    }
}

checkLengthOfName = function (name) {
    if (name.value.length < 25) {
        console.log("Length is ok!");
        return true;
    } else {
        console.log("Length is not ok!");
        name.value = "Length is an issue!";
        return false;
    }
}

checkForWhiteSpacesEmail = function (email) {
    if (email.value && !email.value.trim()) {
        console.log("Name only consists of whitespaces or is empty, good!");
        email.value = "Whitespaces or empty!";
        return false;
    } else {
        console.log("Not only white spaces and not empty!");
        return true;
    }
}

validateEmail = function (email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email.value.toLowerCase())) {
        console.log("Email is valid!");
        return true;
    } else {
        email.value = "Email is not valid!";
        console.log("Email not valid!");
        return false;
    }
}

button.addEventListener('click', () => {

        if (checkForWhiteSpacesName(name) && checkIfOnlyLettersAndSpace(name) && checkLengthOfName(name) &&
            checkIfWordStartWithCapital(name) && checkForWhiteSpacesEmail(email) && validateEmail(email)){
            alert("CONGRATULATIONS");
        }

    }
);

