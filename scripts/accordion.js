const accordion = document.querySelectorAll(".content_box");
const hitbox = document.querySelectorAll(".label");
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    // Remove "active" class from all elements
    for (let j = 0; j < accordion.length; j++) {
      if (j !== i) {
        accordion[j].classList.remove("active");
      }
    }

    // Toggle "active" class on the clicked element
    this.classList.toggle("active");
  });
}
