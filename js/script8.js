window.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".button");
  const menuTimeline = gsap.timeline();
  button.addEventListener("click", () => {
    if (!button.classList.contains("active")) {
      menuTimeline
        .fromTo(".stripe", { y: "-100%" }, { y: "0%", stagger: 0.05 })
        .fromTo(".menu__item > a", { y: "100%" }, { y: "0%" }, "-=0.5")
        .to(".button", { color: "#333" }, "<")
        .add(() => {
          button.classList.add("active");
        });
    } else {
      menuTimeline
        .fromTo(".menu__item > a", { y: "0%" }, { y: "100%" })
        .fromTo(".stripe", { y: "0%" }, { y: "100%", stagger: 0.05 })
        .to(".button", { color: "#fff " })
        .add(() => {
          button.classList.remove("active");
        });
    }
  });
});
