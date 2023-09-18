const Swiper = window.Swiper;

export const initInstructorsSlider = () =>
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
