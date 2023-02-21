import React, { Fragment, useContext } from "react";
import TopBar from "./top-bar";
import Settings from "./settings";
import { Context } from "../../store/store";
import Navigation from "./navigation";
import Fps from "./fps";
import { useTranslation } from "react-i18next";
import Loader from "../ui/loader";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state] = useContext(Context);
  const { ready } = useTranslation("main");

  return (
    <Fragment>
      {!ready ? (
        <Loader />
      ) : (
        <>
          <Settings />
          {state.site.basic ? (
            <>
              <Navigation />
            </>
          ) : (
            <div>
              <TopBar />
              <Fps />
            </div>
          )}
          <main className="main">{children}</main>{" "}
        </>
      )}
    </Fragment>
  );
};

export default Layout;
