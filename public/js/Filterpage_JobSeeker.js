function search() {
  const searchbox = document.getElementById("search-input").value.toLowerCase();
  console.log(searchbox);


  const res = document.querySelectorAll(".card");

  for (var i = 0; i < res.length; i++) {
    let match = res[i].getElementsByClassName("val")[0].innerText.toLowerCase();
    let match1 = res[i].getElementsByClassName("val")[1].innerText.toLowerCase();
    let match2 = res[i].getElementsByClassName("val")[2].innerText.toLowerCase();
    let match3 = res[i].getElementsByClassName("val")[3].innerText.toLowerCase();
    let match4 = res[i].getElementsByClassName('jobname')[0].innerText.toLowerCase();
    let match5= res[i].getElementsByClassName('cname')[0].innerText.toLowerCase();
    console.log(match);

    if (match1.includes(searchbox) || match.includes(searchbox) || match2.includes(searchbox) || match3.includes(searchbox) || match4.includes(searchbox) ||match5.includes(searchbox)) {
        res[i].style.display = "flex";
      } else {
        res[i].style.display = "none";
      }
    }
}

// function filter_mode() {
//   const filterSelect = document.querySelector('#filter').value.toLowerCase();
//   console.log(filterSelect);
//   const res = document.querySelectorAll(".card");


//   for (var i = 0; i < res.length; i++) {
//       let match = res[i].getElementsByClassName("val")[0];
//       console.log(match);

//       if (match) {
//         let textvalue = match.textContent || match.innerHTML;

//         if (textvalue.toLowerCase().indexOf(filterSelect) > -1) {
//           res[i].style.display = "";
//         } else {
//           res[i].style.display = "none";
//         }
//       }
//     }
// }




function popup(){
  let popUp = document.getElementById("popup-container");
  if(popUp){
    popUp.classList.toggle("open-popup");
    console.log("omk");
    window.scrollTo({
      top: 95
    });
    document.body.style.overflow = 'hidden';
  }
  else{

  }
}

popup();

function popupclose(){

  let popUp = document.getElementById("popup-container");
  popUp.classList.toggle("open-popup"); 
  document.body.style.overflow = "auto";
}



