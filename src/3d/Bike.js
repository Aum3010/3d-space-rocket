import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import useKeyboard from "../hooks/useKeyboardControls";

let rotateAngle;
let rotateVector = new Vector3(0, 1, 0);

export function Bike(props) {
  const { nodes, materials } = useGLTF("/public/uploads_files_3494266_Space_rocket.glb");
  const { forward, backward, left, right } = useKeyboard();
  const ref = useRef();

  useFrame((_, delta) => {
    rotateAngle = (Math.PI / 2) * delta;

    if (forward) {
      ref.current.translateZ(2 * delta);
    }
    if (backward) {
      ref.current.translateZ(-2 * delta);
    }
    if (left) {
      ref.current.rotateOnAxis(rotateVector, rotateAngle);
    }
    if (right) {
      ref.current.rotateOnAxis(rotateVector, -rotateAngle);
    }
  });

  return (
    <group ref={ref} {...props} dispose={null}>
      <group
        position={[0.02, -0.07, -0.05]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.5}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_1.geometry}
          material={materials.Material_light}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_0.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_0.geometry}
          material={materials.Plane_0}
          position={[0, 0, -0.58]}
          scale={[1.19, 2, 1]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/uploads_files_3494266_Space_rocket.glb");
