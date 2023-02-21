import React, { useContext } from "react";
import { Context } from "../store/store";

const Skills: React.FC = () => {
  const [state] = useContext(Context);

  return (
    <div
      className={
        !state.site.basic ? "skills_container" : "skills_container_basic"
      }
    >
      <img
        src={require("../assets/img/react.png")}
        alt="react-icon"
        className="skills_img"
      />
      <img
        src={require("../assets/img/git.png")}
        alt="react-icon"
        className="skills_img"
      />
      <img
        src={require("../assets/img/php.png")}
        alt="react-icon"
        className="skills_img"
      />
      <img
        src={require("../assets/img/next.png")}
        alt="react-icon"
        className="skills_img"
      />
      <img
        src={require("../assets/img/node.png")}
        alt="react-icon"
        className="skills_img"
      />
      <img
        src={require("../assets/img/sql.png")}
        alt="react-icon"
        className="skills_img"
      />
      <img
        src={require("../assets/img/typescript.png")}
        alt="react-icon"
        className="skills_img"
      />
      <img
        src={require("../assets/img/javascript.png")}
        alt="react-icon"
        className="skills_img"
      />
      <img
        src={require("../assets/img/symfony.png")}
        alt="react-icon"
        className="skills_img"
      />
    </div>
  );
};

export default Skills;
