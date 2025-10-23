import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const CircularImageComponent = () => {
  const tex = useTexture("./multi.jpg");
  const circle = useRef(null);
  useFrame((state, delta) => {
    circle.current.rotation.y += delta;
  });

  return (
    <group rotation={[0, 1.4, 0.5]}>
      <mesh ref={circle}>
        <cylinderGeometry args={[1, 1, 1, 60, 60, true]}></cylinderGeometry>
        <meshStandardMaterial
          map={tex}
          transparent
          side={THREE.DoubleSide}
        ></meshStandardMaterial>
      </mesh>
    </group>
  );
};

export default CircularImageComponent;
