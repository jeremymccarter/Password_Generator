// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialChars = [ "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", " ' ", " ", ' " ', "\\" ]

var numChars =[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

var upperCase =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var lowerCase =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var passwordLength = 0;
var password = "";
var choices=[]
function generatePassword(){
while (passwordLength<8||passwordLength>128||passwordLength===""||isNaN(passwordLength)){
  passwordLength=prompt("Please choose a password length between 8 and 128 characters.")
}
var lowerConfirm=confirm("Would you like lowercase characters in your password?")
if(lowerConfirm===true){
choices=choices.concat(lowerCase)
}
var upperConfirm=confirm("Would you like uppercase characters in your password?")
if(upperConfirm===true){
  choices=choices.concat(upperCase)
}
var numConfirm=confirm("Would you like number characters in your password?")
if(numConfirm===true){
  choices=choices.concat(numChars)
}
var specialConfirm=confirm("Would you like special characters in your password?")
if(specialConfirm===true){
  choices=choices.concat(specialChars)
}
if(lowerConfirm===false&&upperConfirm===false&&numConfirm===false&&specialConfirm===false){
  alert("You must choose at least one character to generate a password.")
  window.location.reload()
}
for (var i = 0; i < passwordLength; i++) {
 
  password += choices[Math.floor(Math.random() * choices.length)];
 }
 return password
}




 
//function generatePassword

// Write password to the #password input
function writePassword() {
 var password = generatePassword();
  var passwordText = document.querySelector("#password");

 passwordText.value = password;
}


// Add event listener to generate button


generateBtn.addEventListener("click", writePassword);
