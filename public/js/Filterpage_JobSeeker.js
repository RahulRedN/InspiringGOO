function search() {
  const searchbox = document.getElementById("search-input").value.toLowerCase();

  const res = document.querySelectorAll(".card");

  for (var i = 0; i < res.length; i++) {
    let match = res[i].getElementsByClassName("val")[0].innerHTML.toLowerCase();
    let match1 = res[i].getElementsByClassName("val")[1].innerHTML.toLowerCase();
    let match2 = res[i].getElementsByClassName("val")[2].innerHTML.toLowerCase();
    let match3 = res[i].getElementsByClassName("val")[3].innerHTML.toLowerCase();

    if (match1.includes(searchbox) || match.includes(searchbox) || match2.includes(searchbox) || match3.includes(searchbox)) {
        res[i].style.display = "block";
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

function filter_role() {
  const filterSelect = document.querySelector('#filter').value.toLowerCase();
  console.log(filterSelect);
  const res = document.querySelectorAll(".card");
  const val = document.querySelectorAll(".val")


  for (var i = 0; i < res.length; i++) {

    match=[];

    for (let j = 0; j < val.length; j++) {
       match[j] = res[i].getElementsByClassName("val")[j];     
    }

    for (let index = 0; index < val.length; index++) {
      
      if (match[index]) {
        let textvalue = match[index].textContent || match[index].innerHTML;
        console.log(textvalue);

        if (textvalue.toLowerCase().indexOf(filterSelect) > -1) {
          res[i].style.display = "block";
        } else {
          res[i].style.display = "none";
        }
      }
    }
      
    }
      
}


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

search();

