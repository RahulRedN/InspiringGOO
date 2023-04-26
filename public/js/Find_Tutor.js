function search() {
    const searchbox = document
      .getElementById("search-input")
      .value.toLowerCase();
      console.log(searchbox);
    const res = document.querySelectorAll(".card");

    for (var i = 0; i < res.length; i++) {
      let match = res[i].getElementsByClassName("subject-title")[0];

      if (match) {
        let textvalue = match.textContent || match.innerHTML;

        if (textvalue.toLowerCase().indexOf(searchbox) > -1) {
          res[i].style.display = "";
        } else {
          res[i].style.display = "none";
        }
      }
    }
  }

  
  function filter_mode() {
    const filterSelect = document.querySelector('#filter_mode').value.toLowerCase();
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

  
function filter_subj() {
  const filterSelect = document.querySelector('#filter').value.toLowerCase();
  console.log(filterSelect);
  const res = document.querySelectorAll(".card");


  for (var i = 0; i < res.length; i++) {
      let match = res[i].getElementsByClassName("subject-title")[0];
      console.log(match);

      if (match) {
        let textvalue = match.textContent || match.innerHTML;

        if (textvalue.toLowerCase().indexOf(filterSelect) > -1) {
          res[i].style.display = "block";
        } else {
          res[i].style.display = "none";
        }
      }
    }
}


search();