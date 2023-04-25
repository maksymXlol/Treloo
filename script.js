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
    burger.classList.remove("active");
    header.classList.remove("active");
    document.body.classList.remove("overflow");
  }
});
const header = document.querySelector(".header__nav");
let burger = document.querySelector(".burger");
burger.addEventListener("click", function () {
  // if (burger.classList.contains("active")) {
  //   burger.classList.remove("active");
  // } else {
  //   burger.classList.add("active");
  // }

  burger.classList.toggle("active");
  header.classList.toggle("active");
  document.body.classList.toggle("overflow");
});
