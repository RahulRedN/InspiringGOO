// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

// function activeLink() {
//   list.forEach((item) => {
//     item.classList.remove("hovered");
//   });
//   this.classList.add("hovered");
// }

// list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.getElementsByClassName("toggle");
let main = document.getElementsByClassName("main");
let navigation = document.querySelector(".navigation");

toggle[0].onclick = function () {
  navigation.classList.toggle("active");
  main[0].classList.toggle("active");
};

function search() {
  const searchbox = document.getElementById("search-input").value.toLowerCase();

  const res = document.querySelectorAll(".card1");

  for (var i = 0; i < res.length; i++) {
    let match = res[i].getElementsByClassName("name111")[0].innerHTML.toLowerCase();


    if (match.includes(searchbox)) {
        res[i].style.display = "table-row";
      } else {
        res[i].style.display = "none";
      }
    }
}