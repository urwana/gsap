// click 判定
// 押されたボタンに応じてアニメーション

// scrollTo:{x:目的地, y:目的地}
//scroll-behavior と併用しない
window.addEventListener("DOMContentLoaded", (event) => {

  const list = document.querySelector('.list');
  const anchors = document.querySelectorAll('.list li a');


anchors.forEach((anchor)=>{
  anchor.addEventListener('click',(e)=>{
    e.preventDefault();
    // 素の js, ブラウザ間で速度など差分がある
    // let element = document.querySelector(anchor.getAttribute('href'));
    // window.scrollTo({
    //   top:id.offsetTop,
    //   behavior:'smooth'
    // })

    // ScrollToPluginをロード/登録するのを忘れている

    let id = anchor.getAttribute('href')

    console.log(id);

    // GSAP ScrollTo
    gsap.to(window,{duration:1, ease:'power2.out', scrollTo:{
      y:id,
      // anime 途中での変更できない
      autokill:true
    }})


  })
})
});

