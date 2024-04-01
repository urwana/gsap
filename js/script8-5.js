const percentageElemnt = document.querySelector(".percentage");
const text = document.querySelector(".text");
gsap.fromTo(
  "circle",
  { strokeDasharray: "0,905" },
  {
    strokeDasharray: "905,905",
    scrollTrigger: {
      trigger: ".container",
      start: "center center",
      scrub: 1,
      pin: true,
      onUpdate: (self) => {
        let number = Math.round(self.progress * 100);
        let percentage = String(number) + "%";
        percentageElemnt.innerText = percentage;
      },
      onLeave: () => {
        text.classList.add("is-highlight");
      },
      onEnterBack: () => {
        text.classList.remove("is-highlight");
      },
    },
  }
); //直径(r-144) * 3.14
