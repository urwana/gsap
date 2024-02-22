window.addEventListener("load", () => {
const opninigTimeline = gsap.timeline();
opninigTimeline
.fromTo('.opening__logo', {autoAlpha: 0}, {autoAlpha: 1, delay: .5})
.to('.opening__logo', {scale:1.1, autoAlpha:0, duration: .5, filter:'blur(5px)'},'+=1')
.to('.opening__mask', {duration:1.5, scaleX:0, ease: 'power4.inOut'})
.to('.img-wrap',{duration:1.5, clipPath:'inset(0 0% 0 0)', ease: 'power4.inOut',
                stagger:.2},'-=1')
.set('.opening', {autoAlpha:0})


});
