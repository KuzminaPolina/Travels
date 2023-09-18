const overlay = document.querySelector('.video__overlay');
const video = document.querySelector('.video__iframe');
const playButton = document.querySelector('.video__button');

const swapVideoUrl = () => {
  if (video.src === 'https://www.youtube.com/embed/9TZXsZItgdw?&autoplay=1') {
    video.src = 'https://www.youtube.com/embed/9TZXsZItgdw?&autoplay=0';
  } else if (video.src === 'https://www.youtube.com/embed/9TZXsZItgdw?&autoplay=0') {
    video.src = 'https://www.youtube.com/embed/9TZXsZItgdw?&autoplay=1';
  }
};

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
};

let observer = new IntersectionObserver(swapVideoUrl, options);

let target = video;

const playVideo = () => {
  const onPressPlay = () => {
    if (
      overlay.classList.contains('video__overlay--open') &&
      video.classList.contains('video__iframe--hidden')
    ) {
      overlay.classList.remove('video__overlay--open');
      overlay.classList.add('video__overlay--hidden');
      video.classList.remove('video__iframe--hidden');
      video.classList.add('video__iframe--open');
    }
    observer.observe(target);
  };
  playButton.addEventListener('click', onPressPlay);
};

playVideo();
