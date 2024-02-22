// window.addEventListener("DOMContentLoaded", (event) => {});

// window.addEventListener("load", (event) => {});

window.addEventListener("DOMContentLoaded", (event) => {
  // 擬似要素はDOM ではないので JS や GSAP では制御できないが、
  // カスタムプロパティで対応可能
  gsap.to(".heading", { "--hogehoge": 1, delay: 1, duration: 0.1 });
});
