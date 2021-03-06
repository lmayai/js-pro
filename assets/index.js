import MediaPlayer, { foo } from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.ts";

const video = document.querySelector("video");
const buttonPlay = document.querySelector("#play-pause");
const buttonMute = document.querySelector("#mute");

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()]
});

buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();
console.log(foo);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("../sw.js").catch(error => {
    console.log(error.message);
  });
}
