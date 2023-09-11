const popupModal = async (objectId) => {
  const modelBox = document.querySelector("#model");
  try {
    const response = await fetch(`/api/getJob?id=${objectId}`);
    const Job = await response.json();
    let pmonth = Math.floor(Job.Salary / 12);
    let skills = "";
    let responsibilities = "";
    Job.Skills.forEach((skill) => {
      skills += `<li>${skill}</li>`;
    });
    Job.Responsibilities.forEach((Res) => {
      responsibilities += `<li>${Res}</li>`;
    });
    modelBox.innerHTML = `<div class="popup-container" id="popup-container">
        <div class="popup">
          <div class="button">
              <button type="submit" onclick="popupclose()">
                <i class="fa-solid fa-arrow-left" id="button-back" style="font-size: 1rem;"></i></button>
                <h1>${Job.Company_Name}</h1>
          </div>
        
          <div class="pop-content">
            <h2>${Job.Job_Name}</h2>
            <p>${Job.Job_Description}</p>
            <h3>Required Skills:</h3>
            <ul>
              ${skills}
            </ul>
            <h3>Salary:</h3>
            <p>${Job.Salary}</p>
            <h3>Perks:</h3>
            <ul>
              <li>Health insurance</li>
              <li>Paid time off</li>
              <li>Retirement savings plan</li>
              <li>Employee discounts</li>
            </ul>
            <h3>Number of openings:</h3> <p>${Job.Vacancies}</p>
            
        
            <h3>Key responsibilities:</h3>
            <ul>
              ${responsibilities}
               </ul>

            <h3>Earn certifications in these skills:</h3>
            <ul>
              <li>Learn Business Communication</li>
            </ul>
            <h3>Salary Probation:</h3>
        
            <ul>
              <li>Duration:${Job.Duration} months</li>
              <li>Salary during probation: ${pmonth}/month </li>
            </ul>
          </div>
          <form method="post">
            <div class="button1">
              <button type="submit" name="apply" value="${Job._id}">Apply Now</button> 
            </div>
            
          </form>
        </div> 
    </div>`;
    popup();
  } catch (err) {
    console.error(err);
  }
};

function popup() {
  let popUp = document.getElementById("popup-container");
  if (popUp) {
    popUp.classList.toggle("open-popup");
    window.scrollTo({
      top: 99,
    });
    document.body.style.overflow = "hidden";
  } else {
  }
}

function popupclose() {
  let popUp = document.getElementById("popup-container");
  const modal = document.querySelector("#modal");
  popUp.classList.toggle("open-popup");
  document.body.style.overflow = "auto";
}

function iterateSkills(arr) {
  let str = "";
  arr.forEach((ele) => {
    str += `<div class="val">
            ${ele}
          </div>`;
  });

  return str;
}

let isLoading = false;
let allLoaded = false;

function isPageAtBottom() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;
  const documentHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );

  return scrollTop + windowHeight >= documentHeight;
}
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector("#search-input");
  let debounceTimer;

  searchInput.addEventListener("input", function () {
    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(getSearch, 1000);
  });

  const getSearch = async () => {
    const dropdown = document.getElementsByClassName("dropdown")[0];
    const value = searchInput.value.trim();
    const alphaRegex = /^[a-zA-Z0-9+#]*/;
    if (value != "" && alphaRegex.test(value)) {
      try {
        const response = await fetch(`/api/getJobSearch?name=${value}`);
        const data = await response.json();
        dropdown.innerHTML = "";
        if (data.length == 0) {
          dropdown.innerHTML = "No Jobs Found!";
          return;
        }
        data.forEach((obj, idx) => {
          dropdown.innerHTML += `<tr onclick="popupModal('${obj._id}')"><td>${obj.Company_Name}</td><td>${obj.Job_Name}</td><td>$${obj.Salary}</td></tr>`;
        });
      } catch (err) {
        console.error(err);
      }
    } else {
      dropdown.innerHTML = "";
    }
  };

  let start = 6;
  const cardBox = document.getElementsByClassName("cards")[0];

  const loadMore = async (e) => {
    try {
      const response = await fetch(`/api/getMoreJobs?s_idx=${start}`);
      const data = await response.json();
      if (data.length === 0) {
        allLoaded = true;
      }
      data.forEach((obj, idx) => {
        cardBox.innerHTML += `<div class="card">
            <div class="img">
              <img src="/resources/placement.jpg" alt="" style="width: 25vh; height: 25vh" />
            </div>
            <div class="content" style="width: 100%">
              <h2 class="cname">${obj.Company_Name}</h2>
              <div class="info">
                <h3 class="jobname" style="font-style: normal; color: rgb(80, 80, 80)">
                    ${obj.Job_Name}
                </h3>
                <div class="roles">
                  ${iterateSkills(obj.Skills)}
                </div>
              </div>
        
              <div class="Jar" style="  background-color: rgb(168, 168, 168); 
              width: 100%;
              max-height: 10px;
              border-radius: 100px;">
                <div class="bar" style="  background-color: rgb(27, 80, 224);
                color: white;
                max-height: 10px;
                text-align: right;
                border-radius: 100px;
                width: ${
                  ((obj.Total - obj.Vacancies) / obj.Total) * 100
                }%;">.</div>
              </div>
              <br />
              <span> ${obj.Vacancies} out of ${obj.Total}</span>
              <br />
              <div class="Period" style="width: 100%">
                <div class="calender-full">
                  <div class="calender">
                    <img src="/resources/calendar.png" style="max-width: 1.2rem" />
                    <span>Duration</span>
                  </div>
                  <p style="display: flex; align-items: flex-start">${
                    obj.Duration
                  }</p>
                </div>
        
                <div class="stipend-full">
                  <div class="stipend">
                    <img src="/resources/money-bag.png" style="max-width: 1.2rem" />
                    <span>Stipend</span>
                  </div>
                  <p style="display: flex; align-items: flex-start">$${
                    obj.Salary
                  }</p>
                </div>
              </div>
        

            </div>
            <div class="button">
              <div class="btn">
                <p><a onclick="popupModal('${obj._id}')">View Details</a></p>
              </div>
            </div>
          </div>`;
      });
      start += 6;
      setTimeout(function () {
        isLoading = false;
      }, 1000);
    } catch (err) {
      console.error(err);
    }
  };


  window.addEventListener("scroll", function (e) {
    const loader = document.querySelector("#loader");
    if (isPageAtBottom() && !isLoading && !allLoaded) {
      isLoading = true;
      loader.style.visibility = "visible";
      loadMore();
      setTimeout(() => {
        loader.style.visibility = "hidden";
      }, 500);
    }
  });
});
