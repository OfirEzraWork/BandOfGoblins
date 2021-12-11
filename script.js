const mobileMenuBtn = document.querySelector(".mobile-nav-buttons");
mobileMenuBtn.addEventListener("click", function () {
  const headerElement = document.querySelector(".nav-block");
  headerElement.classList.toggle("nav-open");
});
