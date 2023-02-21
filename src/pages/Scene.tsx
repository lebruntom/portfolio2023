import { OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useContext } from "react";
import Player from "../components/player";
import { Html } from "@react-three/drei";

import Home from "./Home";
import Bio from "./Bio";
import Projects from "./Projects";
import { Context } from "../store/store";
import Skills from "./Skills";
import Cv from "./cv";
import Contact from "./contact";
const Scene: React.FC = () => {
  const [state, dispatch] = useContext(Context);

  return (
    <div className="scene">
      <Canvas>
        <OrthographicCamera />
        <Player />
        <Html
          rotation-x={0}
          // position={[4.5, 0.05, 0]}
          zIndexRange={[0]}
          fullscreen
          occlude
        >
          {(state.level.number === 1 || state.level.number === 2) && <Home />}

          <Bio />
          <Projects />
          <Skills />
          <Cv />
          <Contact />
        </Html>
      </Canvas>
    </div>
  );
};

export default Scene;
