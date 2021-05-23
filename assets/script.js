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
var specs =specials.split('');

function generatePassword(){

var characters = [];
var pwd = '';

var pwlength = prompt('Insert a password length between 8 and 128 characters');

if (pwlength < 8 || pwlength > 128) {
    alert('Password length must be between 8 and 128 characters. Please refresh the page and try again.');
    return;
};

if (isNaN(pwlength) === true) {
    alert('Must enter a number for password length. Please refresh the page and try again.');
    return;
};



}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);