const mobileMenuBtn = document.querySelector(".mobile-nav-buttons");
mobileMenuBtn.addEventListener("click", function () {
  const headerElement = document.querySelector(".nav-block");
  headerElement.classList.toggle("nav-open");
});

const heroSection = document.querySelector(".hero-section");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      heroSection.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      heroSection.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(heroSection);
