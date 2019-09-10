function AutoPlay() {}

AutoPlay.prototype.run = function(player) {
  //Esto es un getter
  if (!player.muted) {
    player.muted = true; //Esto es un setter
  }
  player.play();
};

export default AutoPlay;
