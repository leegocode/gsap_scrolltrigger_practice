
// import GSAP and ScrollTrigger
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
// gsap.to(".box",{
//   scrollTrigger: {
//     trigger: '.box',
//     pin: true,
//     start:"top 75%",
//     end:"bottom 25%"
//   },
//   x:400
// })


// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger:'.dark',
//     start:"top 75%",
//     end:"bottom 25%",
//     toggleActions:"restart complete reverse reset"
//   }
// })
//
// tl.from("#green_section",{ x: 1000,y: 300, opacity:0, duration: .7})
// .from(".content", {y:500, opacity: 0, duration: .5}, "-=1")
