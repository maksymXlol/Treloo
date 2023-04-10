"use strict";

let nav = document.querySelector(".navigation");

window.addEventListener("scroll", function () {
  // console.log(window.scrollY);
  if (window.scrollY >= nav.clientHeight) {
    nav.classList.add("nav-fixed");
  } else {
    nav.classList.remove("nav-fixed");
  }
});

nav.addEventListener("click", function (e) {
  console.log(e);
});
