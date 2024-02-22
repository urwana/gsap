window.addEventListener("DOMContentLoaded", () => {

  // const mm = gsap.matchMedia();
  // mm.add('(min-width:901px)',()=>{
  //   gsap.fromTo('.card', {autoAlpha:0, y:20},
  //     {autoAlpha:1, stagger:1,scrollTrigger:{
  //       trigger:'.cardWrapper',
  //       start:'center center',
  //       markers:true,
  //     }
  //   });
  // });
  // mm.add('(max-width:900px)',()=>{
  //   const cards = document.querySelectorAll('.card');
  //   cards.forEach((card)=>{
  //     gsap.fromTo(card, {autoAlpha:0, y:30},
  //     {y:0, autoAlpha:1, scrollTrigger:{
  //       trigger:card,
  //       start:'center, center',
  //       markers:true
  //   }})
  //   });
  // });

  const markers = document.querySelectorAll('.js_maker');
  // markers.forEach((marker)=>{
  //   gsap.to(marker, {backgroundSize:'100% 100%', scrollTrigger:{
  //     trigger:marker,
  //     start:'center 80%',
  //     markers:true
  //   }})
  // });

  gsap.registerEffect({
    name:'markerAnimation',
    effect:(targets,config)=>{
      gsap.to(targets,{backgroundSize:config.backgroundSize, duration:config.duration, scrollTrigger:{
        trigger:targets,
        start:config.start,
        markers:true
      }})
    },
    defaults:{backgroundSize:'100% 100%', duration:1, start:'center 80%'}
  })

  markers.forEach((maker, index)=>{
    if(index == 0 || index== 1){
      gsap.effects.markerAnimation(maker,{backgroundSize:'100% 100%'})
    }else{
      gsap.effects.markerAnimation(maker,{backgroundSize:'100% 80%'})
    }
  });
});
