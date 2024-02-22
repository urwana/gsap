// よく使うプロパティとGSAP特有のプロパティ
// x x:()=>{}も出来る
// y
// xPercent
// yPercent
// rotate
// rotateX
// rotateY
// rotateZ
// scale

// clip-path inset(0 0 0 0)
// filter:'blur'
// filter:property[i]みたいに配列を入れることもできる
// width
// height
// display:'none'
// // 👇ただここにもあるように気をつけよう
// https://greensock.com/get-started/#timeline-control

// autoAlpha
// duration
// repeat -1だと無限
// repeatDelay
// yoyo
// yoyoEase
// delay
// stagger

window.addEventListener("DOMContentLoaded", (event) => {
  gsap.to(".box", { x: "100rem", delay: 0.5 });
  gsap.to(".box", { x: () => window.innerWidth / 2, delay: 0.5 });
  gsap.to(".box", { x: "random(0, 800, 100)", delay: 0.5 });
  gsap.to(".box", { y: () => window.innerWidth / 2, delay: 0.5 });
  gsap.to(".box", { xPercent: 50, x: 120, delay: 0.5 }); //要素の中心を基準にする, 非推奨
  gsap.to(".box", { xPercent: 50, x: 120, delay: 0.5 });
  gsap.to(".box", { rotate: 120, delay: 0.5 });
  gsap.to(".box", { rotateX: 120, delay: 0.5 });
  gsap.to(".box", { rotateX: 245, duration: 10, delay: 0.5 });
  gsap.to(".box", { rotateY: 245, duration: 10, delay: 0.5 });
  gsap.to(".box", { rotateZ: 245, duration: 10, delay: 0.5 }); // ロール、ピッチ、ヨー
  gsap.to(".box", { scale: 2, duration: 10, delay: 0.5 });
  gsap.to(".box", { scale: 3, duration: 2, delay: 0.5 });
  gsap.to(".box", {
    clipPath: "inset(10% 50% 7% 9%)",
    duration: 2,
    delay: 0.5,
  });
  gsap.to(".box", { filter: "blur(15px)", duration: 10, delay: 0.5 });
  const testArray = ["blur(15px)", "grayscale(.9)"];
  gsap.to(".box", { filter: testArray[1], duration: 1, delay: 0.9 });

  gsap.to(".box", { autoAlpha: 0.3, duration: 1, delay: 0.5 });
  autoAlpha = opacity + visibility;

  gsap.to(".box", {
    autoAlpha: 0,
    repeat: 1, // 1回繰り返す, -1無限
    repeatDelay: 2,
    yoyo: true, // ヨーヨー
    duration: 1,
    delay: 0.5,
  });

  gsap.to(".box", {
    x: 200,
    repeat: -1, // -1無限
    repeatDelay: 0.5,
    ease: "bounce.out",
    yoyo: true, // ヨーヨー
    yoyoEase: true,
    duration: 2,
    delay: 0.5,
  });

  gsap.to(".box", {
    x: 300,
    delay: 1,
    stagger: 1,
  });

  gsap.to(".box", {
    x: 300,
    delay: 1,
    stagger: {
      each: 1,
      from: "random",
    },
  });
});
