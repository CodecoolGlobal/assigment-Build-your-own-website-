let name = document.getElementById('name-content');
let email = document.getElementById('email-content');
let message = document.getElementById('message-content');
let button = document.getElementById('button-submit');
let sendForm = document.getElementById('sendForm');

console.log(name.innerText);

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
    if(!name.value.replace(/\s/g,'').length){
        console.log("Name only consists of whitespaces!")
    }else {
        console.log("No white spaces!")
    }
}



button.addEventListener('click',()=> {
    checkForWhiteSpaces(name);
});
