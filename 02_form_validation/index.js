const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passCheck = document.getElementById("pass_check");
let isUsername = false;
let isEmail = false;
let isPassword = false;
let isPassCheck = false;

username.addEventListener("input", (e) => {
  e.preventDefault();
  let inputVal = username.value.trim();
  if (inputVal === "") {
    setErrorMsg(username, "Username cant be empty");
    isUsername = false;
  } else if (inputVal.length < 3) {
    setErrorMsg(username, "Username must be more than three characters");
    isUsername = false;
  } else if (inputVal.length > 20) {
    setErrorMsg(username, "character exeeds words limit");
    isUsername = false;
  } else if (inputVal.length >= 3 && inputVal.length <= 20) {
    isUsername = true;
    setSuccess(username);
  }
});

email.addEventListener("input", (e) => {
  e.preventDefault();
  let valid = false;
  let emailVal = email.value.trim();
  valid = isEmailValid(emailVal);
  if (!valid) {
    setErrorMsg(email, "Invalid email");
    isEmail = valid;
  } else {
    setSuccess(email);
  }
});

password.addEventListener("input", (e) => {
  e.preventDefault();
  let passVal = password.value.trim();
  let userVal = username.value.trim();
  if (passVal.length < 8) {
    setErrorMsg(password, "Atleast eight characters required");
    isPassword = false;
  } else if (passVal.includes(userVal) && userVal) {
    setErrorMsg(password, "Password cannot contains the username");
    isPassword = false;
  } else setSuccess(password);
});

passCheck.addEventListener("input", (e)=>{
    e.preventDefault();
    if(passCheck.value !== password.value){
        setErrorMsg(passCheck,"Password does not match");
        isPassCheck=false;
    }
        
})


function setErrorMsg(input, msg) {
  let parent = input.parentElement;
  parent.className = "form-control error";
  parent.querySelector("small").innerHTML = msg;
}

function setSuccess(input) {
  let parent = input.parentElement;
  parent.className = "form-control success";
}

function isEmailValid(email) {
  return /^(?!\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  /*
This regex pattern checks for the following cases:

- It ensures that the email address does not start with a period.
- It allows letters (uppercase and lowercase), digits, and certain special characters (._%+-) in the local part of the email address.
- It requires the presence of the "@" symbol.
- It allows letters (uppercase and lowercase), digits, and certain special characters (.-) in the domain part of the email address.
- It requires a period (dot) after the domain name.
- It requires the top-level domain (TLD) to consist of at least two letters.
*/
}
