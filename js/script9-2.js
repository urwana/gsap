gsap.utils.toArray(".card").forEach((card) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: card,
      start: "top bottom",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  });

  const image = card.querySelector("img");
  const a = card.querySelector("a");
  const textWrap = card.querySelector(".text-wrap");

  tl.to(image, {
    autoAlpha: 1,
    rotate: 0,
    duration: 0.7,
    ease: "power2.inOut",
  })
    .to(a, { x: 0, y: 0, ease: "power2.inOut" }, "<+.2")

    .to(
      textWrap,
      { clipPath: "inset(0% 0% 0% 0%)", duration: 0.7, ease: "power2.inOut" },
      "<+.2"
    );
});
