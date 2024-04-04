gsap.to(".panels-wrap", {
  xPercent: -75,
  ease: "none", //scrub と ease none はセット
  scrollTrigger: {
    trigger: ".panels-wrap",
    start: "top top",
    end: "bottom -300%",
    pin: true,
    scrub: 1,
  },
});
