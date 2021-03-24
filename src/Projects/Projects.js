import React from "react";
import Project from "./Project/Project";
import styles from "./Projects.module.css";
import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <Fade top>
        <h1>PROJECTS</h1>
      </Fade>
      <div className={styles.projects__container}>
        <Project />
      </div>
    </div>
  );
};

export default Projects;
