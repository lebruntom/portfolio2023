import { Plane } from "@react-three/drei/core";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Mesh, Texture, TextureLoader } from "three";
import { leftMovement, refresh, rightMovement } from "../hooks/player-movement";
import { Context } from "../store/store";

interface scaleInterface {
  x: number;
  y: number;
}

const Player: React.FC = () => {
  // const [state, dispatch] = useContext(Context);

  // const ref = useRef<Mesh>(null);
  // const spriteStandRight = require(`../assets/img/spriteStandRight.png`);
  // const spriteStandLeft = require(`../assets/img/spriteStandLeft.png`);
  // const spriteRunLeft = require(`../assets/img/spriteRunLeft.png`);
  // const spriteRunRight = require(`../assets/img/spriteRunRight.png`);
  // const textureStandRight = useLoader(
  //   TextureLoader,
  //   spriteStandRight
  // ) as Texture;
  // const textureStandLeft = useLoader(TextureLoader, spriteStandLeft) as Texture;
  // const textureRunLeft = useLoader(TextureLoader, spriteRunLeft) as Texture;
  // const textureRunRight = useLoader(TextureLoader, spriteRunRight) as Texture;
  // const [texture, setTexture] = useState(textureStandRight);

  // const [scale, setScale] = useState<scaleInterface>({ x: 0.7, y: 1.5 });
  // const [tilesHorizontal, setTilesHorizontal] = useState<number>(60);
  // const [currentTile, setCurrentTile] = useState<number>(0);
  // const [jump, setJump] = useState<boolean>(false);

  // const player = {
  //   positionY: -3.1,
  //   positionX: 0,
  //   velocity: 0.06,
  // };

  // refresh(60, textureStandLeft);
  // refresh(60, textureStandRight);
  // refresh(30, textureRunLeft);
  // refresh(30, textureRunRight);
  // useFrame(({ gl, scene, camera }) => {
  //   //Change level status

  //   if (camera.position.x > 5) {
  //     dispatch({
  //       type: "changeLevelStatus",
  //       payload: {
  //         name: "Bio",
  //         number: 2,
  //       },
  //     });
  //   }

  //   const maxX = window.innerWidth / 250;

  //   if (!ref.current) {
  //     return;
  //   }
  //   if (
  //     state.key.right.pressed &&
  //     texture !== textureRunRight &&
  //     state.key.lastKey === "right"
  //   ) {
  //     console.log("1");
  //     setCurrentTile(0);
  //     setTilesHorizontal(30);
  //     setScale({ x: 1.5, y: 1.5 });

  //     setTexture(textureRunRight);
  //   } else if (
  //     state.key.left.pressed &&
  //     texture !== textureRunLeft &&
  //     state.key.lastKey === "left"
  //   ) {
  //     setCurrentTile(0);
  //     setTilesHorizontal(30);
  //     setScale({ x: 1.5, y: 1.5 });
  //     setTexture(textureRunLeft);
  //   } else if (
  //     !state.key.right.pressed &&
  //     state.key.lastKey === "right" &&
  //     texture !== textureStandRight
  //   ) {
  //     setTexture(textureStandRight);
  //     setScale({ x: 0.7, y: 1.5 });
  //   } else if (
  //     !state.key.left.pressed &&
  //     state.key.lastKey === "left" &&
  //     texture !== textureStandLeft
  //   ) {
  //     setScale({ x: 0.7, y: 1.5 });
  //     setTexture(textureStandLeft);
  //   }

  //   if (currentTile < tilesHorizontal) {
  //     setCurrentTile(currentTile + 1);
  //     const offsetX = (currentTile % 30) / 30;
  //     const offsetY = (1 - Math.floor(currentTile / tilesHorizontal) - 1) / 1;
  //     texture.offset.x = offsetX;
  //     texture.offset.y = offsetY;
  //   } else {
  //     setCurrentTile(0);
  //   }

  //   if (state.key.up.pressed) {
  //     if (ref.current.position.y === player.positionY) {
  //       setJump(true);
  //     }
  //   }
  //   if (jump) {
  //     if (ref.current.position.y < -2) {
  //       ref.current.position.y += 0.08;
  //     } else {
  //       setJump(false);
  //     }
  //   }
  //   if (!jump && ref.current.position.y > player.positionY) {
  //     ref.current.position.y -= 0.08;
  //   }

  //   rightMovement(state.key.right.pressed, camera, ref, maxX, player.velocity);
  //   leftMovement(state.key.left.pressed, camera, ref, maxX, player.velocity);
  // });

  // // useEffect(() => {
  // //   const keyDownCallback = function (e: any) {

  // //   };
  // //   const keyUpCallback = function (e: any) {};
  // //   document.addEventListener("keydown", keyDownCallback);
  // //   document.addEventListener("keyup", keyUpCallback);

  // //   return () => {
  // //     document.removeEventListener("keydown", keyDownCallback);
  // //     document.addEventListener("keyup", keyUpCallback);
  // //   };
  // // }, []);

  // document.addEventListener("keydown", ({ keyCode }) => {
  //   switch (keyCode) {
  //     case 37:
  //       // left
  //       // setKeys({
  //       //   ...keys,
  //       //   left: {
  //       //     pressed: true,
  //       //   },
  //       // });
  //       dispatch({
  //         type: "changeKeyStatus",
  //         payload: {
  //           ...state.key,

  //           left: {
  //             pressed: true,
  //           },

  //           lastKey: "left",
  //         },
  //       });
  //       // keys.left.pressed = true;
  //       // setLastKey("left");
  //       break;

  //     case 40:
  //       // down"
  //       break;

  //     case 39:
  //       // "right"
  //       // setKeys({
  //       //   ...keys,
  //       //   right: {
  //       //     pressed: true,
  //       //   },
  //       // });
  //       dispatch({
  //         type: "changeKeyStatus",
  //         payload: {
  //           ...state.key,

  //           right: {
  //             pressed: true,
  //           },

  //           lastKey: "right",
  //         },
  //       });
  //       // setLastKey("right");
  //       break;

  //     case 38:
  //       // "up"
  //       // setKeys({
  //       //   ...keys,
  //       //   up: {
  //       //     pressed: true,
  //       //   },
  //       // });
  //       dispatch({
  //         type: "changeKeyStatus",
  //         payload: {
  //           ...state.key,
  //           up: {
  //             pressed: true,
  //           },
  //         },
  //       });
  //       break;
  //   }
  // });
  // document.addEventListener("keyup", ({ keyCode }) => {
  //   switch (keyCode) {
  //     case 37:
  //       // "left"
  //       dispatch({
  //         type: "changeKeyStatus",
  //         payload: {
  //           ...state.key,
  //           left: {
  //             pressed: false,
  //           },
  //         },
  //       });
  //       break;

  //     case 40:
  //       // "down"
  //       break;

  //     case 39:
  //       // "right"
  //       dispatch({
  //         type: "changeKeyStatus",
  //         payload: {
  //           ...state.key,
  //           right: {
  //             pressed: false,
  //           },
  //         },
  //       });
  //       break;

  //     case 38:
  //       // "up"
  //       dispatch({
  //         type: "changeKeyStatus",
  //         payload: {
  //           ...state.key,
  //           up: {
  //             pressed: false,
  //           },
  //         },
  //       });
  //       break;
  //   }
  // });

  return (
    <Plane
    // position={[player.positionX, player.positionY, 0]}
    // ref={ref}
    // material-map={texture}
    // material-transparent={true}
    // scale-x={scale.x}
    // scale-y={scale.y}
    />
  );
};

export default Player;
