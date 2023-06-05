import React, { useContext } from "react";
import Svg from "../components/layout/svg";
import Rules from "../components/rules";
import Welcome from "../components/welcome";
import { Context } from "../store/store";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-scroll";

const Home: React.FC = () => {
  const [state] = useContext(Context);

  return (
    <div id="home">
      {state.site.basic ? (
        <div>
          <Svg
            top={"0"}
            bottom={"30"}
            left={"-15vw"}
            right={"0"}
            width={"30vw"}
            height={"30vw"}
            rotation={90}
          />
          <Svg
            top={"500"}
            bottom={"0"}
            left={"35vw"}
            right={"0"}
            width={"15vw"}
            height={"15vw"}
            rotation={-45}
          />
          <Svg
            top={"-10vh"}
            bottom={"0"}
            left={"60vw"}
            right={"0"}
            width={"30vw"}
            height={"30vw"}
            rotation={45}
          />
          {/* <Rules /> */}
          <div className="home-basic">
            <div>
              <Welcome />
            </div>
            <div className="chevron-home-basic fadeInWithDelay">
              <Link
                to="bio"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                <BsChevronDown />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="homeContainer">
          <Rules />
          <Svg
            top={"500"}
            bottom={"0"}
            left={"700"}
            right={"0"}
            width={"700"}
            height={"700"}
            rotation={90}
          />
          <Svg
            top={"250"}
            bottom={"0"}
            left={"-250"}
            right={"0"}
            width={"500"}
            height={"500"}
            rotation={90}
          />
          <Svg
            top={"-150"}
            bottom={"60"}
            left={"300"}
            right={"0"}
            width={"400"}
            height={"400"}
            rotation={120}
          />
          <Svg
            top={"100"}
            bottom={"60"}
            left={"1300"}
            right={"0"}
            width={"200"}
            height={"200"}
            rotation={120}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
