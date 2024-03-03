gsap.to(".js-move-text", {
  x: "0%",
  scrollTrigger: {
    trigger: ".js-move-text",
    start: "top bottom",
    end: "center 53%",
    scrub: 1.5,
    onLeave: () => {
      gsap.to(".js-move-text span", { color: "green", duration: 0.25 });
    },
    onEnterBack: () => {
      gsap.to(".js-move-text span", { color: "white", duration: 0.25 });
    },
  },
});

// ②
// gsap.to(".js-move-text span", {
//   color: "green",
//   duration: 0.25,
//   scrollTrigger: {
//     trigger: ".js-move-text span",
//     start: "center center",
//     end: "center 53%",
//     scrub: 1.5,
//     toggleActions: "play none none reverse",
//   },
// });

// ③
// ScrollTrigger.create({
//   trigger: ".js-move-text span",
//   start: "center center",
//   toggleClass: { targets: ".js-move-text span", className: "is-active" },
// });
