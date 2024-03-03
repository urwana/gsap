const textEffectTriggers = document.querySelectorAll(".js-text-effect-trigger");

textEffectTriggers.forEach((trigger) => {
  let target = trigger.querySelectorAll(".js-text-effect");
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: "top bottom",
    },
  });
  timeline
    .to(target, { autoAlpha: 1, y: 0, stagger: 0.2 })
    .to(target, { "--translateX": "101%" });
});
