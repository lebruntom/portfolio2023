import React, { useContext } from "react";
import Svg from "../components/layout/svg";
import Presentation from "../components/Presentation";
import { Context } from "../store/store";

const Bio: React.FC = () => {
  const [state] = useContext(Context);

  return (
    <div
      className={!state.site.basic ? "bioContainer" : "bioContainer-basic"}
      id="bio"
    >
      <Presentation />

      {!state.site.basic ? (
        <>
          <Svg
            top={200}
            bottom={0}
            left={100}
            right={0}
            width={300}
            height={300}
            rotation={0}
          />
          <Svg
            top={-200}
            bottom={0}
            left={1200}
            right={0}
            width={500}
            height={500}
            rotation={90}
          />
          <Svg
            top={-600}
            bottom={60}
            left={500}
            right={0}
            width={400}
            height={400}
            rotation={120}
          />
        </>
      ) : (
        <>
          <Svg
            top={1000}
            bottom={60}
            left={0}
            right={0}
            width={400}
            height={400}
            rotation={120}
          />
          <Svg
            top={800}
            bottom={60}
            left={1300}
            right={0}
            width={400}
            height={400}
            rotation={180}
          />
        </>
      )}
    </div>
  );
};

export default Bio;
