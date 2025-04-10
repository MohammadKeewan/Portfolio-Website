document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel-container");
  const prevButton = carousel.querySelector(".prev");
  const nextButton = carousel.querySelector(".next");
  const carouselSlides = document.querySelectorAll(".carousel-slide");
  let currentIndex = 0;

  if (prevButton && nextButton) {
    prevButton.addEventListener("click", () => {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = carouselSlides.length - 1;
      }
      updateCarousel();
    });

    nextButton.addEventListener("click", () => {
      currentIndex++;
      if (currentIndex > carouselSlides.length - 1) {
        currentIndex = 0;
      }
      updateCarousel();
    });
  }

  const updateCarousel = () => {
    carouselSlides.forEach((slide, index) => {
      if (index === currentIndex) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
  };

  updateCarousel();
});
