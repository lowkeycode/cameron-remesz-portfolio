const navicon = document.querySelector(".navicon");
const menu = document.querySelector(".menu-overlay");


// Overlay/Nav Menu Toggle
let menuOpen = false;

const toggleOverlay = () => {
  if (!menuOpen) {
    menuOpen = true;

    navicon.ariaExpanded = "true"
    menu.ariaHidden = false;
    menu.classList.remove("pointer-event-none");
  } else {
    menuOpen = false;

    navicon.ariaExpanded = "false"
    menu.ariaHidden = true;
    menu.classList.add("pointer-event-none");
  }

  menu.classList.toggle("open");
};

const toggleNavBtn = () => {
  navicon.classList.toggle("active");

  toggleOverlay();
};

// SVG
const paths = document.querySelectorAll('path');


const fillSvgPaths = () => {
  let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);


  paths.forEach((path) => {
    const pathLength = path.getTotalLength();

    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    const drawLength = pathLength * scrollPercentage;

    path.style.strokeDashoffset = pathLength - drawLength;
  })
}

fillSvgPaths();


document.addEventListener("scroll", fillSvgPaths);
navicon.addEventListener("click", toggleNavBtn);
