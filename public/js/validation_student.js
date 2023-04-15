function validateForm() {
  // valid for contact information
  const form = document.querySelector("form");
  const radios = document.getElementsByName("salutation");

  const fnameInput = form.querySelector('input[name="fname"]');
  const snameInput = form.querySelector('input[name="sname"]');
  //const emailInput = form.querySelector('input[name="emailID"]');
  //const mobileInput = form.querySelector('input[name="mobile"]');
  const addressInput = form.querySelector('input[name="address"]');

  const emailInput = document.getElementById("emailID");
  const mobileInput = document.getElementById("mobile");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const mobileRegex = /^\d{10}$/;

  const alphaRegex = /^[a-zA-Z]+$/;

  // end of contact information

  // valid for perosnal information

  //const form = document.querySelector('form');

  const genderInput = document.querySelector('input[name="gender"]:checked');
  const countrySelect = document.querySelector("#country");
  const maritalStatusSelect = document.querySelector("#marital_status");
  const dobInput = document.querySelector('input[name="DOB"]');

  // end of personal information

  // valid for background  information  upto postgraduation

  const degree = document.querySelector('select[name="qual"]').value;
  const instName = document
    .querySelector('input[name="InstName"]')
    .value.trim();
  const yoa = document.querySelector('input[name="YOA"]').value;
  const yoc = document.querySelector('input[name="YOC"]').value;

  // end of background  information  upto postgraduation

  // end of additional  information

  // Validation for skills

  const skill = document.querySelector("#skill");

  //  end of skills

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

  if (!alphaRegex.test(fnameInput.value.trim())) {
    alert("Please enter only alphabetic characters for your First Name.");
    fnameInput.focus();
    return false;
  }

  if (snameInput.value.trim() === "") {
    alert("Please enter your Surname.");
    snameInput.focus();
    return false;
  }
  if (!alphaRegex.test(snameInput.value.trim())) {
    alert("Please enter only alphabetic characters for your First Name.");
    snameInput.focus();
    return false;
  }

  if (emailInput.value.trim() === "") {
    alert("Email is required.");
    return false;
  } else if (!emailRegex.test(emailInput.value.trim())) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Check mobile input
  if (mobileInput.value.trim() === "") {
    alert("Mobile number is required.");
    return false;
  } else if (!mobileRegex.test(mobileInput.value.trim())) {
    alert("Please enter a valid mobile number.");
    return false;
  }

  if (addressInput.value.trim() === "") {
    alert("Please enter your Address.");
    addressInput.focus();
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

  // Check if marital status is selected
  if (maritalStatusSelect.value === "") {
    alert("Please select your marital status");
    return false;
  }

  // Check if date of birth is entered and is valid
  if (dobInput.value === "") {
    alert("Please enter your date of birth");
    return false;
  } else {
    const parsedDate = Date.parse(dobInput.value);
    if (isNaN(parsedDate)) {
      alert("Please enter a valid date of birth");
      return false;
    }
  }

  // end of personal information

  // valid for background  information  upto postgraduation

  if (degree === "0") {
    alert("Please select a degree.");
    return false;
  }

  if (instName === "") {
    alert("Please enter an institute name.");
    return false;
  }

  // if (subject === "") {
  //   alert("Please select a field of specialization.");
  //   return false;
  // }

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
  if (yoa > yoc) {
    alert("The year of admission cannot be after the year of completion.");
    return false;
  }

  // end of background  information  upto postgraduation

  //valid for background  information  postgraduation

  // end of additonal  information

  // Validation for skill

  if (skill.value.trim() === "") {
    alert("Please Enter skills");
    return false;
  }
  // end of skill

  // VALIDATION  FOR CERTIFICATES FILESS
  const certificates = document.querySelector("#certificates");

  if (!certificates) {
    alert("Please upload certificates");
    return false;
  }

  // All validation checks passed, allow form submission

  //login
  if (username.value.trim() === "") {
    alert("Please enter a Username.");
    return false;
  }

  let regexPass = /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;
  if (password1.value.trim() === "") {
    alert("Please enter password.");
    return false;
  } else if (!regexPass.test(password1.value)) {
    alert(
      "Password incorrect format. Contains at least one special character,one smallcase character,one uppercase character and has a minimum length of 8 characters:"
    );
    return false;
  }

  if (password2.value.trim() === "") {
    alert("Please confirm password.");
    return false;
  }

  if (password1.value != password2.value) {
    alert("Enter correct Password.");
    return false;
  }
  //return valid;

  return true;
}
