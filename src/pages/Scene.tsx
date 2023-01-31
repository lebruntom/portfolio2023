import { OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Player from "../components/player";
import { Html } from "@react-three/drei";

import Home from "./Home";
import Bio from "./Bio";
const Scene: React.FC = () => {
  return (
    <Canvas>
      <OrthographicCamera />
      <Player />
      <Html
        rotation-x={0}
        position={[0, 0.05, -0.09]}
        zIndexRange={[-4]}
        // transform
        occlude
      >
        <Home />
        <Bio />
      </Html>
    </Canvas>
  );
};

export default Scene;
