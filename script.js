// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = pword;
  console.log(pword.length)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/* Global Vairiables */
let Uppercase_Pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let Lowercase_Pool = "abcdefgvhijklmnopqrstuvwxyz";
let Symbols_Pool =  "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
let Numbers_Pool = "0123456789";

/* Collecting password parameters */
const Length = Number(window.prompt("Enter a number between 8 and 128"));
const Upper = window.confirm("Would you like uppercase letters?");
const Symbol = window.confirm("Would you like symbols?")
const Numbers = window.confirm("Would you like numbers?")

// Creates Pool of characters based off password parameters
let Pool = null;
function createPool(){
  if(Length >=8 && Length <=128){
    Pool = Lowercase_Pool;
    console.log("Length", Pool);
  } else {
    window.alert("Invalid Entry", Pool);
  } 
  if(Upper){
    Pool = Lowercase_Pool.concat(Uppercase_Pool);
    console.log("Upper", Pool);
  } else {
    console.log("No Uppercase", Pool);
  }
  if(Symbol){
    Pool = Pool.concat(Symbols_Pool);
    console.log("Symbol", Pool);
  } else {
    console.log("No Symbols", Pool);
  }
  if(Numbers){
    Pool = Pool.concat(Numbers_Pool);
    console.log("Numbers", Pool);
  } else {
    console.log("No Numbers", Pool);
  }
  return Pool;
}
createPool();

let pword = ""
function generatePassword(){
  console.log(Pool);
  for (let i = 0; i < Length; i++) {
    pword += Pool.charAt(Math.floor(Math.random() * Pool.length))
  }
}








