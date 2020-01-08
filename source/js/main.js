let burger_button = document.querySelector(".page-header__toggle");
let nav_menu = document.querySelector(".main-nav");

burger_button.addEventListener("click", function (e) {
  e.stopPropagation();
  burger_button.classList.toggle("page-header__toggle--active");
  nav_menu.classList.toggle("main-nav--active");
});

document.addEventListener('click', e => {
  let target = e.target;
  let its_menu = target == nav_menu || nav_menu.contains(target);
  let its_hamburger = target == burger_button;
  let menu_is_active = nav_menu.classList.contains('main-nav--active');

  if (!its_menu && !its_hamburger && menu_is_active) {
    burger_button.classList.remove("page-header__toggle--active");
    nav_menu.classList.remove("main-nav--active");
  }
});

let block_1 = document.querySelector(".description");
let block_2 = document.querySelector(".feature");
let block_3 = document.querySelector(".price");

let description = document.querySelector("#description");
let feature = document.querySelector("#feature");
let price = document.querySelector("#price");

if (description != null || feature != null || price != null) {


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
}

let request = document.querySelector(".request-button");
let popup = document.querySelector(".connection-popup");
let form = popup.querySelector("form");
let popup_content_form = document.querySelector(".connection-popup__content");
let popup_close = document.querySelector(".connection-popup__close");

if (form != null) {
  request.addEventListener("click", function (e) {
    e.preventDefault();
    popup.classList.add("popup-show");
    popup_content_form.classList.add("popup-bounce");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("popup-show")) {
        popup.classList.remove("popup-show");
        popup_content_form.classList.remove("popup-bounce");
      }
    }
  });

  popup_close.addEventListener("click", function (e) {
    e.preventDefault();
    popup.classList.remove("popup-show");
    popup_content_form.classList.remove("popup-bounce");
  });
};
