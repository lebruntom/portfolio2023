import { Plane } from "@react-three/drei/core";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Mesh, Texture, TextureLoader } from "three";
import { leftMovement, refresh, rightMovement } from "../hooks/player-movement";
import { Context } from "../store/store";
import { useTranslation } from "react-i18next";

interface scaleInterface {
  x: number;
  y: number;
}

const Player: React.FC = () => {
  const [state, dispatch] = useContext(Context);
  const { t } = useTranslation("main");

  const ref = useRef<Mesh>(null);
  const spriteStandRight = require(`../assets/img/spriteStandRight.png`);
  const spriteStandLeft = require(`../assets/img/spriteStandLeft.png`);
  const spriteRunLeft = require(`../assets/img/spriteRunLeft.png`);
  const spriteRunRight = require(`../assets/img/spriteRunRight.png`);
  const textureStandRight = useLoader(
    TextureLoader,
    spriteStandRight
  ) as Texture;

  const textureStandLeft = useLoader(TextureLoader, spriteStandLeft) as Texture;
  const textureRunLeft = useLoader(TextureLoader, spriteRunLeft) as Texture;
  const textureRunRight = useLoader(TextureLoader, spriteRunRight) as Texture;
  // const [keys, setKeys] = useState({
  //   right: {
  //     pressed: false,
  //   },
  //   left: {
  //     pressed: false,
  //   },
  //   up: {
  //     pressed: false,
  //   },

  //   lastKey: "",
  // });

  interface textureAndScaleInterface {
    texture: Texture;
    scale: scaleInterface;
  }
  const [textureAndScale, setTextureAndScale] =
    useState<textureAndScaleInterface>({
      texture: textureStandRight,
      scale: { x: 0.7, y: 1.5 },
    });

  const tilesHorizontal = 60;
  const [currentTile, setCurrentTile] = useState<number>(0);
  const [jump, setJump] = useState<boolean>(false);
  const [isLoaded, seIsLoaded] = useState<boolean>(false);

  const player = {
    positionY: -3.1,
    positionX: 0,
    velocity: 0.06,
  };
  if (!isLoaded) {
    refresh(60, textureStandLeft);
    refresh(60, textureStandRight);
    refresh(30, textureRunLeft);
    refresh(30, textureRunRight);
    seIsLoaded(true);
  }

  useFrame(({ camera }) => {
    //Change level status

    if (camera.position.x < 5 && state.level.name !== `${t("home-title")}`) {
      dispatch({
        type: "changeLevelStatus",
        payload: {
          name: `${t("home-title")}`,
          number: 1,
        },
      });
    } else if (
      camera.position.x >= 5 &&
      camera.position.x < 20 &&
      state.level.name !== `${t("presentation-title")}`
    ) {
      dispatch({
        type: "changeLevelStatus",
        payload: {
          name: `${t("presentation-title")}`,
          number: 2,
        },
      });
    } else if (
      camera.position.x >= 20 &&
      camera.position.x < 35 &&
      state.level.name !== `${t("projects-title")}`
    ) {
      dispatch({
        type: "changeLevelStatus",
        payload: {
          name: `${t("projects-title")}`,
          number: 3,
        },
      });
    } else if (
      camera.position.x >= 35 &&
      camera.position.x < 50 &&
      state.level.name !== `${t("skills-title")}`
    ) {
      dispatch({
        type: "changeLevelStatus",
        payload: {
          name: `${t("skills-title")}`,
          number: 4,
        },
      });
    } else if (
      camera.position.x >= 50 &&
      camera.position.x < 65 &&
      state.level.name !== `${t("cv-title")}`
    ) {
      dispatch({
        type: "changeLevelStatus",
        payload: {
          name: `${t("cv-title")}`,
          number: 5,
        },
      });
    } else if (
      camera.position.x >= 65 &&
      state.level.name !== `${t("contact-title")}`
    ) {
      dispatch({
        type: "changeLevelStatus",
        payload: {
          name: `${t("contact-title")}`,
          number: 6,
        },
      });
    }

    if (window.innerWidth < 1000 || window.innerHeight < 500) {
      dispatch({
        type: "changeSiteStatus",
        payload: {
          basic: true,
        },
      });
    }

    const maxX = window.innerWidth / 250;

    if (!ref.current) {
      return;
    }

    if (state.site.basic) {
      ref.current.position.x = 0;
    }

    ref.current.renderOrder = 1;
    if (
      state.key.right.pressed &&
      !state.key.left.pressed &&
      textureAndScale.texture !== textureRunRight &&
      state.key.lastKey === "right"
    ) {
      setTextureAndScale({
        texture: textureRunRight,
        scale: { x: 1.5, y: 1.5 },
      });
    } else if (
      state.key.left.pressed &&
      !state.key.right.pressed &&
      textureAndScale.texture !== textureRunLeft &&
      state.key.lastKey === "left"
    ) {
      setTextureAndScale({
        texture: textureRunLeft,
        scale: { x: 1.5, y: 1.5 },
      });
    } else if (
      !state.key.right.pressed &&
      !state.key.left.pressed &&
      !state.key.up.pressed &&
      state.key.lastKey === "right" &&
      textureAndScale.texture !== textureStandRight
    ) {
      setTextureAndScale({
        texture: textureStandRight,
        scale: { x: 0.7, y: 1.5 },
      });
    } else if (
      !state.key.left.pressed &&
      !state.key.right.pressed &&
      !state.key.up.pressed &&
      state.key.lastKey === "left" &&
      textureAndScale.texture !== textureStandLeft
    ) {
      setTextureAndScale({
        texture: textureStandLeft,
        scale: { x: 0.7, y: 1.5 },
      });
    }

    if (currentTile < tilesHorizontal) {
      setCurrentTile(currentTile + 1);
      const offsetX = (currentTile % 30) / 30;
      const offsetY = (1 - Math.floor(currentTile / tilesHorizontal) - 1) / 1;
      textureAndScale.texture.offset.x = offsetX;
      textureAndScale.texture.offset.y = offsetY;
    } else {
      setCurrentTile(0);
    }

    if (state.key.up.pressed) {
      if (ref.current.position.y === player.positionY) {
        setJump(true);
      }
    }
    if (jump) {
      if (ref.current.position.y < -2) {
        ref.current.position.y += 0.08;
      } else {
        setJump(false);
      }
    }
    if (!jump && ref.current.position.y > player.positionY) {
      ref.current.position.y -= 0.08;
    }
    if (state.key.right.pressed) {
      rightMovement(
        state.key.right.pressed,
        camera,
        ref,
        maxX,
        player.velocity
      );
    }
    if (state.key.left.pressed) {
      leftMovement(state.key.left.pressed, camera, ref, maxX, player.velocity);
    }
  });

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      switch (event.keyCode) {
        case 37:
          if (!state.key.right.pressed && !state.key.left.pressed) {
            // setKeys((prevState) => ({
            //   ...prevState,
            //   left: {
            //     pressed: true,
            //   },
            //   lastKey: "left",
            // }));
            dispatch({
              type: "changeKeyStatus",
              payload: {
                ...state.key,
                left: {
                  pressed: true,
                },
                lastKey: "left",
              },
            });
          }
          break;
        case 39:
          if (!state.key.right.pressed && !state.key.left.pressed) {
            dispatch({
              type: "changeKeyStatus",
              payload: {
                ...state.key,
                right: {
                  pressed: true,
                },
                lastKey: "right",
              },
            });
          }
          break;
        case 38:
          if (!state.key.up.pressed) {
            dispatch({
              type: "changeKeyStatus",
              payload: {
                ...state.key,
                up: {
                  pressed: true,
                },
              },
            });
          }
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (event: any) => {
      switch (event.keyCode) {
        case 37:
          if (state.key.left.pressed) {
            dispatch({
              type: "changeKeyStatus",
              payload: {
                ...state.key,
                left: {
                  pressed: false,
                },
              },
            });
          }
          break;
        case 39:
          if (state.key.right.pressed) {
            dispatch({
              type: "changeKeyStatus",
              payload: {
                ...state.key,
                right: {
                  pressed: false,
                },
              },
            });
          }
          break;
        case 38:
          if (state.key.up.pressed) {
            dispatch({
              type: "changeKeyStatus",
              payload: {
                ...state.key,
                up: {
                  pressed: false,
                },
              },
            });
          }
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [state.key, dispatch]);

  return (
    <Plane
      position={[player.positionX, player.positionY, 0]}
      ref={ref}
      material-map={textureAndScale.texture}
      material-transparent={true}
      scale-x={textureAndScale.scale.x}
      scale-y={textureAndScale.scale.y}
    />
  );
};

export default Player;
