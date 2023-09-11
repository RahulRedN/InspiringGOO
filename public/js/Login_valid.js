var form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;
  let checkbox1 = document.querySelector("#val1").checked;
  let checkbox2 = document.querySelector("#val2").checked;
  console.log(username, password, checkbox1, checkbox2);

  let error = document.querySelector("#wrong_info");

  if (!username || !password || (!checkbox1 && !checkbox2)) {
    error.innerHTML = "Please fill all the fields";
    return false;
  }

  const data = {
    username: username,
    password: password,
    WhoAreYou: checkbox1 ? "student" : "jobseeker",
    };

    fetch("/Login", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((data)=>{
        if(data.status == 401){
            error.innerHTML = "Invalid Credentials";
            return false;
        }
    })

  error.innerHTML = "";
  return true;
});

const toggleMenuOpen = () => document.body.classList.toggle("open");
