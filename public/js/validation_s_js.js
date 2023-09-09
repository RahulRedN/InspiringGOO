const alphaRegex = /^[a-zA-Z]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const mobileRegex = /^\d{10}$/;
const regexPass = /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;

const validation_experience = document.getElementById("validation-experience");

function firstName(){
  var form = document.querySelector("form");
  const validation_contact = document.getElementById("validation-contact");
  const fnameInput = form.querySelector('input[name="fname"]');

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
  return true;
}

function lastName(){
  var form = document.querySelector("form");
  const validation_contact = document.getElementById("validation-contact");
  const lnameInput = form.querySelector('input[name="lname"]');

  if (!(lnameInput.value.trim() === "") && !alphaRegex.test(lnameInput.value.trim())) {
    validation_contact.innerHTML = "<i class='fa-solid fa-exclamation'></i> Please enter only alphabetic characters for your Last Name.";
    lnameInput.classList.add("not_valid");
    lnameInput.focus();
    return false;
  }

  lnameInput.classList.remove("not_valid");
  validation_contact.innerHTML = "&nbsp;";
  return true;
}

function surName(){
  var form = document.querySelector("form");
  const validation_contact = document.getElementById("validation-contact");
  const snameInput = form.querySelector('input[name="sname"]');
  if (snameInput.value.trim() === "") {
    validation_contact.innerHTML = "<i class='fa-solid fa-exclamation'></i> Please enter your Surname.";
    snameInput.classList.add("not_valid");
    snameInput.focus();
    return false;
  }
  if (!alphaRegex.test(snameInput.value.trim())) {
    validation_contact.innerHTML = "<i class='fa-solid fa-exclamation'></i> Please enter only alphabetic characters for your Surname.";
    snameInput.classList.add("not_valid");
    snameInput.focus();
    return false;
  }

  snameInput.classList.remove("not_valid");
  validation_contact.innerHTML = "&nbsp;";
  return true;
}

function email(){
  const emailInput = document.getElementById("emailID");
  const validation_contact = document.getElementById("validation-contact");

  if (emailInput.value.trim() === "") {
    validation_contact.innerHTML = "<i class='fa-solid fa-exclamation'></i> Email is required.";
    emailInput.classList.add("not_valid");
    emailInput.focus();
    return false;
  } else if (!emailRegex.test(emailInput.value.trim())) {
    validation_contact.innerHTML = "<i class='fa-solid fa-exclamation'></i> Please enter a valid email address.";
    emailInput.classList.add("not_valid");
    emailInput.focus();
    return false;
  }

  emailInput.classList.remove("not_valid");
  validation_contact.innerHTML = "&nbsp;";
  return true;
}

function mobile_valid() {
  let mobileInput = document.getElementById("mobile");
  const validation_contact = document.getElementById("validation-contact");

  if (mobileInput.value.trim() === "") {
    validation_contact.innerHTML = "<i class='fa-solid fa-exclamation'></i> Mobile number is required.";
    mobileInput.classList.add("not_valid");
    mobileInput.focus();
    return false;
  } else if (!mobileRegex.test(mobileInput.value.trim())) {
    validation_contact.innerHTML = "<i class='fa-solid fa-exclamation'></i> Please enter a valid mobile number.";
    mobileInput.classList.add("not_valid");
    mobileInput.focus();
    return false;
  }

  validation_contact.innerHTML = "&nbsp;";
  mobileInput.classList.remove("not_valid");
  return true;
}

function address_valid(){
  var form = document.querySelector("form");
  const validation_contact = document.getElementById("validation-contact");
  const addressInput = form.querySelector('input[name="address"]');
  if (addressInput.value.trim() === "") {
    validation_contact.innerHTML= "<i class='fa-solid fa-exclamation'></i>Please enter your Address.";
    addressInput.classList.add("not_valid");
    addressInput.focus();
    return false;
  }

  validation_contact.innerHTML = "&nbsp;";
  addressInput.classList.remove("not_valid");
  return true;
}

function date_valid(){
  const dobInput = document.querySelector('input[name="DOB"]');
  const validation_personal = document.getElementById("validation-personal");
  if (dobInput.value === "") {
    validation_personal.innerHTML = "<i class='fa-solid fa-exclamation'></i> Please enter your date of birth";
    dobInput.classList.add("not_valid");
    dobInput.focus();
    return false;
  } else {
    const parsedDate = new Date(dobInput.value);
    if (isNaN(parsedDate)) {
      validation_personal.innerHTML = "<i class='fa-solid fa-exclamation'></i> Please enter a valid date of birth";
      dobInput.classList.add("not_valid");
      dobInput.focus();
      return false;
    }
    else if(2023 - parsedDate.getFullYear() < 18){
      validation_personal.innerHTML = "<i class='fa-solid fa-exclamation'></i> Age should be greater than 18";
      dobInput.classList.add("not_valid");
      dobInput.focus();
      return false;
    }
  }
  validation_personal.innerHTML = "&nbsp;";
  dobInput.classList.remove("not_valid");
  return true;
}

