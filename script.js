/***************************************/
/*Open and close mobile menu*/
/***************************************/

const headerElement = document.querySelector(".nav-block");
const mobileMenuBtn = document.querySelector(".mobile-nav-buttons");
mobileMenuBtn.addEventListener("click", function () {
  headerElement.classList.toggle("nav-open");
});

/***************************************/
/*Observe hero section for sticky nav*/
/***************************************/

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

/***************************************/
/*Smooth scrolling*/
/***************************************/

const links = [
  ...document.querySelectorAll(".nav-item a:link"),
  ...document.querySelectorAll(".shop-option-purchase a:link"),
  document.querySelector(".nav-title"),
];

links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: "smooth" });
    }

    headerElement.classList.remove("nav-open");
  });
});
