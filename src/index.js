
// import GSAP and ScrollTrigger
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease:"none", duration:2})

let tl = gsap.timeline({scrollTrigger:{
	trigger:"section",
  scrub: true,
  pin: true,
  start: "top 0px", // the default values
  end: "+=300",
  markers:true,
	toggleActions: "play none none reverse"
}})
.to("#sixth", {y:-700})
.to("#fifth", {y:-500}, 0)
.to("#fourth", {y:-400}, 0)
.to("#third", {y:-300}, 0)
.to("#second", {y:-200}, 0)
.to("#first", {y:-100}, 0)
.to('.content, .blur',{ top: '0%' }, 0 )
.to('.title, nav, .footer-wrapper',{ y: -1000 }, 0 )
.from('.one',{ top:'300px', opacity: 0 },0)
.from('.two',{ top:'-300px', opacity: 0 }, 0)
.from('.three',{ top:'300px', opacity: 0 }, 0)
.from('.four',{ top:'-300px', opacity: 0 }, 0)
