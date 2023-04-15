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

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{3,}$/;
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

  const degree = document.querySelector('select[name="Degree"]');
  const instName = document
    .querySelector('input[name="InstName"]')
    .value.trim();
  const yoa = document.querySelector('input[name="YOA"]').value;
  const yoc = document.querySelector('input[name="YOC"]').value;

  // end of background  information  upto postgraduation

  //valid for background  information  postgraduation not include bed med

  const degree2 = document.querySelector("select[name=Degree2]");
  const instName2 = document.querySelector("input[name=InstName2]");
  const yoa2 = document.querySelector("input[name=YOA2]").value;
  const yoc2 = document.querySelector("input[name=YOC2]").value;

  // end of background  information   postgraduation not include bed and med

  // Validation for additional  information
  const degree3 = document.querySelector("select[name=Degree3]");
  const instName3 = document.querySelector("input[name=InstName3]");
  const yoa3 = document.querySelector('[name="YOA3"]').value;
  const yoc3 = document.querySelector('[name="YOC3"]').value;

  // end of additional  information

  // Validation for skills

  const exp = document.querySelector("#exp");
  const skill = document.querySelector("#skill");
  const availability = document.querySelector("#availability");

  //  end of skills
  const courseName = document.querySelector('[name="course"]');

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

  if (degree.value === "") {
    alert("Please select a degree.");
    return false;
  }

  if (instName === "") {
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
  if (yoa > yoc) {
    alert("The year of admission cannot be after the year of completion.");
    return false;
  }

  // end of background  information  upto postgraduation

  //valid for background  information  postgraduation

  if (degree2.value === "0") {
    alert("Please select a degree.");
    degree2.focus();
    return false;
  }

  // Validate institute name

  if (instName2.value.trim() === "") {
    alert("Please enter an institute name.");
    instName2.focus();
    return false;
  }

  // Validate subject
  if (yoa2 === "") {
    alert("Please enter the year of admission.");
    return false;
  } else if (yoa2 < 2000 || yoa2 > 2024) {
    alert("Please enter a valid Year.");
    return false;
  }

  if (yoc2 === "") {
    alert("Please enter the year of completion.");
    return false;
  } else if (yoc2 < 2000 || yoc2 > 2024) {
    alert("Please enter a valid Year.");
    return false;
  }

  // Check if the year of admission is before the year of completion
  if (yoa2 > yoc2) {
    alert("The year of admission cannot be after the year of completion.");
    return false;
  }
  // end of background  information   postgraduation

  // Validation for additional  information
  if (degree3.value === "0") {
    alert("Please select a degree.");
    degree3.focus();
    return false;
  }

  // Validate institute name

  if (instName3.value.trim() === "") {
    alert("Please enter an institute name.");
    instName3.focus();
    return false;
  }

  if (yoa3 === "") {
    alert("Please enter the year of admission.");
    return false;
  } else if (yoa3 < 2000 || yoa3 > 2024) {
    alert("Please enter a valid Year.");
    return false;
  }

  if (yoc3 === "") {
    alert("Please enter the year of completion.");
    return false;
  } else if (yoc3 < 2000 || yoc3 > 2024) {
    alert("Please enter a valid Year.");
    return false;
  }

  // Check if the year of admission is before the year of completion
  if (yoa3 > yoc3) {
    alert("The year of admission cannot be after the year of completion.");
    return false;
  }

  // end of additonal  information

  // Validation for skill

  const dob = new Date(dobInput.value);
  const curr = new Date();

  if (curr.getFullYear() - dob.getFullYear() < exp.value || exp.value < 0) {
    alert("Please Enter a valid limit of Experience.");
    return false;
  }

  if (skill.value.trim() === "") {
    alert("Please Enter skills");
    return false;
  }
  if (availability.value === "0") {
    alert("Please select your availabity");
    return false;
  }
  // end of skill
  if (!courseName.value) {
    alert("Please enter the name of the course.");
    return false;
  }

  // VALIDATION  FOR CV FILESS

  const cvInput = document.querySelector('input[name="CV"]');
  const certificates = document.querySelector("#certificates");

  if (!cvInput.files[0]) {
    alert("Please upload a CV.");
    return false;
  }

  if (!certificates) {
    alert("Please upload certificates");
    return false;
  }

  // All validation checks passed, allow form submission
  //return valid;

  return true;
}
