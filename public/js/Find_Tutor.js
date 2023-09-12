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
        const response = await fetch(`/api/getCourseSearch?name=${value}`);
        const data = await response.json();
        dropdown.innerHTML = "";
        if (data.length == 0) {
          dropdown.innerHTML = "No Courses Found!";
          return;
        }
        data.forEach((obj, idx) => {
          dropdown.innerHTML += `<tr><td>${obj.Course_Name}</td><td>${obj.Tutor_Name}</td><td>$${obj.Course_Fee}</td></tr>`;
        });
      } catch (err) {
        console.error(err);
      }
    } else {
      dropdown.innerHTML = "";
    }
  };
  
  function filter_mode() {
    const filterSelect = document
      .querySelector("#filter_mode")
      .value.toLowerCase();
    console.log(filterSelect);
    const res = document.querySelectorAll(".card");
  
    for (var i = 0; i < res.length; i++) {
      let match = res[i].getElementsByClassName("In-person")[0];
      console.log(match);
  
      if (match) {
        let textvalue = match.textContent || match.innerHTML;
  
        if (textvalue.toLowerCase().indexOf(filterSelect) > -1) {
          res[i].style.display = "";
        } else {
          res[i].style.display = "none";
        }
      }
    }
  }
  
  let start = 3;
  
  const loadMore = async (e) => {
    const cardBox = document.querySelector("#cards");
    try {
      const response = await fetch(`/api/getMoreCourses?s_idx=${start}`);
      const data = await response.json();
      if (data.length === 0) {
        allLoaded = true;
      }
      data.forEach((course, idx) => {
        cardBox.innerHTML += `<div class="card">
            <div class="row-flex">
              <div class="img">
                <img
                  src="/resources/tutor.png"
                  alt="Profile-Photo"
                  style="width: 12rem"
                />
              </div>
              <div class="content" style="width: 100%">
                <h3 class="card-name">${course.Tutor_Name}</h3>
                <div class="info">
                  <div class="subject-title">${course.Course_Name}</div>
                  <p class="fee">
                    <span class="fee-span">Fee:</span>₹${course.Course_Fee}
                    / month
                  </p>
                  <p class="duration">
                    <span class="duration-span">Duration:</span>${course.Course_Duration} months
                  </p>
                  <p class="Mode">
                    <span class="mode-span">Mode:</span
                    ><span class="In-person">${course.Mode}</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="contact">
              <form method="post">
                <button
                  type="submit"
                  value="${course._id}"
                  name="apply"
                  class="contact-now"
                >
                  <span style="white-space: nowrap">Contact Me</span>
                </button>
              </form>
            </div>
          </div>`;
      });
      start += 3;
      setTimeout(function () {
        isLoading = false;
      }, 1000);
    } catch (err) {
      console.error(err);
    }
  };
  
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
});
