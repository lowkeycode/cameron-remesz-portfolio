const navicon = document.querySelector('.navicon');

let naviconOpen = false;


const toggleNavBtn = () => {
  if(!naviconOpen) {
    navicon.classList.add('active');
    naviconOpen = true;
  } else {
    navicon.classList.remove('active');
    naviconOpen = false;
  }
}




navicon.addEventListener('click', toggleNavBtn);