// Assignment code here
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var specials = '!@#$%^&*()_+=<>/?~';

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

var Capitals = uppercase.split('');
var Lowers = lowercase.split('');
var Nums = numbers.split('');
var Specs =specials.split('');

function generatePassword(){

var characters = [];
var pwd = '';

var pwlength = prompt('Insert a password length between 8 and 128 characters');

if (pwlength < 8 || pwlength > 128) {
    alert('Password length must be between 8 and 128 characters. Please refresh the page and try again.');
    return;
}

if (isNaN(pwlength) === true) {
    alert('Must enter a number for password length. Please refresh the page and try again.');
    return;
}

var upperChar = confirm('Would you like to include capital letters?');
var lowerChar = confirm('Would you like to include lowercase letters?');
var numChar = confirm('Would you like to include numbers');
var specialChar = confirm('Would you like to include special characters?');

if (upperChar === true) {
    characters = characters.concat(Capitals);
}

if (lowerChar === true) {
    characters = characters.concat(Lowers);
}

if (numChar === true) {
    characters = characters.concat(Nums);
}

if (specialChar === true) {
    characters = characters.concat(Specs);
}



}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);