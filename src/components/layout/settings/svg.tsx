import React from "react";

interface svgProps {
  rotation: number;
  width: number;
  height: number;
  top: number;
  left: number;
  right: number;
  bottom: number;
}
const Svg: React.FC<svgProps> = (props) => {
  const { rotation, width, height, top, left, right, bottom } = props;
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={"svg"}
      style={{
        top: top,
        width: width,
        height: height,
        right: right,
        bottom: bottom,
        left: left,
        rotate: `${rotation}deg`,
      }}
    >
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop1" stopColor="#ffe3c4" offset="0%"></stop>
          <stop id="stop2" stopColor="#ffe3c4" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient)"
        d="M21.1,-28.6C26.7,-25,30,-17.9,29.4,-11.5C28.8,-5.1,24.3,0.7,22.8,8.1C21.3,15.5,22.9,24.6,19.6,29.8C16.3,34.9,8.2,36.1,-0.7,37C-9.5,37.9,-18.9,38.5,-22.1,33.3C-25.2,28.1,-21.9,17.1,-23.8,8.4C-25.7,-0.2,-32.6,-6.5,-32.2,-11.3C-31.8,-16.1,-24.1,-19.3,-17.5,-22.5C-10.9,-25.7,-5.4,-28.9,1.2,-30.5C7.8,-32.1,15.6,-32.1,21.1,-28.6Z"
        transform="translate(50 50)"
        strokeWidth="0"
        // style="transition: all 0.3s ease 0s"
        stroke="url(#sw-gradient)"
      ></path>
    </svg>
  );
};

export default Svg;
