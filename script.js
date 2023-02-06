const toggleButton = document.getElementById("nav-toggle");
const nav = document.querySelector(".left-nav");

toggleButton.addEventListener("click", function() {
  nav.classList.toggle("show-nav");
});