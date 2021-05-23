// Created variables conatining the strings of possible password characters
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var specials = '!@#$%^&*()_+=<>/?~';

//Grabs generate button by id generate
var generateBtn = document.querySelector("#generate");

// Write password to the id password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}
//creatwed generate password function
function generatePassword(){
//added array to be used later
var characters = [];
//empty password field to be used later
var password = '';

var pwlength = prompt('Insert a password length between 8 and 128 characters');
//assures password length must be between 8 and 128 integers
if (pwlength < 8 || pwlength > 128) {
    alert('Password length must be between 8 and 128 characters. Please refresh the page and try again.');
    return 'Password length must be between 8 and 128 characters. Please refresh the page and try again.';
}
//ensures password value must be entered as an integer
if (isNaN(pwlength) === true) {
    alert('Must enter a number for password length. Please refresh the page and try again.');
    return 'Must enter a number for password length. Please refresh the page and try again.';
}
//created confirm messages to choose what characters to use
var upperChar = confirm('Would you like to include capital letters?');
var lowerChar = confirm('Would you like to include lowercase letters?');
var numChar = confirm('Would you like to include numbers');
var specialChar = confirm('Would you like to include special characters?');
//created if statements to add strings to the array
if (upperChar === true) {
    characters += uppercase;
}

if (lowerChar === true) {
    characters += lowercase;
}

if (numChar === true) {
    characters += numbers;
}

if (specialChar === true) {
    characters += specials;
}
//ensures that the user chooses at least one character type
if (characters.length === 0) {
    alert('Must choose at least one character type. Please refresh the page and try again.');
    return 'Must choose at least one character type. Please refresh the page and try again.';
}
//created for loop to generate random password and round off integers
else{
    for (var i = 1; i <= pwlength; i++) {
        var pwrandom = Math.floor(Math.random()*characters.length);
        password = password + characters[pwrandom];
    }
}
//returns the generated password to the user
return password;

}

// Add event listener to generate button to listen to click 
generateBtn.addEventListener("click", writePassword);