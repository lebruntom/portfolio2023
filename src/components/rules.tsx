import React, { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight, BsChevronUp } from "react-icons/bs";
import Welcome from "./welcome";
const Rules: React.FC = () => {
  const [activeKey, setActiveKey] = useState({
    right: {
      pressed: false,
    },
    left: {
      pressed: false,
    },
    up: {
      pressed: false,
    },
  });

  // useEffect(() => {
  //   const keyDownCallback = function (e: any) {
  //     switch (e.keyCode) {
  //       case 37:
  //         // left
  //         setActiveKey({
  //           ...activeKey,
  //           left: {
  //             pressed: true,
  //           },
  //         });
  //         break;

  //       case 39:
  //         // "right"
  //         setActiveKey({
  //           ...activeKey,
  //           right: {
  //             pressed: true,
  //           },
  //         });
  //         break;

  //       case 38:
  //         // "up"
  //         setActiveKey({
  //           ...activeKey,
  //           up: {
  //             pressed: true,
  //           },
  //         });
  //         break;
  //     }
  //   };
  //   const keyUpCallback = function (e: any) {
  //     switch (e.keyCode) {
  //       case 37:
  //         // "left"
  //         setActiveKey({
  //           ...activeKey,
  //           left: {
  //             pressed: false,
  //           },
  //         });
  //         break;

  //       case 40:
  //         // "down"
  //         break;

  //       case 39:
  //         // "right"
  //         setActiveKey({
  //           ...activeKey,
  //           right: {
  //             pressed: false,
  //           },
  //         });
  //         break;

  //       case 38:
  //         // "up"
  //         setActiveKey({
  //           ...activeKey,
  //           up: {
  //             pressed: false,
  //           },
  //         });
  //         break;
  //     }
  //   };
  //   document.addEventListener("keydown", keyDownCallback);
  //   document.addEventListener("keyup", keyUpCallback);

  //   return () => {
  //     document.removeEventListener("keydown", keyDownCallback);
  //     document.addEventListener("keyup", keyUpCallback);
  //   };
  // }, []);

  return (
    <div className="rules_container">
      <div className="rules_column">
        <div className="rules_text"> left to move on left</div>
        <BsChevronLeft
          className={
            activeKey.left.pressed ? "rules_iconSelected" : "rules_icon"
          }
        />
      </div>
      <div className="rules_middle_colum">
        <Welcome />
        <div className="rules_text">Press up to jump</div>
        <BsChevronUp
          className={activeKey.up.pressed ? "rules_iconSelected" : "rules_icon"}
        />
        <img
          src={require("../assets/img/logo.png")}
          className="rules_img"
          alt="logo tom lebrun"
        />
      </div>
      <div className="rules_column">
        <BsChevronRight
          className={
            activeKey.right.pressed ? "rules_iconSelected" : "rules_icon"
          }
        />
        <div className="rules_text">Press right to move on right</div>
      </div>
    </div>
  );
};

export default Rules;
