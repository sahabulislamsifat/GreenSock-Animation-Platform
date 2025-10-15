// window.addEventListener("wheel", (e) => {
//   if (e.deltaY > 0) {
//     console.log("Scroll up");
//   } else {
//     console.log("Scroll down");
//   }
// });

const marqueeAnimation = () => {
  window.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
      //   console.log("scroll up");
      gsap.to(".marquee", {
        transform: "translateX(-200%)",
        repeat: -1,
        duration: 4,
        ease: "none",
      });
      gsap.to(".marquee img", {
        rotate: 180,
      });
    } else {
      // console.log("scroll down");

      gsap.to(".marquee", {
        transform: "translateX(0%)",
        repeat: -1,
        duration: 4,
        ease: "none",
      });
      gsap.to(".marquee img", {
        rotate: 0,
      });
    }
  });
};

marqueeAnimation();
