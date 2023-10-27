const passwordBox = document.getElementById("password");

const length = prompt("Enter the length of password required");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()+~|}{[]></-=";
const allchar = upperCase + lowerCase + number + symbol;

function createPassword() {
  let pass = "";
  pass += upperCase[Math.floor(Math.random() * upperCase.length)];
  pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  pass += number[Math.floor(Math.random() * number.length)];
  pass += symbol[Math.floor(Math.random() * symbol.length)];
  while (length > pass.length) {
    pass += allchar[Math.floor(Math.random() * allchar.length)];
  }
  passwordBox.value = pass;
}

function copypass(){
    passwordBox.select();
    document.execCommand("copy");
}