import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import './modules/video';
import './modules/menu';

const headerSlider = document.querySelector('.slider');

const focusSlider = function (t, e) {
  const links = t.querySelectorAll('.slider__more-button');
  const next = function (evt) {
    const slides = t.querySelectorAll('.slider__item');
    const o = evt.target.closest('.slider__item');
    const s = Array.from(slides).indexOf(o);
    e.slideTo(s + 1);
  };
  links.forEach((function (y) {
    y.addEventListener('blur', next);
  }
  ));
};

const leaflet = () => {
  const L = window.L;
  const map = L.map('map').setView([55.81322, 37.63729], 12);

  const purpleIcon = L.icon({
    iconUrl: './img/map/pin_filled.png',
    iconSize: [48, 48],
    iconAnchor: [19, 50],
  });

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  L.marker([55.81322, 37.63729], {icon: purpleIcon}).addTo(map);
};

// ---------------------------------
const Swiper = window.Swiper;
const initHeaderSlider = () => {
  const newHeaderSlider = new Swiper('.slider__container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.slider__pagination',
      clickable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    speed: 300,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 1,
      },
    },
  });
  focusSlider(headerSlider, newHeaderSlider);
  return newHeaderSlider;
};

// ------------------------------------

const initCatalogSlider = () =>
  new Swiper('.catalog__content', {
    direction: 'horizontal',
    loop: false,
    navigation: {
      nextEl: '.catalog__button--next',
      prevEl: '.catalog__button--prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 18,
      },
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
      },
    },
  });

const initInstructorsSlider = () =>
  new Swiper('.education__content', {
    direction: 'horizontal',
    loop: false,
    navigation: {
      nextEl: '.education__button--next',
      prevEl: '.education__button--prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 30,
      },
    },
  });


const initFeedbackSlider = () =>
  new Swiper('.feedback__container', {
    direction: 'horizontal',
    loop: false,
    navigation: {
      nextEl: '.feedback__button--next',
      prevEl: '.feedback__button--prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 1.2,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 1.5,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
    },
  });

const initGallerySlider = () =>
  new Swiper('.gallery__content', {
    direction: 'horizontal',
    loop: false,
    navigation: {
      nextEl: '.gallery__button--next',
      prevEl: '.gallery__button--prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 1.3,
        slidesPerGroup: 1,
        spaceBetween: 5,
      },
      1200: {
        slidesPerView: 2.5,
        slidesPerGroup: 2,
        spaceBetween: 7,
      },
    },
  });


const initDesktopOnlySlider = () => {
  let desktopSlider;
  if (window.matchMedia('(min-width: 1200px)').matches) {
    desktopSlider = new Swiper('.advantages__container', {
      slidesPerView: 3,
      initialSlide: 2,
      centeredSlides: true,
      loop: true,
      spaceBetween: 30,
      direction: 'horizontal',
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      navigation: {
        nextEl: '.advantages__button--next',
        prevEl: '.advantages__button--prev',
      },
    });
  }
  return desktopSlider;
};

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  initHeaderSlider();
  initCatalogSlider();
  initInstructorsSlider();
  initFeedbackSlider();
  initGallerySlider();
  initDesktopOnlySlider();

  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
    leaflet();
  });
});

// window.addEventListener('resize', function () {
// breakpointChecker();
// });

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
