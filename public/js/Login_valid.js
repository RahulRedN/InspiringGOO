const valid_Login = async (e) => {
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;
  let checkbox1 = document.querySelector("#val1").checked;
  let checkbox2 = document.querySelector("#val2").checked;

  let error = document.querySelector("#wrong_info");

  if (!username || !password || (!checkbox1 && !checkbox2)) {
    error.innerHTML = "Please fill all the fields";
    return false;
  }

  let WhoAreYou = checkbox1 ? "student" : "jobseeker";

  try {
    fetch(
      `/api/verify?username=${username}&password=${password}&WhoAreYou=${WhoAreYou}`
    )
      .then((res) => res.json())
      .then((data1) => {
        if (data1.status === 401) {
          error.innerHTML = "Invalid Credentials";
          return false;
        }
        error.innerHTML = "";
      });
  } catch (error) {
    console.log(error);
  }

  error.innerHTML = "";
  return true;
};

const toggleMenuOpen = () => document.body.classList.toggle("open");
