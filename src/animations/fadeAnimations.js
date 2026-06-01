import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initGSAPAnimations = () => {
gsap.from(".menu", {
	y: 100,
	stagger: 0.1 
});

};
