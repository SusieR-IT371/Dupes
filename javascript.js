const bgMusic = new Audio("best-background-music-no-copyright-244084.mp3");
bgMusic.loop = true;
window.addEventListener("load", () => {
  bgMusic.play().catch(error => console.log("Autoplay prevented:", error));
});
document.getElementById("musicToggle").addEventLister("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
  } else {
    bgMusic.pause();
  }
});
