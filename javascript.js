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
        } else {
            bgMusic.pause();
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
const video = document.getElementById("myVideo");
const playPauseBtn = document.getElementById("playPauseBtn");
const muteUnmuteBtn = document.getElementById("muteUnmuteBtn");

playPauseBtn.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = "Pause";
    } else {
        video.pause();
        playPauseBtn.textContent = "Play";
    }
});
muteUnmuteBtn.addEventListener("click", () => {
    video.muted = !video.muted;
    muteUnmuteBtn.textContent = video.muted ? "Unmute" : "Mute";
});
