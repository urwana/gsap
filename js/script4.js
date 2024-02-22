// click 判定
// 押されたボタンに応じてアニメーション

window.addEventListener("DOMContentLoaded", (event) => {
  const start = document.querySelector(".start");
  const pause = document.querySelector(".pause");
  const resume = document.querySelector(".resume");
  const reverse = document.querySelector(".reverse");
  const restart = document.querySelector(".restart");
  const kill = document.querySelector(".kill");

  const anime = gsap.to(".box2", { rotate: 360, delay: 1, duration: 3 });
  anime.pause();
  //   setTimeout(() => {
  //     anime.play();
  //   }, 5000);

  start.addEventListener("click", () => {
    anime.play();
  });

  pause.addEventListener("click", () => {
    anime.pause();
  });

  resume.addEventListener("click", () => {
    anime.resume();
  });

  reverse.addEventListener("click", () => {
    anime.reverse();
  });

  restart.addEventListener("click", () => {
    anime.restart();
  });

  kill.addEventListener("click", () => {
    anime.kill();
  });
});
