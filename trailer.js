// get hero container
const hero = document.querySelector(".hero");
// get trailer button
const trailerToggler = hero.querySelector(".trailer-toggler");
// get video element
const videoElement = hero.querySelector("video");

// add click event listener to trailer button
trailerToggler.addEventListener("click", () => {
  // toggle(on/off) hero video class
  hero.classList.toggle("video");

  // if hero has video class, play video and hide content
  if (hero.classList.contains("video")) {
    videoElement.play();
    videoElement.style.display = "block";
    trailerToggler.innerHTML = `<span>Pause</span><i class="ph ph-pause"></i>`;
  } else {
    // else pause and show content
    videoElement.pause();
    videoElement.style.display = "none";
    trailerToggler.innerHTML = `<span>Play Trailer</span><i class="ph ph-play"></i>`;
  }
});
