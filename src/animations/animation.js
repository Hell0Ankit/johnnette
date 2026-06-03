import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initAnimations = () => {

// FADE LEFT
gsap.utils.toArray(".fade-left").forEach((element) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play reset play reset",
      },
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  });

// FADE RIGHT
gsap.utils.toArray(".fade-right").forEach((element) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
      },
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  });

// FADE UP
gsap.utils.toArray(".fade-up").forEach((element) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play reset play reset",

      },
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  });

// FADE DOWN
gsap.utils.toArray(".fade-down").forEach((element) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play reset play reset",

      },
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  });

// SLIDE UP
gsap.utils.toArray(".slide-up").forEach((element) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play reset play reset",

      },
      y: 150,
      duration: 1.2,
      ease: "expo.out",
    });
  });

// SLIDE DOWN
gsap.utils.toArray(".slide-down").forEach((element) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play reset play reset",

      },
      y: -150,
      duration: 1.2,
      ease: "expo.out",
    });
  });


// ZOOM IN

gsap.utils.toArray(".zoom-in").forEach((element) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play reset play reset",

      },
      scale: 0.7,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
    });
  });

// ZOOM OUT
gsap.utils.toArray(".zoom-out").forEach((element) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play reset play reset",

      },
      scale: 1.3,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  });

// ROTATE IN
gsap.utils.toArray(".rotate-in").forEach((element) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play reset play reset",

      },
      rotation: -180,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });
  });

// FLIP IN
  gsap.utils.toArray(".flip-in").forEach((element) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
         toggleActions: "play reset play reset",
      },
      rotationY: 90,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });
  });

// IMAGE REVEAL
  gsap.utils.toArray(".image-reveal").forEach((element) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
      },
      y: 50,
      scale: 0.95,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });
  });


// STAGGER

  gsap.utils.toArray(".stagger-wrapper").forEach((wrapper) => {

  const items = wrapper.querySelectorAll(".stagger-item");

  gsap.from(items, {
    scrollTrigger: {
      trigger: wrapper,
      start: "top 85%",
      once: true,
    },

    y: 60,
    opacity: 0,

    stagger: 0.2,
    duration: 0.8,

    ease: "power3.out",
  });

});


// TEAM SECTION
document.querySelectorAll(".team-card").forEach((card) => {

  card.addEventListener("mouseenter", () => {

    gsap.to(card, {
      y: -10,
      duration: 0.3,
    });

  });

  card.addEventListener("mouseleave", () => {

    gsap.to(card, {
      y: 0,
      duration: 0.3,
    });

  });

});

gsap.utils.toArray(".team-img").forEach((img) => {

  gsap.from(img, {
    scrollTrigger: {
      trigger: img,
      start: "top 85%",
      once: true,
      
    },

    scale: 0.7,
    opacity: 0,

    duration: 1,
    ease: "back.out(1.7)",
  });

});




};




