const form = document.querySelector("form");
const firstName = document.getElementById("first-name");
const firstNameError = document.querySelector("#first-name + span.error");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");
const pwd = document.getElementById("password");
const pwdError = document.querySelector("#password + span.error");
const pwdConfirm = document.getElementById("confirm-pw");
const pwdConfirmError = document.querySelector("#confirm-pw + span.error");
const button = document.querySelector("button");
// PSEUDO CODE VALIDATION BEHAVIOUR
// Required fields are marked so I will not validate too aggressively; so not red during focus when no input is given yet.
// Once the user leaves the field (blur) and entry invalid > add blur event error "blur error" with error message showing and prevent submit
// Once entry is valid > "error class" removes red border

// First Name Validation
firstName.addEventListener("blur", () => {
  if (firstName.validity.valid && firstName.value.trim() !== "") {
    firstNameError.className = "valid";
  } else {
    firstNameError.className = "invalid entry";
    firstName.className = "invalid entry";
    firstNameError.textContent = "⚠ this field is required";
  }
});

firstName.addEventListener("input", () => {
  if (firstName.validity.valid && firstName.value.trim() !== "") {
    firstNameError.className = "valid";
    firstName.className = "";
    firstNameError.textContent = "";
  }
});

// Mail Validation
email.addEventListener("blur", () => {
  const userMail = email.value;
  if (validateEmail(userMail) === true) {
    emailError.className = "valid";
  } else {
    emailError.className = "invalid entry";
    email.className = "invalid entry";
    emailError.textContent = "⚠ a valid email is required";
  }
});

email.addEventListener("input", () => {
  const userMail = email.value;
  if (validateEmail(userMail) === true) {
    emailError.className = "valid";
    email.className = "";
    emailError.textContent = "";
  }
});

function validateEmail(email) {
  const regexExp = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;
  return regexExp.test(email);
}

// Password Validation (at least 8 characters)
pwd.addEventListener("input", () => {
  pwdError.className = "info";
  pwdError.textContent = "⚠ password should at least be 8 characters";
  if (pwd.validity.valid) {
    pwdError.className = "valid";
    pwd.className = "valid";
    pwdError.textContent = "";
  }
});

pwd.addEventListener("blur", () => {
  if (!pwd.validity.valid) {
    pwdError.className = "invalid entry";
    pwd.className = "invalid entry";
    pwdError.textContent = "⚠ password should at least be 8 characters";
  } else {
    pwdError.textContent = "";
    pwdError.className = "valid";
  }
});

// Password Confirmation check
pwdConfirm.addEventListener("blur", () => {
  if (pwd.value !== pwdConfirm.value) {
    pwdConfirmError.className = "invalid entry";
    pwdConfirm.className = "invalid entry";
    pwdConfirmError.textContent = "⚠ passwords don't match";
  }
});

pwdConfirm.addEventListener("input", () => {
  if (pwd.value === pwdConfirm.value) {
    pwdConfirm.className = "valid";
    pwdConfirmError.textContent = "it's a match!";
  }
});

// Prevent Submit when invalid fields exist
button.addEventListener("click", (event) => {
  const userMail = email.value;
  if (validateEmail(userMail) === false) {
    email.className = "no-submit";
    event.preventDefault();
  }
  if (!firstName.validity.valid || firstName.value.trim() === "") {
    firstName.className = "no-submit";
    event.preventDefault();
  }
  if (!pwd.validity.valid) {
    pwd.className = "no-submit";
    event.preventDefault();
  }
  if (pwd.value !== pwdConfirm.value || pwdConfirm === "") {
    pwdConfirm.className = "no-submit";
    event.preventDefault();
  }
});
