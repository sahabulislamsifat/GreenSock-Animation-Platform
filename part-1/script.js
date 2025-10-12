// gsap.to("#boxOne", { duration: 2, x: 1000, delay: 1 });

// gsap.to("#boxTwo", { duration: 2, x: 1000, y: 1000, delay: 1 });

// gsap.to("#boxOne", { duration: 2, x: 1000, delay: 1 });

// gsap.from("#boxTwo", { duration: 2, x: 1000, delay: 1 });

// gsap.fromTo(
//   "#boxOne",
//   { x: 0, y: 0 },
//   { duration: 2, x: 1000, y: 500, delay: 1 }
// );

// gsap.to("#boxOne", {
//   duration: 2,
//   x: 1000,
//   delay: 1,
//   ease: "bounce.out",
//   rotate: 360,
//   scale: 0.5,
//   //   scale: 2,
//   //   backgroundColor: "red",
//   //   borderRadius: "50%",
//   boxShadow: "0px 0px 20px 5px rgba(0,0,0,0.75)",
// });

// gsap.to("#title, #sub-title, #description, #summary", {
//   opacity: 0,
//   duration: 1,
//   //   y: -100,
//   y: 30,
//   //   delay: 0.5,
//   delay: 1,
//   //   stagger: 0.5,
//   //   stagger: 1,
//   stagger: 2,
//   //   stagger: { each: 0.3, from: "start" },
//   //   ease: "power1.inOut",
//   //   ease: "back.in(1.7)",
//   //   ease: "elastic.in(1, 0.3)",
// });

// gsap.to("#boxThree", {
//   duration: 2,
//   x: 1000,
//   delay: 1,
//   ease: "bounce.out",
//   rotate: 360,
//   //   repeat: 2,
//   repeat: 1,
//   //   repeat: -1,
//   yoyo: true,
//   scale: 0.5,
//   boxShadow: "0px 0px 20px 5px rgba(0,0,0,0.75)",
//   onStart: () => console.log("Animation started"),
//   onComplete: () => console.log("Animation completed"),
//   onUpdate: () => console.log("Animation updated"),
// });

// gsap.to("#box1", {
//   x: 1000,
//   duration: 1,
//   ease: "power1.inOut",
//   delay: 0.5,
//   rotate: 360, // Adiciona uma animação de
// });

// gsap.to("#box2", {
//   x: 1000,
//   duration: 1,
//   ease: "power1.inOut",
//   delay: 1,
// });

// gsap.to("#box3", {
//   x: 1000,
//   duration: 1,
//   ease: "power1.inOut",
//   delay: 1.5,
//   rotate: -360, // Adiciona uma animação de rotação
// });

//* Timeline
// const tl = gsap.timeline({ defaults: { duration: 1, ease: "power1.inOut" } });

// tl.to("#box1", { x: 1000, rotate: 360 }) // Adiciona uma animação de rotação
//   .to("#box2", { x: 1000 }, "-=0.5") // Inicia 0.5 segundos antes da animação anterior terminar
//   .to("#box3", { x: 1000, rotate: -360 }, "-=0.5"); // Adiciona uma animação de rotação

const tl = gsap.timeline();

tl.from("#logo", { y: -20, opacity: 0, duration: 1, delay: 0.5 });

// tl.from("#nav-items", { y: -30, opacity: 0, duration: 1, stagger: 0.3 });
// tl.from("#nav-items", {
//   y: 30,
//   opacity: 0,
//   duration: 1,
//   delay: 0.2,
//   //   stagger: { each: 0.3, from: "start" },
// });

// tl.from("#nav-items", { y: 50, opacity: 0, duration: 1 }, "-=0.5");

// tl.from("#title", { y: 50, opacity: 0, duration: 1 }, "-=0.5");

// tl.from("#sub-title", { y: 50, opacity: 0, duration: 1 }, "-=0.5");
// tl.from("#description", { y: 50, opacity: 0, duration: 1 }, "-=0.5");
// tl.from("#summary", { y: 50, opacity: 0, duration: 1 }, "-=0.5");
// tl.from("#cta", { y: 50, opacity: 0, duration: 1 }, "-=0.5");
// tl.from("#social-icons", { y: 50, opacity: 0, duration: 1 }, "-=0.5");
// tl.from("#footer", { y: 50, opacity: 0, duration: 1 }, "-=0.5");
// tl.from("#hero-image", { x: 50, opacity: 0, duration: 1 }, "-=0.5");
// tl.from("#hero-image", { x: 50, opacity: 0, duration: 1 }, "-=1");
