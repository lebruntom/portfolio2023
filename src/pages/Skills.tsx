import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import Svg from "../components/layout/svg";
import { Context } from "../store/store";

const Skills: React.FC = () => {
  const [state] = useContext(Context);
  const { t } = useTranslation("main");

  return (
    <div className="skills">
      {state.site.basic && <div className="title">{t("skills-title")}</div>}
      <div
        id="skills"
        className={
          !state.site.basic ? "skills_container" : "skills_container_basic"
        }
      >
        <div className="skills_img_container">
          <img
            src={require("../assets/img/react.png")}
            alt="react-icon"
            className="skills_img react_img"
          />
          <div className="bar"></div>
        </div>
        <div className="skills_img_container">
          <img
            src={require("../assets/img/git.png")}
            alt="git-icon"
            className="skills_img git_img"
          />
          <div className="bar"></div>
        </div>
        <div className="skills_img_container">
          <img
            src={require("../assets/img/php.png")}
            alt="php-icon"
            className="skills_img php_img"
          />
          <div className="bar"></div>
        </div>
        <div className="skills_img_container">
          <img
            src={require("../assets/img/next.png")}
            alt="next-icon"
            className="skills_img next_img"
          />
          <div className="bar"></div>
        </div>
        <div className="skills_img_container">
          <img
            src={require("../assets/img/node.png")}
            alt="noe-icon"
            className="skills_img node_img"
          />
          <div className="bar"></div>
        </div>
        <div className="skills_img_container">
          <img
            src={require("../assets/img/sql.png")}
            alt="sql-icon"
            className="skills_img sql_img"
          />
          <div className="bar"></div>
        </div>
        <div className="skills_img_container">
          <img
            src={require("../assets/img/typescript.png")}
            alt="typescript-icon"
            className="skills_img typescript_img"
          />
          <div className="bar"></div>
        </div>
        <div className="skills_img_container">
          <img
            src={require("../assets/img/javascript.png")}
            alt="javascript-icon"
            className="skills_img javascript_img"
          />
          <div className="bar"></div>
        </div>
        <div className="skills_img_container">
          <img
            src={require("../assets/img/symfony.png")}
            alt="symfony-icon"
            className="skills_img symfony_img"
          />
          <div className="bar"></div>
        </div>

        {state.site.basic ? (
          <>
            {" "}
            <Svg
              top={"2400"}
              bottom={"0"}
              left={"50vw"}
              right={"0"}
              width={"35vw"}
              height={"35vw"}
              rotation={50}
            />
            <Svg
              top={"2900"}
              bottom={"0"}
              left={"50vw"}
              right={"0"}
              width={"20vw"}
              height={"20vw"}
              rotation={-35}
            />
            <Svg
              top={"3250"}
              bottom={"0"}
              left={"10vw"}
              right={"0"}
              width={"40vw"}
              height={"40vw"}
              rotation={-35}
            />
            <Svg
              top={"3950"}
              bottom={"0"}
              left={"55vw"}
              right={"0"}
              width={"20vw"}
              height={"20vw"}
              rotation={-128}
            />
          </>
        ) : (
          <>
            <Svg
              top={"-300"}
              bottom={"0"}
              left={"200"}
              right={"0"}
              width={"500"}
              height={"500"}
              rotation={50}
            />
            <Svg
              top={"150"}
              bottom={"0"}
              left={"950"}
              right={"0"}
              width={"500"}
              height={"500"}
              rotation={35}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Skills;
