import { Canvas } from "@react-three/fiber";
import "./style.css";
import { OrbitControls } from "@react-three/drei";
import CircularImageComponent from "./CircularImageComponent";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

const App = () => {
  return (
    <Canvas camera={{ fov: 35 }}>
      <OrbitControls></OrbitControls>
      <ambientLight></ambientLight>
      <CircularImageComponent></CircularImageComponent>
      <EffectComposer>
        <Bloom
          mipmapBlur
          intensity={1.0}
          luminanceThreshold={0.9}
          luminanceSmoothing={0.025}
        />
      </EffectComposer>
    </Canvas>
  );
};

export default App;
