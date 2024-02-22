// window.addEventListener("DOMContentLoaded", (event) => {});

// window.addEventListener("load", (event) => {});

window.addEventListener("DOMContentLoaded", (event) => {
  // gsap.to(".box", { x: 100, delay: 0.5 });
  // gsap.from(".box", { x: 100, delay: 0.5 });
  // delay は to に書く
  // gsap.fromTo(".box", { x: 100 }, { x: 500, delay: 0.5 });
  //   gsap.fromTo(".box, .box2", { x: 100 }, { x: 500, delay: 0.5 });
  //   gsap.set(".box", { x: 500 }); // 初期状態を設定
  const timeLine = gsap.timeline({
    defaults: {
      duration: 1,
      backgroundColor: "blue",
    },
  });
  timeLine
    .to(".box", { x: 100, delay: 0.5 })
    .to(".box", { y: 100, delay: 0.5 }, "<") // 上のアニメと同時
    .to(".box", { x: 200, delay: 0.5 })
    .to(".box", { y: 200, delay: 0.5 }, "<") // 上のアニメと同時
    .to(".box", { x: 300, delay: 0.5 }, "-=.8") // 0.8 早く
    .to(".box", { y: 300, delay: 0.5 }, "+=.8") // 0.8 遅く
    .to(".box", { x: 400, delay: 0.5 }, "hoge") // 文字
    .to(".box", { x: 400, delay: 0.5 }, "hoge＋＝０.5") // hoge連動
    .add(() => {
      console.log("gsap test");
      const a = document.querySelector(".box");
      a.classList.add("is-active");
    });
});
