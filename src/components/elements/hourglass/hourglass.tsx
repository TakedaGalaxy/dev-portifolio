"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";

const shapes: [number, number, number][][] = [
  [
    [-1, -1, -2],
    [-1, 1, -2],
    [1, 1, -2],
    [1, -1, -2],
    [-1, -1, -2],
  ],
  [
    [-1, -1, -1.5],
    [-1, -1, -2],
  ],
  [
    [1, 1, -1.5],
    [1, 1, -2],
  ],
  [
    [1, -1, -1.5],
    [1, -1, -2],
  ],
  [
    [-1, 1, -1.5],
    [-1, 1, -2],
  ],
  [
    [-1, -1, -1.5],
    [-1, 1, -1.5],
    [1, 1, -1.5],
    [1, -1, -1.5],
    [-1, -1, -1.5],
  ],
  [
    [-1, -1, 2],
    [-1, 1, 2],
    [1, 1, 2],
    [1, -1, 2],
    [-1, -1, 2],
  ],
  [
    [-1, -1, 1.5],
    [-1, -1, 2],
  ],
  [
    [1, 1, 1.5],
    [1, 1, 2],
  ],
  [
    [1, -1, 1.5],
    [1, -1, 2],
  ],
  [
    [-1, 1, 1.5],
    [-1, 1, 2],
  ],
  [
    [-1, -1, 1.5],
    [-1, 1, 1.5],
    [1, 1, 1.5],
    [1, -1, 1.5],
    [-1, -1, 1.5],
  ],
  [
    [-1, -1, 1.5],
    [1, 1, -1.5],
  ],
  [
    [1, -1, 1.5],
    [-1, 1, -1.5],
  ],
  [
    [-1, -1, -1.5],
    [1, 1, 1.5],
  ],
  [
    [1, -1, -1.5],
    [-1, 1, 1.5],
  ],
];

function Hourglass(props: any) {
  const meshRef = useRef<THREE.Mesh>();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta;
    }
  });

  return (
    <mesh {...props} ref={meshRef} scale={1}>
      {shapes.map((path, index) => (
        <Line
          key={index}
          points={[...path]}
          color={props.color}
          lineWidth={3.5}
        />
      ))}
    </mesh>
  );
}

export default function ElementHourglass() {
  return (
    <Canvas style={{ width: "350px", height: "350px" }}>
      <Hourglass color={"#c62d1d"} />
    </Canvas>
  );
}
