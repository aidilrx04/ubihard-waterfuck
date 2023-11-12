const hero = document.querySelector(".hero");
const trailerToggler = hero.querySelector(".trailer-toggler");
const videoElement = hero.querySelector("video");

trailerToggler.addEventListener("click", () => {
  hero.classList.toggle("video");

  if (hero.classList.contains("video")) {
    videoElement.play();
    videoElement.style.display = "block";
    trailerToggler.innerHTML = `<span>Pause</span><i class="ph ph-pause"></i>`;
  } else {
    videoElement.pause();
    videoElement.style.display = "none";
    trailerToggler.innerHTML = `<span>Play Trailer</span><i class="ph ph-play"></i>`;
  }
});
