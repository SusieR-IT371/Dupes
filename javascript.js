const bgMusic = new Audio("best-background-music-no-copyright-244084.mp3");
bgMusic.loop = true;
window.addEventListener("load", () => {
  bgMusic.play().catch(error => console.log("Autoplay prevented:", error));
});
const musicButtons = document.querySelectorAll(".musicToggle");

musicButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicButtons.forEach(btn => btn.textContent = "Pause Music");
        } else {
            bgMusic.pause();
            musicButtons.forEach(btn => btn.textContent = "Play Music");
        }
    });
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
