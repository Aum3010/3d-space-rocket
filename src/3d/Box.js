import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { Vector3 } from "three";
import useKeyboard from "../hooks/useKeyboardControls";

const rotateVector = new Vector3(0, 1, 0);
let rotateAngle;

export default function Box(props) {
  const boxRef = useRef();
  const { forward, backward, left, right } = useKeyboard();

  useFrame((_, delta) => {
    rotateAngle = (Math.PI / 2) * delta;

    if (forward) {
      boxRef.current.translateZ(-2 * delta);
    }
    if (backward) {
      boxRef.current.translateZ(2 * delta);
    }
    if (left) {
      boxRef.current.rotateOnAxis(rotateVector, rotateAngle);
    }
    if (right) {
      boxRef.current.rotateOnAxis(rotateVector, -rotateAngle);
    }
  });

  return (
    <mesh ref={boxRef} {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="royalblue" />
    </mesh>
  );
}
