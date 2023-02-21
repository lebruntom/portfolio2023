import React from "react";
import Cards from "../components/cards";

const Projects: React.FC = () => {
  return (
    <div className="projects_container">
      <Cards
        title={"marketplace"}
        description={"création d'une marketplace en php, html, css"}
        img={"altameos"}
        year={"2021"}
      />
      <Cards
        left="22vw"
        title={"WebTV"}
        description={"création d'une marketplace en php, html, css"}
        img={"altameos"}
        year={"2021"}
      />
      <Cards
        left="44vw"
        title={"Motus"}
        description={"création d'une marketplace en php, html, css"}
        img={"altameos"}
        year={"2021"}
      />
      <Cards
        left="66vw"
        title={"Plateforme IoT"}
        description={"création d'une marketplace en php, html, css"}
        img={"altameos"}
        year={"2021"}
      />
    </div>
  );
};

export default Projects;
