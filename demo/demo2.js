const squareNumber = 18;
const elementBoxes = document.getElementById("boxes");

elementBoxes.style.cssText = `
grid-template-columns: repeat(${squareNumber}, 1fr);
grid-template-rows: repeat(${squareNumber}, 1fr);
`;

for (let i = 0; i < squareNumber * squareNumber; i++) {
  const li = document.createElement("li");
  elementBoxes.appendChild(li);
  li.addEventListener("click", () => {
    animation(i);
    document
      .querySelectorAll(".boxes li")
      .forEach((el) => el.classList.add("inActive"));
  });
}

function animation(index) {
  gsap
    .to(".boxes li", 1.5, {
      scale: 0.6,
      opacity: 0.3,
      // rotationX: 180,
      ease: "elastic.out(.8, .3)",
      yoyoEase: "elastic.out(.8, .3)",
      stagger: {
        amount: 0.4,
        grid: "auto",
        from: index,
      },

      onComplete: () => {
        document
          .querySelectorAll(".boxes li")
          .forEach((el) => el.classList.remove("inActive"));
      },
    })
    .repeat(1)
    .yoyo(true);
}
