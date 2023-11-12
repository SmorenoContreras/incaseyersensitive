// Assignment code here

//making variables for confirming prompts

var symbols = "?@#&%!"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numb = "1234567890"

// variables for user input and generation

var createdPassword = [];
var userSelect = [];

function generatePassword(){

  var passwordSize = prompt("Enter a number between 8-128 for amount of password characters");

  if (passwordSize < 8 || passwordSize > 128){
    alert("Try again, please enter 8-128");
    return
  }


}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
