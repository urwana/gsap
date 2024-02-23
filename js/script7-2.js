const timeline = gsap.timeline();

const splitTextAll = document.querySelectorAll(".js-splitText");

splitTextAll.forEach((splitText) => {
  const text = splitText.textContent;
  const splitTexArray = text.split("");
  let html = "";
  splitTexArray.forEach((char) => {
    html += `<span>${char}</span>`;
  });
  splitText.innerHTML = html;
});

const targets = document.querySelectorAll(".js-text-effect");
targets.forEach((target) => {
  const spans = target.querySelectorAll("span");
  gsap.to(spans, {
    rotateY: 0,
    duration: 0.5,
    stagger: 0.05,
    autoAlpha: 1,
    scrollTrigger: {
      trigger: target,
      start: "top bottom",
    },
  });
});


