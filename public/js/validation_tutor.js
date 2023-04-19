const form = document.querySelector("form");
const alphaRegex = /^[a-zA-Z]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{3,}$/;
const mobileRegex = /^\d{10}$/;
const regexPass = /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;
const validation_contact = document.getElementById("validations-contact");
const validation_personal = document.getElementById("validation-personal");
const validation_background = document.getElementById("validation-background");
const validation_login = document.getElementById("validation-login");

function firstName(){
  const radios = document.getElementsByName("salutation");
  const fnameInput = form.querySelector('input[name="fname"]');
  const genderInput = document.querySelector('input[name="gender"]:checked');

  if (!genderInput) {
    validation_personal.innerHTML = "<i class='fa-solid fa-exclamation'></i> Please select your gender";
  }

  let isSalutationSelected = false;
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      isSalutationSelected = true;
      break;
    }
  }
  if (!isSalutationSelected) {
    validation_contact.innerHTML = "<i class='fa-solid fa-exclamation'></i> Please select a salutation.";
    return false;
  }

  if (fnameInput.value.trim() === "") {
    validation_contact.innerHTML = "<i class='fa-solid fa-exclamation'></i> Please enter your First Name.";
    fnameInput.classList.add("not_valid");
    fnameInput.focus();
    return false;
  }

  if (!alphaRegex.test(fnameInput.value.trim())) {
    validation_contact.innerHTML = "<i class='fa-solid fa-exclamation'></i> Please enter only alphabetic characters for your First Name.";
    fnameInput.classList.add("not_valid");
    fnameInput.focus();
    return false;
  }

  validation_contact.innerHTML = "&nbsp;";
  fnameInput.classList.remove("not_valid");
}

function lastName(){
  const snameInput = form.querySelector('input[name="sname"]');
  if (snameInput.value.trim() === "") {
    validation_contact.innerHTML = "<i class='fa-solid fa-exclamation'></i> Please enter your Surname.";
    snameInput.classList.add("not_valid");
    snameInput.focus();
    return false;
  }
  if (!alphaRegex.test(snameInput.value.trim())) {
    validation_contact.innerHTML = "<i class='fa-solid fa-exclamation'></i> Please enter only alphabetic characters for your First Name.";
    snameInput.classList.add("not_valid");
    snameInput.focus();
    return false;
  }

  snameInput.classList.remove("not_valid");
  validation_contact.innerHTML = "&nbsp;";
}

function email(){
  const emailInput = document.getElementById("emailID");

  if (emailInput.value.trim() === "") {
    validation_contact.innerHTML = "<i class='fa-solid fa-exclamation'></i> Email is required.";
    emailInput.classList.add("not_valid");
    return false;
  } else if (!emailRegex.test(emailInput.value.trim())) {
    validation_contact.innerHTML = "<i class='fa-solid fa-exclamation'></i> Please enter a valid email address.";
    emailInput.classList.add("not_valid");
    return false;
  }

  emailInput.classList.remove("not_valid");
  validation_contact.innerHTML = "&nbsp;";
}

function mobile_valid() {
  let mobileInput = document.getElementById("mobile");
  console.log("mobile");

  if (mobileInput.value.trim() === "") {
    validation_contact.innerHTML = "<i class='fa-solid fa-exclamation'></i> Mobile number is required.";
    mobileInput.classList.add("not_valid");
    return false;
  } else if (!mobileRegex.test(mobileInput.value.trim())) {
    validation_contact.innerHTML = "<i class='fa-solid fa-exclamation'></i> Please enter a valid mobile number.";
    mobileInput.classList.add("not_valid");
    return false;
  }

  validation_contact.innerHTML = "&nbsp;";
  mobileInput.classList.remove("not_valid");
}

function date_valid(){
  const dobInput = document.querySelector('input[name="DOB"]');
  const countrySelect = document.querySelector("#country");
  if (dobInput.value === "") {
    validation_personal.innerHTML = "<i class='fa-solid fa-exclamation'></i> Please enter your date of birth";
    dobInput.classList.add("not_valid");
    return false;
  } else {
    const parsedDate = new Date(dobInput.value);
    if (isNaN(parsedDate)) {
      validation_personal.innerHTML = "<i class='fa-solid fa-exclamation'></i> Please enter a valid date of birth";
      dobInput.classList.add("not_valid");
      return false;
    }
    else if(2023 - parsedDate.getFullYear() < 18){
      validation_personal.innerHTML = "<i class='fa-solid fa-exclamation'></i> Age should be greater than 18";
      dobInput.classList.add("not_valid");
      return false;
    }
  }

  if (countrySelect.value === "0") {
    countrySelect.classList.add("not_valid");
    return false;
  }

  validation_personal.innerHTML = "&nbsp;";
  dobInput.classList.remove("not_valid");
}

function country_valid(){
  const countrySelect = document.querySelector("#country");
  if (countrySelect.value === "0") {
    validation_personal.innerHTML = "<i class='fa-solid fa-exclamation'></i> Select a Country"
    countrySelect.classList.add("not_valid");
    return false;
  }

  countrySelect.classList.remove("not_valid");
  validation_personal.innerHTML = "&nbsp;";
}

function qual_valid(){
  const degree = document.querySelector('select[name="qual"]');

  if (degree.value === "0") {
      validation_background.innerHTML = "<i class='fa-solid fa-exclamation'></i> Please select a degree.";
      degree.classList.add("not_valid");
    return false;
  }
  
  validation_background.innerHTML = "&nbsp;"
  degree.classList.remove("not_valid");
}

