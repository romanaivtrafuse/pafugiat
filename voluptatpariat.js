var player = new YT.Player('player', {
  height: '390',
  width: '640',
  videoId: 'VIDEO_ID',
  events: {
    'onReady': onPlayerReady,
    'onStateChange': onPlayerStateChange
  }
});
