"use strict";


window.addEventListener("load", windowLoad);

function windowLoad() {
  document.addEventListener("click", documentActions);
}

function documentActions(e) {
  const targetElement = e.target;

  //Scroll to...

  if (targetElement.hasAttribute("data-goto")) {
    const gotoElement = document.querySelector(`${targetElement.dataset.goto}`);
    const headerHeight = document.querySelector(`.header`).offsetHeight;
    if (gotoElement) {
      window.scrollTo({
        top: gotoElement.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }

    e.preventDefault();
  }
  
}

//Hamburger.......

const hamburger = document.querySelector(".hamburger-menu");
const headerMenu = document.querySelector(".menu__list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  headerMenu.classList.toggle("active");
});

document.querySelectorAll(".menu__link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    headerMenu.classList.remove("active");
}))