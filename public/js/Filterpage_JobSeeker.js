function search() {
  const searchbox = document.getElementById("search-input").value.toLowerCase();

  const res = document.querySelectorAll(".card");

  // const pname = document.getElementByClassName("val");

  for (var i = 0; i < res.length; i++) {
    let match = res[i].getElementsByClassName("val")[0].innerHTML.toLowerCase();
    let match1 = res[i].getElementsByClassName("val")[1].innerHTML.toLowerCase();
     console.log(searchbox,match);
    console.log(match1.includes(searchbox));

    if (match1.includes(searchbox) || match.includes(searchbox)) {
        console.log('hiii');
        res[i].style.display = "block";
      } else {
        res[i].style.display = "none";
      }
    }
 
}

function popup(popup_id){
  let popUp = document.getElementById(popup_id);
  popUp.classList.toggle("open-popup");
  console.log("omk");
  window.scrollTo({
    top: 95
  });
  document.body.style.overflow = 'hidden';
}


function popupclose(){

  let popUp = document.getElementById("popup-container");
  popUp.classList.toggle("open-popup"); 
  document.body.style.overflow = "auto";
}