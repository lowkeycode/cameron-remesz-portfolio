const navicon = document.querySelector(".navicon");
const menu = document.querySelector(".menu-overlay");

let menuOpen = false;

const toggleOverlay = () => {

  if(!menuOpen) {
    menuOpen = true;

    menu.ariaHidden = false;
    menu.classList.remove('pointer-event-none');
  } else {
    menuOpen = false;

    menu.ariaHidden = true;
    menu.classList.add('pointer-event-none');
  }
  
  menu.classList.toggle("open");
};

const toggleNavBtn = () => {
  navicon.classList.toggle("active");

  toggleOverlay();
};

navicon.addEventListener("click", toggleNavBtn);
