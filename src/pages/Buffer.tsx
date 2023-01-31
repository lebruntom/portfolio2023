import React, { Fragment, useContext } from "react";
import { Context } from "../store/store";
import Scene from "./Scene";

const Buffer: React.FC = () => {
  const [state, dispatch] = useContext(Context);

  return <Fragment>{!state.site.basic ? <Scene /> : <div>Test</div>}</Fragment>;
};

export default Buffer;
