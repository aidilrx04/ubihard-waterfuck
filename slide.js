console.log("balls2 ");

// register id that contains image element
// to create slide/carousel
const registerSlide = (id) => {
  // get container
  const container = document.querySelector(`#${id}`);

  let slideIndex = 1;

  // get images
  const slides = container.querySelectorAll(".slide");

  // create and add prev button to container
  const prevBtn = document.createElement("button");
  prevBtn.classList.add("prev");
  prevBtn.innerHTML = `<i class="ph-bold ph-caret-left"></i>`;
  prevBtn.addEventListener("click", () => {
    slideIndex--;
    showSlides();
  });
  container.appendChild(prevBtn);

  // create and add nex button to container
  const nextBtn = document.createElement("button");
  nextBtn.classList.add("next");
  nextBtn.innerHTML = `<i class="ph-bold ph-caret-right"></i>`;
  nextBtn.addEventListener("click", () => {
    slideIndex++;
    showSlides();
  });
  container.appendChild(nextBtn);

  // create and add dots button to container
  const dotsContainer = document.createElement("div");
  dotsContainer.classList.add("dots");
  container.appendChild(dotsContainer);

  const dots = [];
  for (let i = 0; i < slides.length; i++) {
    // create dot for each image
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

  // function to show slide
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

  // call default of the first slide image
  showSlides();
};
