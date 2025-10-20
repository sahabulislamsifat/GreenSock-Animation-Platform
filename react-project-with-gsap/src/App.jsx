// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { useRef } from "react";

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

      <button>Move</button>
    </main>
  );
};

export default App;
