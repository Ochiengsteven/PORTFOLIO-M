const mainMenu = document.querySelector('#mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const portfolio = document.querySelector('a[href="#my-work"]');
const aboutMe = document.querySelector('a[href="#about-me"]');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.top = '-100%';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
portfolio.addEventListener('click', close);
aboutMe.addEventListener('click', close);
