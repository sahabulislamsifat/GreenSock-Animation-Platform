// // const h1Text = document.querySelector("h1").textContent;
// const h1 = document.querySelector("h1");
// const h1Text = h1.textContent;

// // console.log(h1Text);
// const splittedText = h1Text.split("");
// // const splittedText = h1Text.split(" ");

// // console.log(splittedText);
// // splittedText.forEach(() => {
// //   console.log("Hello");
// // });

// // let clutter;
// let clutter = "";

// // splittedText.forEach(function () {
// //   clutter = clutter + "hey";
// // });
// splittedText.forEach(function (e) {
//   // clutter = clutter + "hey";
//   //   clutter = clutter + e;
//   //   clutter += e;
//   clutter += `<span>${e}</span>`;
//   //   console.log(e);
// });

// // console.log(clutter);
// h1.innerHTML = clutter;

const textBreak = () => {
  const h1 = document.querySelector("h1");
  const h1Text = h1.textContent;

  const splittedText = h1Text.split("");
  const halfValue = splittedText.length / 2;
  let clutter = "";

  splittedText.forEach((e, idx) => {
    if (idx < halfValue) {
      clutter += `<span class="a">${e}</span>`;
    } else {
      clutter += `<span class="b">${e}</span>`;
    }
  });
  h1.innerHTML = clutter;
};
textBreak();

gsap.from("h1 span", {
  y: 100,
  duration: 0.8,
  opacity: 0,
  delay: 0.4,
  stagger: 0.15,
});

// gsap.from("h1 a", {
//   y: 80,
//   duration: 0.6,
//   stagger: 0.15,
//   delay: 0.5,
//   opacity: 0,
// });
