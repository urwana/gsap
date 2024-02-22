window.addEventListener("load", () => {
  let btn = document.querySelector(".header-menu-trigger");
  let menu = document.querySelector(".menu");
  let menuTL = gsap.timeline();

  btn.addEventListener("click", function() {
    if (btn.classList.contains("is-active")) {
      //閉じる
      menuTL
        .set(".menu__title", { "--scaleX": "0" })
        .to(".js-text-move", { y: "100%" })
        .to(".menu__left", {
          clipPath: "inset(100% 0% 0% 0%)",
          ease: "power2.out",
          duration: 1,
        })
        .to(
          ".menu__right",
          { clipPath: "inset(0% 0% 100% 0%)", ease: "power2.out", duration: 1 },
          "<"
        )
        .set(".menu__left", { clipPath: "inset(100% 0% 0% 0%)" })
        .set(".menu__right", { clipPath: "inset(0% 0% 100% 0%)" })
        .set(".menu", { display: "none" })
        .add(() => {
          btn.classList.remove("is-active");
          menu.classList.remove("is-active");
        });
    } else {
      //開く
      btn.classList.add("is-active");
      menu.classList.add("is-active");
      menuTL
        .set(".menu", { display: "flex" })
        .fromTo(
          ".menu__left",
          { clipPath: "inset(100% 0% 0% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", ease: "power2.out", duration: 1 }
        )
        .fromTo(
          ".menu__right",
          { clipPath: "inset(0% 0% 100% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", ease: "power2.out", duration: 1 },
          "<"
        )
        .fromTo(
          ".menu__left img",
          { clipPath: "inset(100% 0% 0% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", ease: "power2.out", duration: 1 },
          "-=.5"
        )
        .to(".js-text-move", { y: "0%" })
        .to(".menu__title", { "--scaleX": "1" });
    }
  });
});
