const form = document.querySelector ("form");
const firstName = document.getElementById ("first-name");
const firstNameError = document.querySelector ("#first-name + span.error")
const email = document.getElementById ("email");
const emailError = document.querySelector("#email + span.error");
const pwd = document.getElementById ("password");
const pwdError = document.querySelector ("#password + span.error")
const pwdConfirm = document.getElementById ("confirm-pw")
const pwdConfirmError = document.querySelector ("#confirm-pw + span.error")

firstName.addEventListener ("input", (event) => {
  if (firstName.validity.valid && firstName.value.trim() !== "") {
    firstNameError.className = "error" 
    firstNameError.textContent ="awesome";
    firstName.className = "";
  } else {
    firstNameError.className = "error active"
    firstNameError.textContent ="this field is required";
    firstName.className = "name error";
  }
});

firstName.addEventListener ("focus", (event) => {
  if (!firstName.validity.valid) {
    firstName.className = "name error";
  }
});

firstName.addEventListener ("blur", (event) => {
  if (!firstName.validity.valid) {
    firstNameError.className = "error active"
    firstNameError.textContent ="this field is required";
  }
});


email.addEventListener("blur", (event) => {
  console.log(event);

  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
    email.className = "";
  } else {
    showError();
    event.preventDefault();
  }
});

form.addEventListener ("submit", (event) => {
  if (!email.validity.valid || !firstName.validity.valid) {
    showError();
    event.preventDefault();
  }
})

function showError() {
  if (email.validity.typeMismatch) {
    emailError.className = "error active";
    emailError.textContent = "Please enter a valid email adress";
  } else {
  emailError.className = "error active";
  emailError.textContent = "this field is required";
  }
};