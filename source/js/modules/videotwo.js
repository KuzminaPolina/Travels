const overlay = document.querySelector('.video__overlay');
const playButton = document.querySelector('.video__button');

let tag = document.createElement('script');

tag.src = 'https://www.youtube.com/iframe_api';
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
let player;
const YT = window.YT;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: '9TZXsZItgdw',
    playerVars: {
      'playsinline': 1,
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange,
    },
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
let done = false;

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}


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
