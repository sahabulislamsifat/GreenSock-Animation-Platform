import { useGLTF } from "@react-three/drei";

const MacContainer = () => {
  let model = useGLTF("./mac.glb");
  return (
    <>
      <mesh>
        <primitive object={model.scene}></primitive>
      </mesh>
    </>
  );
};

export default MacContainer;
