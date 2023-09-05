const menuList = document.querySelector('.header__list');
const navOpen = document.querySelector('.header__menu-button-open');
const navClose = document.querySelector('.header__menu-button-close');
const navbar = document.querySelector('.header__navbar');

function openMenu() {
  navOpen.classList.add('header__menu-button--hidden');
  navClose.classList.remove('header__menu-button--hidden');
  if (navbar.classList.contains('header__navbar--closed')) {
    navbar.classList.remove('header__navbar--closed');
    navbar.classList.add('header__navbar--open');
  }
  if (menuList.classList.contains('header__list--hidden')) {
    menuList.classList.remove('header__list--hidden');
  }
}

function closeMenu() {
  navClose.classList.add('header__menu-button--hidden');
  navOpen.classList.remove('header__menu-button--hidden');
  menuList.classList.add('header__list--hidden');
  if (navbar.classList.contains('header__navbar--open')) {
    navbar.classList.remove('header__navbar--open');
    navbar.classList.add('header__navbar--closed');
  }
}

const toggleMenu = () => {
  navOpen.addEventListener('click', openMenu);
  navClose.addEventListener('click', closeMenu);
};

toggleMenu();
