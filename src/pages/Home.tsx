import React, { useContext } from "react";
import Svg from "../components/layout/svg";
import Rules from "../components/rules";
import Welcome from "../components/welcome";
import { Context } from "../store/store";
import { BsChevronDown } from "react-icons/bs";

const Home: React.FC = () => {
  const [state] = useContext(Context);

  return (
    <div id="home">
      {state.site.basic ? (
        <div>
          <Svg
            top={0}
            bottom={30}
            left={-200}
            right={0}
            width={500}
            height={500}
            rotation={90}
          />
          <Svg
            top={500}
            bottom={0}
            left={500}
            right={0}
            width={300}
            height={300}
            rotation={-45}
          />
          <Svg
            top={-250}
            bottom={0}
            left={1200}
            right={0}
            width={600}
            height={600}
            rotation={45}
          />
          {/* <Rules /> */}
          <div className="home-basic">
            <div>
              <Welcome />
            </div>
            <div className="chevron-home-basic">
              <BsChevronDown />
            </div>
          </div>
        </div>
      ) : (
        <div className="homeContainer">
          <Rules />
          <Svg
            top={500}
            bottom={0}
            left={700}
            right={0}
            width={700}
            height={700}
            rotation={90}
          />
          <Svg
            top={250}
            bottom={0}
            left={-250}
            right={0}
            width={500}
            height={500}
            rotation={90}
          />
          <Svg
            top={-150}
            bottom={60}
            left={300}
            right={0}
            width={400}
            height={400}
            rotation={120}
          />
          <Svg
            top={100}
            bottom={60}
            left={1300}
            right={0}
            width={200}
            height={200}
            rotation={120}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
