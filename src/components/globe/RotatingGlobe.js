import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import PropTypes from "prop-types";
import * as THREE from "three";

function createLongitudeLines(radius, segments = 32, linesCount = 8) {
  const lines = [];

  for (let i = 0; i < linesCount; i++) {
    const lon = (i * 2 * Math.PI) / linesCount;
    const points = [];

    for (let j = 0; j <= segments; j++) {
      const lat = (j * Math.PI) / segments - Math.PI / 2;
      const x = radius * Math.cos(lat) * Math.cos(lon);
      const y = radius * Math.sin(lat);
      const z = radius * Math.cos(lat) * Math.sin(lon);
      points.push(new THREE.Vector3(x, y, z));
    }

    lines.push(points);
  }

  return lines;
}
function createLatitudeLines(radius, segments = 32, rings = 8) {
  const lines = [];
  for (let i = 1; i < rings; i++) {
    const lat = (i * Math.PI) / rings - Math.PI / 2;
    const points = [];

    for (let j = 0; j <= segments; j++) {
      const lon = (j * 2 * Math.PI) / segments;
      const x = radius * Math.cos(lat) * Math.cos(lon);
      const y = radius * Math.sin(lat);
      const z = radius * Math.cos(lat) * Math.sin(lon);
      points.push(new THREE.Vector3(x, y, z));
    }

    lines.push(points);
  }
  return lines;
}

function StyledWireframeGlobe({ radius = 2 }) {
  const latLines = createLatitudeLines(radius);
  const lonLines = createLongitudeLines(radius);

  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      const axis = new THREE.Vector3(0.5, 1, 0).normalize();
      const angle = 0.01;
      groupRef.current.rotateOnAxis(axis, angle);
    }
  });

  const createLine = (points, key) => {
    /* eslint-disable @typescript-eslint/no-unsafe-argument */
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return (
      <line key={key}>
        <primitive object={geometry} attach="geometry" />
        <lineBasicMaterial attach="material" color="#ff8c00" linewidth={2} />
      </line>
    );
  };

  return (
    <group
      ref={groupRef}
      rotation={[0, 20 * (Math.PI / 180), 0]}
      scale={[2, 2, 2]}
    >
      {latLines.map((points, i) => createLine(points, `lat-${i}`))}
      {lonLines.map((points, i) => createLine(points, `lon-${i}`))}
    </group>
  );
}

export default function RotatingGlobe() {
  return (
    <Canvas style={{ width: "100%", height: "100%" }} gl={{ alpha: true }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={0.6} />
      <StyledWireframeGlobe radius={1} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
StyledWireframeGlobe.propTypes = {
  radius: PropTypes.number,
};
