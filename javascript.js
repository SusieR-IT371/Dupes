const bgMusic = new Audio("best-background-music-no-copyright-244084.mp3");
bgMusic.loop = true;
window.addEventListener("load", () => {
  bgMusic.play().catch(error => console.log("Autoplay prevented:", error));
});
document.getElementById("musicToggle").addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
  } else {
    bgMusic.pause();
  }
});
const navItems = document.querySelectorAll(".nav-item");
navItems.forEach(item => {
  item.addEventListener("mouseover", () => {
    item.classList.add("highlight");
  });
  item.addEventListener("mouseout", () => {
    item.classList.remove("highlight");
  });
});
