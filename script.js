const form = document.querySelector ("form");
const firstName = document.getElementById ("first-name");
const firstNameError = document.querySelector ("#first-name + span.error")
const email = document.getElementById ("email");
const emailError = document.querySelector("#email + span.error");
const pwd = document.getElementById ("password");
const pwdError = document.querySelector ("#password + span.error")
const pwdConfirm = document.getElementById ("confirm-pw")
const pwdConfirmError = document.querySelector ("#confirm-pw + span.error")

//First Name Validation
  //when clicked upon
  firstName.addEventListener ("focus", (event) => {
    if (!firstName.validity.valid) {
      firstName.className = "name error";
    }
  });

  //during input
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

  // when tabbed out or clicked on another input field
firstName.addEventListener ("blur", (event) => {
  if (!firstName.validity.valid) {
    firstNameError.className = "error active"
    firstNameError.textContent ="this field is required";
  }
});

//email validation
email.addEventListener ("input", (event) => {
  if (email.validity.valid && email.value.trim() !== "") {
    emailError.className = "error" 
    emailError.textContent ="awesome";
    email.className = "";
  } else {
    emailError.className = "error active"
    emailError.textContent ="this field is required";
    email.className = "name error";
  }
});

email.addEventListener ("focus", (event) => {
  if (!email.validity.valid) {
    email.className = "name error";
  }
});

email.addEventListener ("blur", (event) => {
  if (!email.validity.valid) {
    emailError.className = "error active"
    emailError.textContent ="this field is required";
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