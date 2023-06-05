import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import Cards from "../components/cards";
import Svg from "../components/layout/svg";
import { Context } from "../store/store";

const Projects: React.FC = () => {
  const [state] = useContext(Context);
  const { t } = useTranslation("main");

  return (
    <div>
      {state.site.basic && <div className="title">{t("projects-title")}</div>}
      <div
        id="projects"
        className={
          state.site.basic ? "projetcts_container_basic" : "projects_container"
        }
      >
        {state.site.basic ? (
          <>
            <Cards
              title={"marketplace"}
              description={t("first-projet-description")}
              img={"altameos"}
              year={"2021"}
            />
            <Cards
              title={"Tomus"}
              description={t("second-projet-description")}
              img={"tomus"}
              link="https://github.com/lebruntom/lebruntom.github.io/tree/master/Tomus"
              year={"2022"}
            />
            <Cards
              title={"WebTV"}
              description={t("third-projet-description")}
              img={"altameos"}
              year={"2022"}
            />
            <Cards
              title={"Plateforme IoT"}
              description={t("fourth-projet-description")}
              img={"nexelec"}
              year={"2023"}
            />
            <Svg
              height="30vw"
              width="30vw"
              left="50vw"
              right="0"
              top="1500"
              bottom="0"
              rotation={90}
            />
            <Svg
              height="20vw"
              width="20vw"
              left="10vw"
              right="0"
              top="2000"
              bottom="0"
              rotation={90}
            />
          </>
        ) : (
          <>
            <Cards
              title={"marketplace"}
              description={t("first-projet-description")}
              img={"altameos"}
              year={"2021"}
            />
            <Cards
              left="22vw"
              title={"Tomus"}
              description={t("second-projet-description")}
              img={"tomus"}
              link="https://github.com/lebruntom/lebruntom.github.io/tree/master/Tomus"
              year={"2022"}
            />
            <Cards
              left="44vw"
              title={"WebTV"}
              description={t("third-projet-description")}
              img={"altameos"}
              year={"2022"}
            />
            <Cards
              left="66vw"
              title={"Plateforme IoT"}
              description={t("fourth-projet-description")}
              img={"nexelec"}
              year={"2023"}
            />
            <Svg
              top={"-500"}
              bottom={"0"}
              left={"400"}
              right={"0"}
              width={"500"}
              height={"500"}
              rotation={-75}
            />
            <Svg
              top={"350"}
              bottom={"0"}
              left={"900"}
              right={"0"}
              width={"500"}
              height={"500"}
              rotation={35}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Projects;
