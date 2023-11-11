console.log("balls2 ");

const registerSlide = (id) => {
  const container = document.querySelector(`#${id}`);

  let slideIndex = 1;

  const slides = container.querySelectorAll(".slide");

  const prevBtn = document.createElement("button");
  prevBtn.classList.add("prev");
  prevBtn.innerHTML = `<i class="ph-bold ph-caret-left"></i>`;
  prevBtn.addEventListener("click", () => {
    slideIndex--;
    showSlides();
  });
  container.appendChild(prevBtn);

  const nextBtn = document.createElement("button");
  nextBtn.classList.add("next");
  nextBtn.innerHTML = `<i class="ph-bold ph-caret-right"></i>`;
  nextBtn.addEventListener("click", () => {
    slideIndex++;
    showSlides();
  });
  container.appendChild(nextBtn);

  const dotsContainer = document.createElement("div");
  dotsContainer.classList.add("dots");
  container.appendChild(dotsContainer);

  const dots = [];
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.dataset.slide = i + 1;

    dot.addEventListener("click", (e) => {
      const slide = e.target.dataset.slide;

      slideIndex = slide;

      showSlides();
    });

    dots.push(dot);

    dotsContainer.appendChild(dot);
  }

  function showSlides() {
    let i;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    if (slideIndex < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");
  }

  showSlides();
};
