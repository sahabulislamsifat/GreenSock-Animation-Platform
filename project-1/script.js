const main = document.querySelector("#main");
const cursor = document.querySelector("#cursor");
const imageDiv = document.querySelector("#image");

// main.addEventListener("mousemove", (e) => {
//   const x = e.clientX;
//   const y = e.clientY;
//   cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
//   cursor.style.opacity = 1;
// });

// main.addEventListener("mouseleave", () => {
//   cursor.style.opacity = 0;
// });

main.addEventListener("mousemove", (e) => {
  //   console.log("event fired");
  //   console.log(e);
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 1,
    ease: "back.out",
    opacity: 1,
  });
});

imageDiv.addEventListener("mouseenter", () => {
  cursor.innerHTML = "View More";
  gsap.to(cursor, {
    scale: 2,
    // backgroundColor: "transparent",
    backgroundColor: "ffffff8a",
  });
});

imageDiv.addEventListener("mouseleave", () => {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "#fff",
  });
});

// imageDiv.addEventListener("mouseenter", () => {
//   cursor.style.backgroundColor = "transparent";
//   image.style.transform = "scale(1.2)";
// });

// imageDiv.addEventListener("mouseleave", () => {
//   cursor.style.backgroundColor = "rgba(0,0,0,0.8)";
//   image.style.transform = "scale(1)";
// });
