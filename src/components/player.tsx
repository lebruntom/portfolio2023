import { Plane } from "@react-three/drei/core";
import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  memo,
  useCallback,
  useMemo,
} from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Mesh, Texture, TextureLoader } from "three";
import { leftMovement, refresh, rightMovement } from "../hooks/player-movement";
import { Context } from "../store/store";
import { useTranslation } from "react-i18next";

interface scaleInterface {
  x: number;
  y: number;
}

const Player: React.FC = memo(() => {
  const [state, dispatch] = useContext(Context);
  const { t } = useTranslation("main");

  const ref = useRef<Mesh>(null);
  const maxX = useMemo(() => window.innerWidth / 250, []);

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

  const player = {
    positionY: -3.1,
    positionX: 0,
    velocity: 0.06,
  };
  const refreshImages = useCallback(() => {
    refresh(60, textureStandLeft);
    refresh(60, textureStandRight);
    refresh(30, textureRunLeft);
    refresh(30, textureRunRight);
  }, [textureStandLeft, textureStandRight, textureRunLeft, textureRunRight]);

  useEffect(() => {
    refreshImages();
  }, [refreshImages]);

  useFrame(({ camera }) => {
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

    if (window.innerWidth < 1000 || window.innerHeight < 600) {
      dispatch({
        type: "changeSiteStatus",
        payload: {
          basic: true,
        },
      });
    }

    if (!ref.current) {
      return;
    }

    if (state.site.basic) {
      ref.current.position.x = 0;
    }

    ref.current.renderOrder = 1;
    if (
      state.key.right &&
      !state.key.left &&
      textureAndScale.texture !== textureRunRight &&
      state.key.lastKey === "right"
    ) {
      setTextureAndScale({
        texture: textureRunRight,
        scale: { x: 1.5, y: 1.5 },
      });
    } else if (
      state.key.left &&
      !state.key.right &&
      textureAndScale.texture !== textureRunLeft &&
      state.key.lastKey === "left"
    ) {
      setTextureAndScale({
        texture: textureRunLeft,
        scale: { x: 1.5, y: 1.5 },
      });
    } else if (
      !state.key.right &&
      !state.key.left &&
      !state.key.up &&
      state.key.lastKey === "right" &&
      textureAndScale.texture !== textureStandRight
    ) {
      setTextureAndScale({
        texture: textureStandRight,
        scale: { x: 0.7, y: 1.5 },
      });
    } else if (
      !state.key.left &&
      !state.key.right &&
      !state.key.up &&
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

    if (state.key.up) {
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
    if (state.key.right) {
      rightMovement(state.key.right, camera, ref, maxX, player.velocity);
    } else if (state.key.left) {
      leftMovement(state.key.left, camera, ref, maxX, player.velocity);
    }
  });

  const handleKeyDown = (event: any) => {
    switch (event.keyCode) {
      case 37:
        if (!state.key.right && !state.key.left) {
          dispatch({
            type: "changeKeyStatus",
            payload: {
              ...state.key,
              left: true,

              lastKey: "left",
            },
          });
        }
        break;
      case 39:
        if (!state.key.right && !state.key.left) {
          dispatch({
            type: "changeKeyStatus",
            payload: {
              ...state.key,
              right: true,

              lastKey: "right",
            },
          });
        }
        break;
      case 38:
        if (!state.key.up) {
          dispatch({
            type: "changeKeyStatus",
            payload: {
              ...state.key,
              up: true,
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
        if (state.key.left) {
          dispatch({
            type: "changeKeyStatus",
            payload: {
              ...state.key,
              left: false,
            },
          });
        }
        break;
      case 39:
        if (state.key.right) {
          dispatch({
            type: "changeKeyStatus",
            payload: {
              ...state.key,
              right: false,
            },
          });
        }
        break;
      case 38:
        if (state.key.up) {
          dispatch({
            type: "changeKeyStatus",
            payload: {
              ...state.key,
              up: false,
            },
          });
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

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
});

export default Player;
