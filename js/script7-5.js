//cubic-bezier(0.48, -0.02, 0, 0.85)
// TYPO!!!!!!!!!!!!!!!!
CustomEase.create("custom", "0.48, -0.02, 0, 0.85");
gsap.to(".wipeAnimation", {
  clipPath: "inset(0 0% 0 0)",
  ease: "custom",
  duration: 1.6,
  scrollTrigger: {
    trigger: ".wipeAnimation",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
});
