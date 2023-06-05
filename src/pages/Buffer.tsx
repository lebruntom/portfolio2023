import React, { Fragment, useContext } from "react";
import { Context } from "../store/store";
import Bio from "./Bio";
import Contact from "./contact";
import Cv from "./cv";
import Home from "./Home";
import Projects from "./Projects";
import Scene from "./Scene";
import Skills from "./Skills";

const Buffer: React.FC = () => {
  const [state] = useContext(Context);

  return (
    <Fragment>
      {!state.site.basic ? (
        <Scene />
      ) : (
        <>
          <Home />
          <Bio />
          <Projects />
          <Skills />
          <Cv />
          <Contact />
        </>
      )}
    </Fragment>
  );
};

export default Buffer;
