const form = document.querySelector ("form");
const firstName = document.getElementById ("first-name");
const firstNameError = document.querySelector ("#first-name + span.error")
const email = document.getElementById ("email");
const emailError = document.querySelector("#email + span.error");
const pwd = document.getElementById ("password");
const pwdError = document.querySelector ("#password + span.error")
const pwdConfirm = document.getElementById ("confirm-pw")
const pwdConfirmError = document.querySelector ("#confirm-pw + span.error")

// PSEUDO CODE VALIDATION BEHAVIOUR
  // Required fields are marked so I will not validate too aggressively; so not red during focus when no input is given yet.
  // Once the user leaves the field (blur) and entry invalid > add blur event error "blur error" with error message showing and prevent submit
  // Once entry is valid > "error class" removes red border

// First Name Validation
firstName.addEventListener ("blur", () => {
  if (firstName.validity.valid && firstName.value.trim() !== "") {
    firstNameError.className = "valid";
  } else {
    firstNameError.className = "invalid entry";
    firstName.className = "invalid entry"
    firstNameError.textContent = "⚠ this field is required";
  }
});

// Mail Validation
email.addEventListener ("blur", () => {
  if (email.validity.valid) {
    emailError.className = "valid";
  } else {
    emailError.className = "invalid entry";
    email.className = "invalid entry";
    emailError.textContent = "⚠ a valid email is required";
  }
});


// //First Name Validation
//   //when clicked upon
//   firstName.addEventListener ("focus", (event) => {
//     if (!firstName.validity.valid) {
//       firstName.className = "name error";
//     }
//   });

//   //during input
// firstName.addEventListener ("input", (event) => {
//   if (firstName.validity.valid && firstName.value.trim() !== "") {
//     firstNameError.className = "error" 
//     firstNameError.textContent ="awesome";
//     firstName.className = "";
//   } else {
//     firstNameError.className = "error active"
//     firstNameError.textContent ="⚠ this field is required";
//     firstName.className = "name error";
//   }
// });

//   // when tabbed out or clicked on another input field
// firstName.addEventListener ("blur", (event) => {
//   if (!firstName.validity.valid) {
//     firstNameError.className = "error active"
//     firstNameError.textContent ="⚠ this field is required";
//   }
// });

// //email validation
// email.addEventListener ("input", (event) => {
//   if (email.validity.valid && email.value.trim() !== "") {
//     emailError.className = "error" 
//     emailError.textContent ="awesome";
//     email.className = "";
//   } else {
//     emailError.className = "error active"
//     emailError.textContent ="⚠ this field is required";
//     email.className = "name error";
//   }
// });

// email.addEventListener ("focus", (event) => {
//   if (!email.validity.valid) {
//     email.className = "name error";
//   }
// });

// email.addEventListener ("blur", (event) => {
//   if (!email.validity.valid) {
//     emailError.className = "error active"
//     emailError.textContent ="⚠ this field is required";
//   }
// });


// // email.addEventListener("blur", (event) => {
// //   console.log(event);

// //   if (email.validity.valid) {
// //     emailError.textContent = "";
// //     emailError.className = "error";
// //     email.className = "";
// //   } else {
// //     showError();
// //     event.preventDefault();
// //   }
// // });

// form.addEventListener ("submit", (event) => {
//   if (!email.validity.valid || !firstName.validity.valid) {
//     showError();
//     event.preventDefault();
//   }
// })

// function showError() {
//   if (email.validity.typeMismatch) {
//     emailError.className = "error active";
//     emailError.textContent = "⚠ Please enter a valid email adress";
//   } else {
//   emailError.className = "error active";
//   emailError.textContent = "⚠ this field is required";
//   }
// };