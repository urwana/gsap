window.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".header-menu-trigger");
  const headerMenu = document.querySelector(".header-menu");
  const menuTimeline = gsap.timeline();
  const windowHeight = window.innerHeight;
  const scale = windowHeight / btn.clientHeight * 2;
  //let windowWidth = window.innerWidth;
  btn.addEventListener("click", () => {
    if(headerMenu.classList.contains("is-active")) {
      menuTimeline.add(()=>{
        btn.classList.remove("is-active");
        headerMenu.classList.remove("is-active");
      })
      .to(".circle-bg", {scale:0, ease: "power2.out"})
      .to(".header-lists li", {autoAlpha: 0, y:20, duration: 0.4, stagger:.025}, "-=.1")
    }else{
      menuTimeline.add(()=>{
        headerMenu.classList.add("is-active");
        btn.classList.add("is-active");
      })
      .to(".circle-bg", {scale:scale, ease: "power2.out"})
      .fromTo(".header-lists li", {autoAlpha: 0, y:20}, {autoAlpha: 1, y:0, duration: 0.4, stagger:.025}, "-=.1")
    }

});
});
