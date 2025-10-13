// const initialPath = "M10 100 Q 250 100, 490 100,";
// const finalPath = "M10 80 Q 250 150, 490 80,";
// const initialPath = "M10 100 Q 500 100, 990 100";
const path = "M 10 100 Q 500 100 990 100";
const finalPath = "M 10 100 Q 500 100 990 100";

const string = document.querySelector("#string");

// string.addEventListener("click", () => {
//   const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.inOut" } });
//   tl.to(string, { attr: { d: finalPath }, y: -20 });
// });
// string.addEventListener("mouseenter", () => {
//   console.log("mouse entered");
// });
// string.addEventListener("mouseleave", () => {
//   console.log("mouse leaved");
// });

// string.addEventListener("mousemove", (dets) => {
//   //   console.log(dets);
//   //   console.log(dets.x);
// //   console.log(dets.y);
// });

string.addEventListener("mousemove", (dets) => {
  //   const path = `M 10 100 Q 500 ${dets.y}, 990 100`;
  const path = `M 10 100 Q ${dets.x} ${dets.y}, 990 100`;
  //   console.log(initialPath);
  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.3,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", (dets) => {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(1, 0.3)",
  });
});
