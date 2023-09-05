
const ya = window.ya;

const yandexPlayer = () => {
  let player = new ya.music.Audio();
  player.config.audio = 'https://music.yandex.ru/album/25474374';
};

yandexPlayer();
