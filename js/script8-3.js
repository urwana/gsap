gsap.to(".js-scale-change", {
  // width: "100%",
  // height: "100vh",
  "--scaleX": 1,
  "--scaleY": 1,
  "--borderRadius": 0,
  scrollTrigger: {
    trigger: ".js-sticky",
    start: "center center",
    scrub: 1,
    pin: true, // ピン留め
  },
});
