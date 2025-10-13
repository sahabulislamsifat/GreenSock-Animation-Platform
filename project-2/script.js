const menu = document.querySelector("#nav i");
const cross = document.querySelector("#full i");

const tl = gsap.timeline();

tl.to("#full", {
  right: 0,
  duration: 0.5,
});

tl.from("#full p", {
  x: 150,
  duration: 0.6,
  stagger: 0.2,
  opacity: 0,
});

tl.from("#full i", {
  opacity: 0,
});

tl.pause();

menu.addEventListener("click", () => {
  tl.play();
});

cross.addEventListener("click", () => {
  tl.reverse();
});
