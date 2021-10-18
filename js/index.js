const navicon = document.querySelector(".navicon");
const menu = document.querySelector(".menu-overlay");

const toggleOverlay = () => {
  menu.classList.toggle("open");
};

const toggleNavBtn = () => {
  navicon.classList.toggle("active");

  toggleOverlay();
};

navicon.addEventListener("click", toggleNavBtn);
