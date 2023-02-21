import React, { Fragment, useContext } from "react";
import { Context } from "../store/store";
import Bio from "./Bio";
import Home from "./Home";
import Scene from "./Scene";

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
        </>
      )}
    </Fragment>
  );
};

export default Buffer;
