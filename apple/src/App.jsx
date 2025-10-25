import { Canvas } from "@react-three/fiber";
import "./style.css";
import MacContainer from "./MacContainer";
import { OrbitControls } from "@react-three/drei";

const App = () => {
  return (
    <Canvas>
      <OrbitControls
        camera={{ fov: 20, position: [20, -2, 120] }}
      ></OrbitControls>
      <MacContainer></MacContainer>
    </Canvas>
  );
};

export default App;
