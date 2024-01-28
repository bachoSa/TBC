const slider = document.querySelector(".slider_container");
const slides = document.querySelector(".slides");
const slideWidth = document.querySelector(".slide").offsetWidth;
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;
let autoAdvanceInterval;

function dotClicked(event) {
  const dotIndex = event.target.dataset.index;
  if (dotIndex !== undefined) {
    currentIndex = parseInt(dotIndex);
    updateDots();
    showSlide(currentIndex);
    restartAutoAdvance();
  }
}

function updateDots() {
  dots.forEach((dot, index) => {
    dot.style.backgroundColor = index === currentIndex ? "#333" : "#888";
  });
}

function showSlide(index) {
  const translateValue = -index * slideWidth;
  slides.style.transform = `translateX(${translateValue}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % 3;
  hideAndShow();
  updateDots();
  restartAutoAdvance();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + 3) % 3;
  hideAndShow();
  updateDots();
  restartAutoAdvance();
}
// control using dots
dots.forEach(function (dot) {
  dot.addEventListener("click", function () {
    currentIndex = dot.dataset.index;
    console.log("Clicked dot with data-index:", dataIndex);
    hideAndShow();
    updateDots();
    restartAutoAdvance();
  });
});

function hideAndShow() {
  slides.style.opacity = 0;

  // Adding a delay for smoother transition
  setTimeout(() => {
    showSlide(currentIndex);

    // Using the transitionend event to ensure synchronization
    slides.addEventListener(
      "transitionend",
      () => {
        slides.style.opacity = 1;
      },
      { once: true }
    );
  }, 0);
}

function restartAutoAdvance() {
  clearInterval(autoAdvanceInterval);
  // autoAdvanceInterval = setInterval(nextSlide, 3000);
}

// Initial show
showSlide(currentIndex);

// Auto-advance every 3 seconds
// autoAdvanceInterval = setInterval(nextSlide, 3000);
