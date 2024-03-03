const textWrappers = document.querySelectorAll(".text-wrapper");
textWrappers.forEach((textWrapper) => {
  const text = textWrapper.querySelector(".text");
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: textWrapper,
      start: "top 90%",
    },
  });
  timeline
    .to(".text-wrapper", { "--scaleX": 1 })
    .to(text, { y: "0%" }, "-=0.5");
});
