let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
};
searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});

function goaplans() {
  console.log("its working");
}
function Goa5k() {
  document.getElementById("goa5k").style.display = "block";
  document.getElementById("goa10k").style.display = "none";
  document.getElementById("goa15k").style.display = "none";
}
function Goa10k() {
  document.getElementById("goa10k").style.display = "block";
  document.getElementById("goa5k").style.display = "none";
  document.getElementById("goa15k").style.display = "none";
}
function Goa15k() {
  document.getElementById("goa15k").style.display = "block";
  document.getElementById("goa5k").style.display = "none";
  document.getElementById("goa10k").style.display = "none";
}
function Goa20k() {
  document.getElementById("goa20k").style.display = "block";
}

document.getElementById("user-btn").addEventListener("click", function () {
  var div = document.getElementById("userinfoblock");
  let element = document.getElementById("user-btn");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
});
