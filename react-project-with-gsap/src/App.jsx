// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { useRef } from "react";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const App = () => {
  // useGSAP(() => {
  //   gsap.to(".box", {
  //     x: 300,
  //     delay: 0.5,
  //     duration: 0.5,
  //   });
  // });

  // const gsapRef = useRef();
  // useGSAP(() => {
  //   gsap.to(gsapRef.current, {
  //     x: 1500,
  //     duration: 2,
  //     delay: 0.5,
  //     rotate: 720,
  //     repeat: -1,
  //   });
  // });

  // const boxRef = useRef();
  // useGSAP(() => {
  //   gsap.from(boxRef.current, {
  //     // y: 300,
  //     rotate: 360,
  //     repeat: -1,
  //     delay: 1,
  //     duration: 1,
  //   });
  // });

  // const container = useRef();

  // useGSAP(
  //   () => {
  //     gsap.from(".box", {
  //       rotate: 360,
  //       scale: 0,
  //       duration: 1,
  //       opacity: 0,
  //       delay: 0.5,
  //     });
  //   },
  //   // { scope: ".container" }
  //   { scope: container }
  // );

  // const [circle, setCircle] = useState(0);
  // const random = gsap.utils.random(-500, 500, 100);

  // useGSAP(() => {
  //   gsap.to(".circle", {
  //     x: circle,
  //     duration: 0.5,
  //   });
  // }, [circle]);

  // const randomX = gsap.utils.random(-500, 500, 100);
  // const randomY = gsap.utils.random(-200, 200, 30);
  // const rotateX = gsap.utils.random(-360, 360, 30);

  // const [xValue, setXValue] = useState(0);
  // const [yValue, setYValue] = useState(0);
  // const [rotateValue, setRotateValue] = useState(0);

  // const imageRef = useRef();

  // useGSAP(
  //   () => {
  //     gsap.to(imageRef.current, {
  //       x: xValue,
  //       y: yValue,
  //       duration: 1,
  //       rotate: rotateValue,
  //     });
  //   },
  //   {
  //     scope: "main",
  //     dependencies: [xValue, rotateX, yValue],
  //   }
  // );

  const boxRef = useRef();
  const { contextSafe } = useGSAP();

  const rotateBox = contextSafe(() => {
    gsap.to(boxRef.current, {
      rotate: 360,
      duration: 1,
    });
  });

  return (
    <main>
      {/* <div ref={gsapRef} className="box"></div> */}
      {/* <div ref={container} className="container">
        <div className="circle"></div> */}
      {/* <div ref={boxRef} className="box"></div> */}
      {/* <div className="box"></div>
      </div> */}
      {/* <div className="etc">
        <div className="box"></div>
        <div className="circle"></div>
      </div> */}

      {/* <button
        onClick={() => {
          // setCircle(random);
          setXValue(randomX);
          setRotateValue(rotateX);
          setYValue(randomY);
        }}
      >
        Animate
      </button> */}
      {/* <div className="circle"></div> */}
      {/* <div ref={imageRef} className="squareBox"></div> */}
      {/* <img
        onClick={() => {
          // setCircle(random);
          setXValue(randomX);
          setRotateValue(rotateX);
          setYValue(randomY);
        }}
        ref={imageRef}
        src="https://img.favpng.com/24/16/5/bird-flying-colorful-bird-in-flight-00fJPR1w_t.jpg"
        alt=""
      /> */}
      <button onClick={rotateBox}>Animate</button>
      <div ref={boxRef} className="squareBox">
        Box
      </div>
    </main>
  );
};

export default App;
