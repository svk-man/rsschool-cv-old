let hamburgerMenu = document.querySelector('.hamburger-menu');
hamburgerMenu.addEventListener('click', toggle);

function toggle() {
  if (hamburgerMenu.classList.contains('open')) {
    hamburgerMenu.classList.remove('open');
  } else {
    hamburgerMenu.classList.add('open');
  }
}

var str = 'Я продолжаю разработку. Контакты: discord: @svk-man';
var style = ['padding: 1rem;',
  'background: linear-gradient( gold, orangered);',
  'text-shadow: 0 2px orangered;',
  'font: 1.3rem/3 Georgia;',
  'color: white;'].join('');

console.log ( '%c%s', style, str );