function instName(){
  const instName = document
    .querySelector('input[name="InstName"]');

    if (instName.value.trim() === "") {
      validation_background.innerHTML = "<i class='fa-solid fa-exclamation'></i> Please enter an institute name.";
      instName.classList.add("not_valid");
      return false;
    }else if(!alphaRegex.test(instName.value.trim())){
      validation_background.innerHTML = "<i class='fa-solid fa-exclamation'></i> Please enter a valid institute name.";
      instName.classList.add("not_valid");
      return false;
    }
  instName.classList.remove("not_valid");
  validation_background.innerHTML = "&nbsp;";
}

function username_valid(){
  const username = document.querySelector("#username");

  if (username.value.trim() === "") {
      validation_login.innerHTML = "<i class='fa-solid fa-exclamation'></i> Please enter a Username.";
      username.classList.add("not_valid");
    return false;
  }
  validation_login.innerHTML = "&nbsp;"
  username.classList.remove("not_valid");
}

function pass1_valid(){
  const password1 = document.querySelector("#pass1");
  if (password1.value.trim() === "") {
    validation_login.innerHTML = "<i class='fa-solid fa-exclamation'></i> Please enter password.";
    password1.classList.add("not_valid");
    return false;
  } else if (!regexPass.test(password1.value)) {
    validation_login.innerHTML = "<i class='fa-solid fa-exclamation'></i> Password incorrect format. Contains at least one special character,one smallcase character,one uppercase character and has a minimum length of 8 characters:";
    password1.classList.add("not_valid");
    return false;
  }
  password1.classList.remove("not_valid");
  validation_login.innerHTML = "&nbsp;"
}

function pass2_valid(){
  const password1 = document.querySelector("#pass1");
  const password2 = document.querySelector("#pass2");
  if (password2.value.trim() === "") {
    validation_login.innerHTML = "<i class='fa-solid fa-exclamation'></i> Please enter password.";
    password2.classList.add("not_valid");
    return false;
  } else if (password1.value != password2.value) {
    validation_login.innerHTML = "<i class='fa-solid fa-exclamation'></i> Enter correct Password.";
    password2.classList.add("not_valid");
    return false;
  }

  password2.classList.remove("not_valid");
  validation_login.innerHTML = "&nbsp;"
}

function validateForm() {
  // valid for contact information
  const radios = document.getElementsByName("salutation");

  const fnameInput = form.querySelector('input[name="fname"]');
  const snameInput = form.querySelector('input[name="sname"]');
  
  const emailInput = document.getElementById("emailID");
  const mobileInput = document.getElementById("mobile");
  // end of contact information

  // valid for perosnal information
  const genderInput = document.querySelector('input[name="gender"]:checked');
  const dobInput = document.querySelector('input[name="DOB"]');
  const countrySelect = document.querySelector("#country");

  const degree = document.querySelector('select[name="qual"]');
  const instName = document
    .querySelector('input[name="InstName"]')
    .value.trim();
  const yoa = document.querySelector('input[name="YOA"]').value;
  const yoc = document.querySelector('input[name="YOC"]').value;

  //Validations of Username
  const username = document.querySelector("#username");
  const password1 = document.querySelector("#pass1");
  const password2 = document.querySelector("#pass2");

  // valid for contact information

  // Loop through the radio buttons to check if one is selected
  let isSalutationSelected = false;
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      isSalutationSelected = true;
      break;
    }
  }

  // Check if a salutation is selected
  if (!isSalutationSelected) {
    alert("Please select a salutation.");
    return false; // prevent form submission
  }

  // Check if required fields are filled in
  if (fnameInput.value.trim() === "") {
    alert("Please enter your First Name.");
    fnameInput.focus();
    return false;
  }

  if (snameInput.value.trim() === "") {
    alert("Please enter your Surname.");
    snameInput.focus();
    return false;
  }

  if (emailInput.value.trim() === "") {
    alert("Email is required.");
    return false;
  }

  // Check mobile input
  if (mobileInput.value.trim() === "") {
    alert("Mobile number is required.");
    return false;
  }
  // end of contatct information

  // Validation for personal information

  // Check if gender is selected
  if (!genderInput) {
    alert("Please select your gender");
    return false;
  }

  // Check if nationality is selected
  if (countrySelect.value === "0") {
    alert("Please select your nationality");
    return false;
  }

  // Check if date of birth is entered and is valid
  if (dobInput.value === "") {
    alert("Please enter your date of birth");
    return false;
  }

  if (degree.value === "0") {
    alert("Please select a degree.");
    return false;
  }

  if (instName.value.trim() === "") {
    alert("Please enter an institute name.");
    return false;
  }

  if (yoa === "") {
    alert("Please enter the year of admission.");
    return false;
  } else if (yoa < 2000 || yoa > 2024) {
    alert("Please enter a valid Year.");
    return false;
  }

  if (yoc === "") {
    alert("Please enter the year of completion.");
    return false;
  } else if (yoc < 2000 || yoc > 2024) {
    alert("Please enter a valid Year.");
    return false;
  }

  // Check if the year of admission is before the year of completion
  if (yoa >= yoc) {
    alert("The year of admission cannot be after the year of completion.");
    return false;
  }

  if (username.value.trim() === "") {
    alert("Please enter a Username.");
    return false;
  }

  if (password1.value.trim() === "") {
    alert("Please enter password.");
    return false;
  }

  if (password2.value.trim() === "") {
    alert("Please confirm password.");
    return false;
  }

  return true;
}
