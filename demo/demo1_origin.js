const mv = document.getElementById("js-mv");
const mask = document.getElementById("js-mask");
const logo = document.getElementById("js-logo");
const menu = document.getElementById("js-menu");
const mvHeading = document.getElementById("js-mv-heading");

const tl = gsap.timeline();
tl.to(mv, 1, {
  height: "80%",
  ease: "power2.inOut",
})
  .to(mv, 1.2, {
    width: "80%",
    ease: "power2.inOut",
  })
  .fromTo(
    mask,
    1.2,
    {
      y: "-100%",
    },
    {
      y: "0%",
      ease: "power2.inOut",
    },
    "-=1.2"
  )
  //   .fromTo(
  //     logo,
  //     0.5,
  //     {
  //       opacity: 0,
  //       x: -30,
  //     },
  //     {
  //       opacity: 1,
  //       x: 0,
  //       ease: "expo.out",
  //     },
  //     "-=0.5"
  //   )
  //   .fromTo(
  //     menu,
  //     0.5,
  //     {
  //       opacity: 0,
  //       x: -30,
  //     },
  //     {
  //       opacity: 1,
  //       x: 0,
  //       ease: "expo.out",
  //     },
  //     "-=0.5"
  //   )
  .fromTo(
    mvHeading,
    0.5,
    {
      opacity: 0,
      x: -30,
    },
    {
      opacity: 1,
      x: 0,
      ease: "expo.out",
    },
    "-=0.5"
  );
