// click 判定
// 押されたボタンに応じてアニメーション

// scrollTo:{x:目的地, y:目的地}
//scroll-behavior と併用しない
window.addEventListener("DOMContentLoaded", (event) => {

  // gsap.to('.box', {x: 1100, duration:3, delay:1, scrollTrigger:{
  //   trigger:".box", //引き金
  //   start: 'top center', // アニメが発火するスタート位置を指定
  //   markers:true
  // } })
  gsap.to('.box', {x: 1100, rotation: 360, duration:3, delay:1, scrollTrigger:{
    trigger:".box", //引き金
    // start: 'top center', // [対象オブジェクト] [browser]
    start: 'top 80%', // [対象オブジェクト] [browser]
    // start: '50% 47%', // [対象オブジェクト] [browser]
    // start: '280ox 540px', // [対象オブジェクト] [browser]
    // end:'top 20%',
    // toggleActions:'play none none reverse',
    // toggleActions:onEnter, onLeave, onEnterBack, onEnterLeaveBack,
    // scrub: true,
    // scrub: 1, // .1秒遅れて追いつく
    // scrub: 10, // .1秒遅れて追いつく
    // pin:true,
    // pin:'.box2',
    // end: 'top top',
    end: 'top 20%',
    toggleClass:{
      targets:'.box',
      className: 'is-active'
    },
    // once: true,
    // onEnter:()=>{
    //   console.log('onEnter')
    // },
    // onLeave:()=>{
    //   console.log('onLeave')
    // },
    // onEnterBack:()=>{
    //   console.log('onEnterBack')
    // },
    // onEnterLeaveBack:()=>{
    //   console.log('onLeaveBack')
    // },
    // endTrigger:'.box2',

    markers:{
      startColor:'aqua',
      endColor:'red'
    },
    onUpdate:(self)=>{
      console.log(self.progress);
      console.log(self.direction);
    }
  } })

});

// ease に scrub つけた方が善い