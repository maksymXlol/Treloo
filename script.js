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
  if (e.target.tagName.toLowerCase() === "a") {
    e.preventDefault();
    let index = e.target.href.indexOf("#");
    let id = e.target.href.slice(index);
    let section = document.querySelector(id);
    console.dir(section);
    let x = section.offsetLeft;
    let y = section.offsetTop - nav.clientHeight;
    scrollTo(x, y);
  }
});
