gsap.set(".img.brightness", { filter: "brightness(0)" });
gsap.set(".img.blur", { filter: "blur(0)" });
gsap.set(".img.greyscale", { filter: "grayscale(0)" });
gsap.set(".js-move-text", { y: 20, autoAlpha: 0 });

// const triggerEffects = document.querySelectorAll(".trigger-effect");
const effect = ["brightness(.5)", "blur(10px)", "grayscale(1)"];

//triggerEffects.forEach((trigger, index) => {

// 普通の書き方
// gsap.utils.toArray(".trigger-effect").forEach((trigger, index) => {
//   const image = trigger.querySelector(".img");
//   const texts = trigger.querySelectorAll(".js-move-text");
//   ScrollTrigger.create({
//     trigger: trigger,
//     start: "top center",
//     onEnter: () => {
//       gsap.to(image, { filter: effect[index], duration: 2 });
//       gsap.fromTo(
//         texts,
//         { y: 20, autoAlpha: 0 },
//         { y: 0, autoAlpha: 1, stagger: 0.3 }
//       );
//     },
//   });
// });

// 拡張性のある書き方
gsap.utils.toArray(".trigger-effect").forEach((trigger, index) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: "top center",
    },
  });
  const image = trigger.querySelector(".img");
  const texts = trigger.querySelectorAll(".js-move-text");
  tl.to(image, { filter: effect[index], duration: 2 }).fromTo(
    texts,
    { y: 20, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, stagger: 0.3 },
    "<"
  );
});
