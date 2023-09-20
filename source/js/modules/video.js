const overlay = document.querySelector('.video__overlay');
const video = document.querySelector('.video__iframe');
const playButton = document.querySelector('.video__button');

const playVideo = () => {
  const onPressPlay = () => {
    video.src = 'https://www.youtube.com/embed/9TZXsZItgdw?&autoplay=1';
    if (
      overlay.classList.contains('video__overlay--open') &&
      video.classList.contains('video__iframe--hidden')
    ) {
      overlay.classList.remove('video__overlay--open');
      overlay.classList.add('video__overlay--hidden');
      video.classList.remove('video__iframe--hidden');
      video.classList.add('video__iframe--open');
    }
    video.src = 'https://www.youtube.com/embed/9TZXsZItgdw?&autoplay=1';
  };
  playButton.addEventListener('click', onPressPlay);
};

playVideo();
