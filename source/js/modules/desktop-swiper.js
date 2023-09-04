let Swiper = window.Swiper;
let init = false;

export function initDesktopSlider() {
  let desktop = window.matchMedia('(min-width: 1200px)');
  let tablet = window.matchMedia('(min-width: 768px) and (max-width: 1199px)');
  let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');

  if (desktop.matches) {
    if (!init) {
      init = true;
      Swiper = new Swiper('.advantages__container', {
        slidesPerView: 3.5,
        centeredSlides: true,
        loop: true,
        spaceBetween: 30,
        direction: 'horizontal',

        navigation: {
          nextEl: '.advantages__button--next',
          prevEl: '.advantages__button--prev',
        },

        breakpoints: {
          1200: {
            slidesPerView: 3.5,
            spaceBetween: 30,
          },
        },
      });
    }
  } else if (tablet.matches) {
    Swiper.destroy();
    init = false;
  } else if (mobile.matches) {
    Swiper.destroy();
    init = false;
  }
}
