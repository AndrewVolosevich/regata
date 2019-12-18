let burger_button = document.querySelector(".page-header__toggle");
let nav_menu = document.querySelector(".main-nav");

burger_button.addEventListener("click", function (e) {
  e.preventDefault();
  burger_button.classList.toggle("page-header__toggle--active");
  nav_menu.classList.toggle("main-nav--active");
});
