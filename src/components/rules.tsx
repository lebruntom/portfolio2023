import React, { useEffect, useState, useCallback, useContext } from "react";
import { useTranslation } from "react-i18next";
import { BsChevronLeft, BsChevronRight, BsChevronUp } from "react-icons/bs";
import { Context } from "../store/store";
import Welcome from "./welcome";
const Rules: React.FC = () => {
  const [key, setKey] = useState("");
  const [state, dispatch] = useContext(Context);
  const { t } = useTranslation("main");

  const handleKeyDown = useCallback(
    (event: any) => {
      switch (event.keyCode) {
        case 37:
          if (key !== "right") {
            setKey("right");
          }
          break;
        case 39:
          if (key !== "left") {
            setKey("left");
          }
          break;
        case 38:
          if (key !== "up") {
            setKey("up");
          }
          break;
        default:
          break;
      }
    },
    [key]
  );

  const handleKeyUp = useCallback(
    (event: any) => {
      switch (event.keyCode) {
        case 37:
          if (key === "right") {
            setKey("");
          }
          break;
        case 39:
          if (key === "left") {
            setKey("");
          }
          break;
        case 38:
          if (key === "up") {
            setKey("");
          }
          break;
        default:
          break;
      }
    },
    [key]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return (
    <div className="rules_container">
      <div className="rules_column">
        <div className="line_column">
          <div className="rules_text">{t("left-rules")}</div>
          <BsChevronLeft
            className={key === "right" ? "rules_iconSelected" : "rules_icon"}
          />
        </div>
      </div>
      <div className="rules_middle_colum">
        <Welcome />
        <div className="rules_text">{t("up-rules")}</div>
        <BsChevronUp
          className={key === "up" ? "rules_iconSelected" : "rules_icon"}
        />
        <img
          src={require("../assets/img/logo.png")}
          className="rules_img"
          alt="logo tom lebrun"
        />
      </div>
      <div className="rules_column">
        <div className="line_column">
          <BsChevronRight
            className={key === "left" ? "rules_iconSelected" : "rules_icon"}
          />
          <div className="rules_text">{t("right-rules")}</div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
