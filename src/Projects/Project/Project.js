import ParticlesBg from "particles-bg";
import React from "react";
import styles from "./Project.module.css";
import Fade from "react-reveal/Fade";

const Project = () => {
  return (
    <div className={styles.project}>
      <Fade top>
        <a href="https://movie-frenzy.web.app/">
          <img
            src="https://res.cloudinary.com/dpnapmmwm/image/upload/v1614785632/Museum%20Councel/Movie_Frenzy_hn3twk.png"
            alt=""
          ></img>
        </a>
      </Fade>
      <Fade top>
        <a href="https://clone-5dcfe.web.app/">
          <img
            src="https://res.cloudinary.com/dpnapmmwm/image/upload/v1614785632/Museum%20Councel/AmazClone_cxabao.png"
            alt=""
          ></img>
        </a>
      </Fade>
      <Fade top>
        <a href="https://whats-clone-1c76b.web.app/">
          <img
            src="https://res.cloudinary.com/dpnapmmwm/image/upload/v1614787654/Museum%20Councel/Whats-clone_d9pn3w.png"
            alt=""
          ></img>
        </a>
      </Fade>
      <Fade top>
        <a href="https://museum-counsel.herokuapp.com/">
          <img
            src="https://res.cloudinary.com/dpnapmmwm/image/upload/v1614786479/Museum%20Councel/Museum_Counsel_l25elk.png"
            alt=""
          ></img>
        </a>
      </Fade>
      <ParticlesBg
        type="polygon"
        num={window.screen.width > 1020 ? 10 : 5}
        bg={true}
      />
    </div>
  );
};

export default Project;
