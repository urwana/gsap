window.addEventListener("load", () => {

  const  openingTimeLine = gsap.timeline();
  openingTimeLine
  .fromTo(".opening__logo", {clipPath:'inset(0 100% 0 0)', scale:1, autoAlpha:0},
                            {clipPath:'inset(0 0% 0 0)', scale:1.1, autoAlpha:1, delay:1, duration:3, delay:0.5, ease: "power4.out"})
  .to(".opening__mask", {y:'-100%', duration:2, ease: "power4.out"})
  .to(".mainVisual img", {scale:1, duration:2, ease: "power4.out"},'-=2.2')
  .to(".opening__logo", {autoAlpha:0, duration:1},'>-1.5')


});
