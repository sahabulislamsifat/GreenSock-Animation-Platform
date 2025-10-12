// gsap.from("#pageOne #box", {
//   scale: 0,
//   delay: 1,
//   duration: 2,
//   rotate: 360,
//   // ease: "elastic",
// });

// gsap.from("#pageTwo #box", {
//   scale: 0,
//   duration: 2,
//   rotate: 360,
//   scrollTrigger: {
//     trigger: "#pageTwo #box",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//   },
// });

// // gsap.from("#pageThree #box", {
// //   scale: 0,
// //   delay: 3,
// //   duration: 2,
// //   rotate: 360,
// //   scrollTrigger: {
// //     trigger: "#pageThree #box",
// //     scroller: "body",
// //     markers: true,
// //     start: "top 60%",
// //   },
// // });

// gsap.from("#pageTwo, h1", {
//   opacity: 0,
//   duration: 1,
//   x: -100,
//   scrollTrigger: {
//     trigger: "#pageTwo h1",
//     scroller: "body",
//     markers: true,
//     start: "top 80%",
//     end: "top 30%",
//     scrub: true,
//     // toggleActions: "restart pause reverse pause"
//   },
// });
// gsap.from(" h1", {
//   opacity: 0,
//   duration: 1,
//   x: -500,
//   scrollTrigger: {
//     trigger: "#pageTwo h1",
//     scroller: "body",
//     markers: true,
//     // start: "top 80%",
//     start: "top 50%",

//     // toggleActions: "restart pause reverse pause"
//   },
// });

// gsap.to("h4", {
//   opacity: 0,
//   duration: 1,
//   x: 500,
//   scrollTrigger: {
//     trigger: "#pageTwo h1",
//     scroller: "body",
//     markers: true,
//     // start: "top 80%",
//     start: "top 50%",

//     // toggleActions: "restart pause reverse pause"
//   },
// });

// gsap.from("#pageTwo #box", {
//   scale: 0,
//   opacity: 0,
//   //   duration: 2,
//   rotate: 760,
//   scrollTrigger: {
//     trigger: "#pageTwo #box",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//     end: "top 30%",
//     scrub: true,
//   },
// });

gsap.to("#pageTwo h1", {
  transform: "translateX(-150%)",
  scrollTrigger: {
    trigger: "#pageTwo",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -150%",
    scrub: 2,
    pin: true,
  },
});
