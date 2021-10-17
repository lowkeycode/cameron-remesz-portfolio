const navicon = document.querySelector('.navicon');




const toggleNavBtn = () => {
  navicon.classList.toggle('active');
}




navicon.addEventListener('click', toggleNavBtn);