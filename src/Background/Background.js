import React, { useLayoutEffect, useState } from "react";
import styles from "./Background.module.css";
import ParticlesBg from "particles-bg";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Bounce from "react-reveal/Bounce";

const Background = () => {
  const [size, setSize] = useState([0, 0]);
  const [hover, setHover] = useState(false);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const buttonStyleRight = {
    verticalAlign: "middle",
    fontSize: "2.3rem",
    marginRight: "0px",
  };
  let buttonStyleDown = { ...buttonStyleRight, display: "none" };
  if (hover) {
    buttonStyleDown = { ...buttonStyleRight };
    buttonStyleRight["display"] = "none";
  }

  return (
    <div className={styles.background}>
      <div className={styles.background__contents}>
        <div className={styles.background__text}>
          <Bounce top>
            <p>
              Hello, I'm <span>Vinay Matta.</span>
            </p>
            <p>I'm a full-stack web developer.</p>
            <button
              onClick={() => {
                window.scrollBy({ left: 0, top: 700, behavior: "smooth" });
              }}
              onMouseEnter={() => setHover(!hover)}
              onMouseLeave={() => setHover(!hover)}
            >
              View my work
              <KeyboardArrowRightIcon style={buttonStyleRight} />
              <KeyboardArrowDownIcon style={buttonStyleDown} />
            </button>
          </Bounce>
        </div>
        <div className={styles.background__fade} />
        <ParticlesBg
          type="cobweb"
          color="#ffffff"
          num={size[0] > 1020 ? 80 : 40}
          bg={true}
        />
      </div>
    </div>
  );
};

export default Background;
