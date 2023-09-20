const overlay = document.querySelector('.video__overlay');
const playButton = document.querySelector('.video__button');

let tag = document.createElement('script');

tag.src = 'https://www.youtube.com/iframe_api';
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
const YT = window.YT;
var player;

const onYouTubeIframeAPIReady = () => {
  player = new YT.Player('player', {
    height: '317',
    width: '482',
    videoId: '9TZXsZItgdw',
    playerVars: {
      'playsinline': 1,
    },
    events: {
      'onReady': onPlayerReady,
    },
  });
  return player;

  function onPlayerReady(event) {
    event.target.playVideo();
  }
};

// 4. The API will call this function when the video player is ready.


// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.

const playVideo = () => {
  const onPressPlay = () => {
    if (
      overlay.classList.contains('video__overlay--open')
    ) {
      overlay.classList.remove('video__overlay--open');
      overlay.classList.add('video__overlay--hidden');
      onYouTubeIframeAPIReady();
    }
  };
  playButton.addEventListener('click', onPressPlay);
};

playVideo();
