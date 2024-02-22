window.addEventListener("load", () => {
const opninigTimeline = gsap.timeline();
opninigTimeline
.to('.opening__img',{y:0,duration:1.5, ease: 'power4.out'})
.to('.opening__img',{scale:1,duration:1.5})
.to('.opening__img',{filter:'grayscale(0)',duration:.5})
.to('.js-textAnimation span',{y:'0%',duration:1.5,stagger:.1})
.to('.header',{y:'0%',duration:1},'-=.75')
});
