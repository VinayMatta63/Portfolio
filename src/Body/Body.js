import React from "react";
import About from "./About/About";
import Bar from "./About/Bar/Bar";
import styles from "./Body.module.css";
import Fade from "react-reveal/Fade";

const Body = () => {
  const topSkills = [
    { skill: "React js", progress: 87 },
    { skill: "Javascript", progress: 80 },
    { skill: "Python", progress: 92 },
    { skill: "C++", progress: 85 },
    { skill: "Web Development", progress: 90 },
  ];
  return (
    <div className={styles.body}>
      <Fade top>
        <h1>
          <span>ABOUT ME</span>
        </h1>
      </Fade>

      <div className={styles.body__about}>
        <About
          head={"EDUCATION"}
          body={[
            "DCRUST Murthal, Haryana, India",
            "Bachelor's Degree, Electronics and Communication (2022)",
            "Pursuing with current CGPA: 7.89",
          ]}
        />
        <div className={styles.body__skills}>
          <Fade left>
            <div className={styles.body__barHead}>TOP SKILLS</div>
          </Fade>
          <Fade right>
            <div className={styles.body__barBody}>
              {topSkills.map((item) => (
                <Bar {...item} />
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Body;
