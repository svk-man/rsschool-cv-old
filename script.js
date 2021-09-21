let hamburgerMenu = document.querySelector('.hamburger-menu');
hamburgerMenu.addEventListener('click', toggle);

function toggle() {
  if (hamburgerMenu.classList.contains('open')) {
    hamburgerMenu.classList.remove('open');
  } else {
    hamburgerMenu.classList.add('open');
  }
}