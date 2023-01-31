import React from "react";
import Svg from "../components/layout/settings/svg";
import Rules from "../components/rules";
import Welcome from "../components/welcome";

const Home: React.FC = () => {
  return (
    <div className="homeContainer">
      <Rules />
      <Svg
        top={-800}
        bottom={30}
        left={5}
        right={0}
        width={700}
        height={700}
        rotation={90}
      />
      <Svg
        top={-100}
        bottom={30}
        left={-700}
        right={0}
        width={500}
        height={500}
        rotation={90}
      />
    </div>
  );
};

export default Home;
