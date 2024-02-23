// textContent プロパティは、要素のテキストコンテンツを取得または設定。
// innerHTML プロパティは、要素のHTMLコンテンツを取得または設定。

const listWrapper = document.querySelector(".js-listWrapper");
const splitTextAll = document.querySelectorAll(".js-splitText");
listWrapper.innerHTML = "";

splitTextAll.forEach((splitTextWrapA) => {
  const text = splitTextWrapA.textContent;
  const splitTextWrapAArray = text.split("");

  let html = "";
  splitTextWrapAArray.forEach((char) => {
    html += `<span>${char}</span>`;
  });

  const textWrap = document.createElement("span");
  textWrap.classList.add("text-wrap");
  const before = document.createElement("div");
  before.classList.add("before");
  const after = document.createElement("div");
  after.classList.add("after");
  before.innerHTML = html;
  after.innerHTML = html;
  splitTextWrapA.textContent = "";
  textWrap.appendChild(before);
  textWrap.appendChild(after);
  splitTextWrapA.appendChild(textWrap);
  const list = document.createElement("li");
  list.classList.add("list");
  list.appendChild(splitTextWrapA);
  listWrapper.appendChild(list);
});

splitTextAll.forEach((target) => {
  if (target.classList.contains("is-active")) return;
  const before = target.querySelector(".before").querySelectorAll("span");
  const after = target.querySelector(".after").querySelectorAll("span");
  target.addEventListener("mouseenter", (e) => {
    gsap.to(before, { y: "-100%", stagger: 0.1 });
    gsap.to(after, { y: "0%", stagger: 0.1 });
  });
  target.addEventListener("mouseleave", (e) => {
    gsap.to(before, { y: "0%", stagger: 0.1 });
    gsap.to(after, { y: "100%", stagger: 0.1 });
  });
});

// document.querySelectorAll() メソッドは、
// 指定されたCSSセレクタに一致するすべての要素を返しますが、
// その返り値は NodeList オブジェクトです。
// NodeList オブジェクトは配列のように見えますが、
// 通常の配列とは異なり、Array オブジェクトではありません。

// const splitTextAllArray = [...splitTextAll];
