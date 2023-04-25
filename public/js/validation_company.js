const alphaRegex = /^[a-zA-Z]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const mobileRegex = /^\d{10}$/;
const regexPass = /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;

function firstName(){
    var form = document.querySelector("form");
    const validation_contact = document.getElementById("validation-details");
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

  function email(){
    const emailInput = document.getElementById("emailID");
    const validation_contact = document.getElementById("validation-details");
  
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
    const validation_contact = document.getElementById("validation-details");
  
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
    const validation_contact = document.getElementById("validation-details");
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

  function country_valid(){
    const countrySelect = document.querySelector("#country");
    const validation_personal = document.getElementById("validation-details");
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

  function validateForm(){
    if(firstName()){
        if(email()){
            if(mobile_valid()){
                if(address_valid()){
                    if(country_valid()){
                        if(username_valid()){
                            if(pass1_valid()){
                                if(pass2_valid()){
                                    return true;
                                }else{
                                    return false;
                                }
                            }else{
                                return false;
                            }
                        }
                    }else{
                        return false;
                    }
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }else{
            return false;
        }
    }
    else{
        return false;
    }
  }