const mobileBtn = document.querySelector(".mobile_buttons_container");
const mobileAcitons = document.querySelector(".actions");
const overlay = document.getElementById("overlay");

mobileBtn.addEventListener("click", () => {
  var currentDisplayStyle = window.getComputedStyle(overlay).display;
  mobileAcitons.classList.toggle("mobile");

  mobileBtn.classList.toggle("open");
  overlay.style.display = currentDisplayStyle === "flex" ? "none" : "flex";
  mobileAcitons.style.right = "0";
});

overlay.addEventListener("click", () => {
  var currentDisplayStyle = window.getComputedStyle(overlay).display;

  mobileAcitons.classList.toggle("mobile");
  mobileBtn.classList.toggle("open");
  overlay.style.display = currentDisplayStyle === "flex" ? "none" : "flex";
});
