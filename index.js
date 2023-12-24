const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
// let passwordLenght = 12
let lengthEl = document.getElementById("pass-length")

// function for getting random element from characters array
function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

// function for generating random password
function getPassword() {
    let randomPassword = ""
    let passwordLenght = 0
    passwordLenght += lengthEl.value
    for (i = 0; i < passwordLenght; i++) {
        randomPassword += getRandomCharacter()
    }
    return randomPassword
}

function generatePassword() {
    passwordOne.textContent = getPassword()
    passwordTwo.textContent = getPassword()
}


// a code from StackOverflow for copying text on click
let copiedPassword = document.querySelector("#password-one");

function copyPassword() {
    document.execCommand("copy");
    alert("Hello! I am an alert box!");
}

copiedPassword.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", copiedPassword.textContent);
        console.log(event.clipboardData.getData("text"))
    }
});