function country_valid(){
  const countrySelect = document.querySelector("#country");
  const validation_personal = document.getElementById("validation-personal");
  if (countrySelect.value === "0") {
    validation_personal.innerHTML = "<i class='fa-solid fa-exclamation'></i> Select a Country"
    countrySelect.classList.add("not_valid");
    countrySelect.focus();
    return false;
  }

  countrySelect.classList.remove("not_valid");
  validation_personal.innerHTML = "&nbsp;";
  return true;
}

function marital_valid(){
  const marital = document.querySelector("#marital_status");
  const validation_personal = document.getElementById("validation-personal");
  if (marital.value === "0") {
    validation_personal.innerHTML = "<i class='fa-solid fa-exclamation'></i> Select Maritial Status."
    marital.classList.add("not_valid");
    marital.focus();
    return false;
  }

  marital.classList.remove("not_valid");
  validation_personal.innerHTML = "&nbsp;";
  return true;
}

function qual_valid(){
  const degree = document.querySelector('select[name="qual"]');
  const validation_background = document.getElementById("validation-background");

  if (degree.value === "0") {
      validation_background.innerHTML = "<i class='fa-solid fa-exclamation'></i> Please select a degree.";
      degree.classList.add("not_valid");
      degree.focus();
    return false;
  }
  
  validation_background.innerHTML = "&nbsp;"
  degree.classList.remove("not_valid");
  return true;
}

function instName_valid(){
  const instName = document
    .querySelector('input[name="InstName"]');
    const validation_background = document.getElementById("validation-background");
    if (instName.value.trim() === "") {
      validation_background.innerHTML = "<i class='fa-solid fa-exclamation'></i> Please enter an institute name.";
      instName.classList.add("not_valid");
      instName.focus();
      return false;
    }else if(!alphaRegex.test(instName.value.trim())){
      validation_background.innerHTML = "<i class='fa-solid fa-exclamation'></i> Please enter a valid institute name.";
      instName.classList.add("not_valid");
      instName.focus();
      return false;
    }
  instName.classList.remove("not_valid");
  validation_background.innerHTML = "&nbsp;";
  return true;
}

function skill_valid(){
  var form = document.querySelector("form");
  const validation_experience = document.getElementById("validation-experience");
  const skill = form.querySelector('input[name="skill"]');
  if (skill.value.trim() === "") {
    validation_experience.innerHTML= "<i class='fa-solid fa-exclamation'></i>Please enter your Skills.";
    skill.classList.add("not_valid");
    skill.focus();
    return false;
  }

  validation_experience.innerHTML = "&nbsp;";
  skill.classList.remove("not_valid");
  return true;
}

function username_valid(){
  const username = document.querySelector("#username");
  const validation_login = document.getElementById("validation-login");

  if (username.value.trim() === "") {
      validation_login.innerHTML = "<i class='fa-solid fa-exclamation'></i> Please enter a Username.";
      username.classList.add("not_valid");
      username.focus();
    return false;
  }
  validation_login.innerHTML = "&nbsp;"
  username.classList.remove("not_valid");
  return true;
}

function pass1_valid(){
  const password1 = document.querySelector("#pass1");
  const validation_login = document.getElementById("validation-login");
  if (password1.value.trim() === "") {
    validation_login.innerHTML = "<i class='fa-solid fa-exclamation'></i> Please enter password.";
    password1.classList.add("not_valid");
    password1.focus();
    return false;
  } else if (!regexPass.test(password1.value)) {
    validation_login.innerHTML = "<i class='fa-solid fa-exclamation'></i> Password incorrect format. Contains at least one special character,one smallcase character,one uppercase character and has a minimum length of 8 characters:";
    password1.classList.add("not_valid");
    password1.focus();
    return false;
  }
  password1.classList.remove("not_valid");
  validation_login.innerHTML = "&nbsp;"
  return true;
}

function pass2_valid(){
  const validation_login = document.getElementById("validation-login");
  const password1 = document.querySelector("#pass1");
  const password2 = document.querySelector("#pass2");
  if (password2.value.trim() === "") {
    validation_login.innerHTML = "<i class='fa-solid fa-exclamation'></i> Please enter password.";
    password2.classList.add("not_valid");
    password2.focus();
    return false;
  } else if (password1.value != password2.value) {
    validation_login.innerHTML = "<i class='fa-solid fa-exclamation'></i> Enter correct Password.";
    password2.classList.add("not_valid");
    password2.focus();
    return false;
  }

  password2.classList.remove("not_valid");
  validation_login.innerHTML = "&nbsp;"
  return true;
}

