// Assignment code here

//making variables for confirming prompts

var symbols = "?@#&%!"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numb = "1234567890"

// variables for user input and generation

var createdPassword = [];
var userSelect = [];

// made generatePassword function... function

function generatePassword() {

  var passwordSize = prompt("Enter a number between 8-128 for amount of password characters");

  //this code makes sure user selects 8-128 
  if (passwordSize < 8 || passwordSize > 128){
    alert("Try again, please enter 8-128");
    return
  }

  //this confirms they want symbols in their password
  var symbolConfirm = confirm("Please confirm symbols ?@#&%!");
  if (symbolConfirm){
    userSelect.push(...symbols)
  }

  //this confirms they want lowercase letters in their password
  var lowerCaseConfirm = confirm("Please confirm lowercase characters abcdefghijklmnopqrstuvwxyz");
  if (lowerCaseConfirm){
    userSelect.push(...lowerCase)
  }

    //this confirms they want uppercase letters in their password
    var upperConfirm = confirm("Please confirm uppercase characters ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    if (upperConfirm){
      userSelect.push(...upperCase)
    }

      //this confirms they want numbers in their password
  var numbConfirm = confirm("Please confirm numbers 1234567890");
  if (numbConfirm){
    userSelect.push(...numb)

    //console logs the user selection
    console.log('user select -->', userSelect);

    //runs a for loop for password size and generates random password
    for (let i = 0; i < passwordSize; i++) {
      createdPassword.push(userSelect[Math.floor(Math.random() * passwordSize)])
      
      //console logs generated password
      console.log('created password', createdPassword)
      
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
