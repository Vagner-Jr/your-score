const btnToggle = document.getElementById("btn-sidebar");
// open sidebar
btnToggle.addEventListener("click", () => {
  const app = document.querySelector("body > div");
  app.classList.toggle("open");
});
