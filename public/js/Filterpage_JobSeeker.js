function search() {
  const searchbox = document.getElementById("search-input").value.toLowerCase();
  console.log(searchbox);

  const res = document.querySelectorAll(".card");

  for (var i = 0; i < res.length; i++) {
    let match = res[i].getElementsByClassName("val")[0].innerText.toLowerCase();
    let match1 = res[i]
      .getElementsByClassName("val")[1]
      .innerText.toLowerCase();
    let match2 = res[i]
      .getElementsByClassName("val")[2]
      .innerText.toLowerCase();
    let match3 = res[i]
      .getElementsByClassName("val")[3]
      .innerText.toLowerCase();
    let match4 = res[i]
      .getElementsByClassName("jobname")[0]
      .innerText.toLowerCase();
    let match5 = res[i]
      .getElementsByClassName("cname")[0]
      .innerText.toLowerCase();
    console.log(match);

    if (
      match1.includes(searchbox) ||
      match.includes(searchbox) ||
      match2.includes(searchbox) ||
      match3.includes(searchbox) ||
      match4.includes(searchbox) ||
      match5.includes(searchbox)
    ) {
      res[i].style.display = "flex";
    } else {
      res[i].style.display = "none";
    }
  }
}

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
                <p><a href="/jobseeker_Landing/filter_page?id=${
                  obj._id
                }">View Details</a></p>
              </div>
            </div>
          </div>`;
    });
    start += 10;
    setTimeout(function () {
      isLoading = false;
    }, 1000);
  } catch (err) {
    console.error(err);
  }
};

function popup() {
  let popUp = document.getElementById("popup-container");
  if (popUp) {
    popUp.classList.toggle("open-popup");
    window.scrollTo({
      top: 95,
    });
    document.body.style.overflow = "hidden";
  } else {
  }
}

popup();

function popupclose() {
  let popUp = document.getElementById("popup-container");
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
