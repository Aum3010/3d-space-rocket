import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Bike } from "./Bike";
import Plane from "./Plane";

export default function Playground() {
  return (
    <Canvas>
      <Bike rotation={[0, -Math.PI, 0]} />
      <OrbitControls />
      <Stars />
      <ambientLight intensity={1} />
      <directionalLight intensity={1} position={[1, 0, 1]} />
      <Plane position={[0, -0.5, 0]} />
    </Canvas>
  );
}
