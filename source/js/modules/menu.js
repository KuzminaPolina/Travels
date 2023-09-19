const menuList = document.querySelector('.header__list');
const navOpen = document.querySelector('.header__menu-button-open');
const navClose = document.querySelector('.header__menu-button-close');
const navbar = document.querySelector('.header__navbar');
const overlay = document.querySelector('.header__overlay');
const wrapper = document.querySelector('.header__another-useless-wrapper');

function openMenu() {
  navOpen.classList.add('header__menu-button--hidden');
  navClose.classList.remove('header__menu-button--hidden');
  if (overlay.classList.contains('header__overlay--hidden')) {
    overlay.classList.remove('header__overlay--hidden');
    overlay.classList.add('header__overlay--open');
  }
  if (navbar.classList.contains('header__navbar--closed')) {
    navbar.classList.remove('header__navbar--closed');
    navbar.classList.add('header__navbar--open');
  }
  if (menuList.classList.contains('header__list--hidden')) {
    menuList.classList.remove('header__list--hidden');
  }
  wrapper.classList.add('header__another-useless-wrapper--open');
  document.body.classList.add('disable-scrolling');
}

function closeMenu() {
  navClose.classList.add('header__menu-button--hidden');
  navOpen.classList.remove('header__menu-button--hidden');
  menuList.classList.add('header__list--hidden');
  if (overlay.classList.contains('header__overlay--open')) {
    overlay.classList.remove('header__overlay--open');
    overlay.classList.add('header__overlay--hidden');
  }
  if (navbar.classList.contains('header__navbar--open')) {
    navbar.classList.remove('header__navbar--open');
    navbar.classList.add('header__navbar--closed');
  }
  wrapper.classList.remove('header__another-useless-wrapper--open');
  document.body.classList.remove('disable-scrolling');
}

const toggleMenu = () => {
  overlay.addEventListener('click', closeMenu);
  navOpen.addEventListener('click', openMenu);
  navClose.addEventListener('click', closeMenu);
};

toggleMenu();
