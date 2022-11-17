const form = document.querySelector ("form");
const firstName = document.getElementById ("first-name");
const firstNameError = document.querySelector ("#first-name + span.error")
const email = document.getElementById ("email");
const emailError = document.querySelector("span.error");
const pwd = document.getElementById ("password");
const pwdError = document.querySelector ("#password + span.error")
const pwdConfirm = document.getElementById ("confirm-pw")
const pwdConfirmError = document.querySelector ("#confirm-pw + span.error")

firstName.addEventListener ("input", (event) => {
  if (firstName.validity.valid) {
    firstNameError.className = "error" 
    firstNameError.textContent ="awesome";
  }
});

firstName.addEventListener ("blur", (event) => {
  if (!firstName.validity.valid) {
    firstNameError.className = "error active"
    firstNameError.textContent ="this field is required";
  }
});


// email.addEventListener("blur", (event) => {
//   console.log(event);

//   if (email.validity.valid) {
//     emailError.textContent = "";
//     emailError.className = "error";
//     email.className = "";
//   } else {
//     showError();
//     event.preventDefault();
//   }
// });

// form.addEventListener ("submit", (event) => {
//   if (!email.validity.valid) {
//     showError();
//     event.preventDefault();
    
//   }
// })

// function showError() {
//   if (email.validity.typeMismatch) {
//     emailError.textContent = "Double DOH!";
//   } 
//   email.className = "error active";
// }