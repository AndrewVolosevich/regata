let burger_button = document.querySelector(".page-header__toggle");
let nav_menu = document.querySelector(".main-nav");

burger_button.addEventListener("click", function (e) {
  e.preventDefault();
  burger_button.classList.toggle("page-header__toggle--active");
  nav_menu.classList.toggle("main-nav--active");
});


let block_1 = document.querySelector(".description");
let block_2 = document.querySelector(".feature");
let block_3 = document.querySelector(".price");

let description = document.querySelector("#description");
let feature = document.querySelector("#feature");
let price = document.querySelector("#price");


description.addEventListener("click", function (e) {
  block_1.classList.add("active");
  block_2.classList.remove("active");
  block_3.classList.remove("active");
});

feature.addEventListener("click", function (e) {
  block_2.classList.add("active");
  block_1.classList.remove("active");
  block_3.classList.remove("active");
});

price.addEventListener("click", function (e) {
  block_3.classList.add("active");
  block_2.classList.remove("active");
  block_1.classList.remove("active");
});
