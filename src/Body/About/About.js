import React from "react";
import styles from "./About.module.css";
import Fade from "react-reveal/Fade";

const About = ({ head, body }) => {
  return (
    <div className={styles.about}>
      <Fade left>
        <div className={styles.about__head}>{head}</div>
      </Fade>
      <div className={styles.about__body}>
        {body.map((item, index) => {
          if (index === 0) {
            return (
              <Fade right>
                <p className={styles.about__name}>{item}</p>
              </Fade>
            );
          } else {
            return (
              <Fade right>
                <p>{item}</p>
              </Fade>
            );
          }
        })}
      </div>
    </div>
  );
};

export default About;
