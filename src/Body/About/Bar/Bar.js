import ParticlesBg from "particles-bg";
import React, { useLayoutEffect, useState } from "react";
import styles from "./Bar.module.css";

const Bar = ({ skill, progress }) => {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className={styles.barCover}>
      <span>{skill}</span>
      <div className={styles.bar}>
        <div
          className={styles.bar__filled}
          style={{
            backgroundColor: "rgb(10, 139, 111)",
            width: `${size[0] > 1020 ? progress * 6.5 : progress * 2.75}px`,
          }}
        >
          <ParticlesBg type="square" color="#ffffff" num={3} bg={false} />
        </div>
      </div>
    </div>
  );
};

export default Bar;
