// Assignment Code
var generateBtn = document.querySelector("#generate");
//var specialChars = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+",">","<","?"]
//var numChars = ["1","2","3","4","5","6",]
//var upperCase =[]
//var lowerCase =[]
var password=document.getElementById("password");
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = 12;
var password = "";

for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
 }


 document.getElementById("password").value = password;
//function generatePassword

// Write password to the #password input
//function writePassword() {
//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");

//  passwordText.value = password;



// Add event listener to generate button


generateBtn.addEventListener("click", writePassword);
