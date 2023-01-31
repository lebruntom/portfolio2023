import React, { Fragment } from "react";
import Svg from "./settings/svg";
import TopBar from "./top-bar";
import Settings from "./settings/settings";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Fragment>
      <TopBar />
      <Settings />
      {/* <Svg /> */}
      <main className="main">{children}</main>
    </Fragment>
  );
};

export default Layout;
