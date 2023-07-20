// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
//prompts for password criteria
    var needSymbols = window.confirm("Does password need special characters?");
    var needNumbers = window.confirm("Does password need numbers?");
    var needUppers = window.confirm("Does password need uppercase letters?");
    var passwordLength = window.prompt("Please enter how many characters you would like you password to be (between 8-128)");
//defining terms
    var symbols = [
        "!",
        "@",
        "#",
        "$",
        "^",
        "&",
        "*",
        "(",
        ")",
        "-",
        "_",
        "+",
        "/",
        "="
    ];

    var numbers = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
    ];

    var lowercase = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z"
    ];

    var uppercase = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
    ];
//implementing criteria to password
    if (needSymbols) {
        lowercase = lowercase.concat(symbols)
    }
    if (needNumbers) {
        lowercase = lowercase.concat(numbers)
    }
    if (needUppers) {
        lowercase = lowercase.concat(uppercase)
    }
//make random password
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
        var index = Math.floor(Math.random() * lowercase.length);
        password += lowercase[index];
        console.log(index);
    }
    return password
}