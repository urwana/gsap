gsap.fromTo(
  ".cta__img",
  { y: 100 },
  {
    y: -100,
    scrollTrigger: {
      trigger: ".cta",
      start: "top bottom",
      end: "top top",
      scrub: 1,
    },
    duration: 1,
  }
);
gsap.fromTo(
  ".cta__img",

  { filter: "blur(10px)" },
  {
    filter: "blur(0px)",
    duration: 1,
    scrollTrigger: {
      trigger: ".cta",
      start: "top bottom",
      end: "top center",
      scrub: 1,
    },
  }
);
