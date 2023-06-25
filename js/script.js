const menu = document.querySelector('[data-menu]');
const menuOpenButton = document.querySelector('[data-menu-open]');
const menuCloseButton = document.querySelector('[data-menu-close]');

menuOpenButton.addEventListener('click', () => {
  menu.classList.add('menu_open');
});

menuCloseButton.addEventListener('click', () => {
  menu.classList.remove('menu_open');
});