function validateForm() {
  const radios = document.getElementsByName("salutation");
  const validation_personal = document.getElementById("validation-personal");
  const validation_contact = document.getElementById("validation-contact");
  const validation_background = document.getElementById("validation-background");

  const contact_block = document.getElementById("contact-info");
  const personal_block = document.getElementById("personal-info");
  const background_block = document.getElementById("background-info");
  const experience_block = document.getElementById("experience");
  const login_block = document.getElementById("login-details");

  const genderInput = document.querySelector('input[name="gender"]:checked');

  const dobInput = document.querySelector('input[name="DOB"]');
  const yoa = document.querySelector('input[name="YOA"]');
  const yoc = document.querySelector('input[name="YOC"]');

  // valid for contact information

  // Loop through the radio buttons to check if one is selected
  let isSalutationSelected = false;
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      isSalutationSelected = true;
      break;
    }
  }

  if (!isSalutationSelected) {
    validation_contact.innerHTML = "<i class='fa-solid fa-exclamation'></i> Please select a salutation.";
    contact_block.scrollIntoView();
    return false;
  }
  validation_contact.innerHTML = "&nbsp;";

  if(!firstName()){
    contact_block.scrollIntoView({behavior: 'smooth'}, true);
    return false;
  }

  if(!surName()){
    contact_block.scrollIntoView({behavior: 'smooth'}, true);
    return false;
  }

  if(!email()){
    contact_block.scrollIntoView({behavior: 'smooth'}, true);
    return false;
  }

  if(!mobile_valid()){
    contact_block.scrollIntoView({ behavior: 'smooth' }, true);
    return false;
  }

  if(!address_valid()){
    contact_block.scrollIntoView({behavior: 'smooth'}, true);
    return false;
  }

  if (!genderInput) {
    validation_personal.innerHTML = "<i class='fa-solid fa-exclamation'></i> Please select your gender";
    personal_block.scrollIntoView({behavior: 'smooth'}, true);
    return false;
  }
  validation_personal.innerHTML = "&nbsp;";

  if(!date_valid()){
    personal_block.scrollIntoView({behavior: "smooth"}, true);
    return false;
  }

  if(!country_valid()){
    personal_block.scrollIntoView({behavior: "smooth"}, true);
    return false;
  }

  if(!marital_valid()){
    personal_block.scrollIntoView({behavior: "smooth"}, true);
    return false;
  }


  if(!qual_valid()){
    background_block.scrollIntoView({behavior: "smooth"}, true);
    return false;
  }

  if(!instName_valid()){
    background_block.scrollIntoView({behavior: "smooth"}, true);
    return false;
  }

  const parsedDate = new Date(dobInput.value);

  if (yoa.value === "") {
    background_block.scrollIntoView({behavior: "smooth"}, true);
    validation_background.innerHTML = "<i class='fa-solid fa-exclamation'></i> Please enter the year of admission.";
    yoa.focus();
    return false;
  } else if ((yoa.value-parsedDate.getFullYear() <= 15) || yoa.value > 2024) {
    background_block.scrollIntoView({behavior: "smooth"}, true);
    validation_background.innerHTML = "<i class='fa-solid fa-exclamation'></i> Please enter a valid Year.";
    yoa.focus();
    return false;
  }
  validation_background.innerHTML = "&nbsp;";

  if (yoc.value === "") {
    background_block.scrollIntoView({behavior: "smooth"}, true);
    validation_background.innerHTML = "<i class='fa-solid fa-exclamation'></i> Please enter the year of completion.";
    yoc.focus();
    return false;
  } else if ((yoa.value > yoc.value) || (yoc.value-yoa.value <= 2)) {
    validation_background.innerHTML = "<i class='fa-solid fa-exclamation'></i> Please enter valid Year of completion";
    background_block.scrollIntoView({behavior: "smooth"}, true);
    yoc.focus();
    return false;
  }
  validation_background.innerHTML = "&nbsp;";

  if(!skill_valid()){
    experience_block.scrollIntoView({behavior: "smooth"}, true);
    return false;
  }

  if(!username_valid()){
    login_block.scrollIntoView({behavior: "smooth"}, true);
    return false;
  }

  if(!pass1_valid()){
    login_block.scrollIntoView({behavior: "smooth"}, true);
    return false;
  }

  if(!pass2_valid()){
    login_block.scrollIntoView({behavior: "smooth"}, true);
    return false;
  }

  return true;
}
