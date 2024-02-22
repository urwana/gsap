gsap.set(".list__item", {
  y: 30,
  opacity: 0,
});

gsap.to(".list__item", 1.5, {
  y: 0,
  opacity: 1,
  ease: "expo.out",
  stagger: {
    each: 0.1,
    // amount: 1 // 処理する個数 / amountの値
    from: "start",
    // start, end, center, edges, random
  },
});
