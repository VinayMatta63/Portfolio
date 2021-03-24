import React from "react";
import styles from "./Footer.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import Hexagon from "react-hexagon";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const Footer = () => {
  const iconStyle = {
    verticalAlign: "middle",
    fontSize: "50px",
    marginRight: "10px",
  };
  return (
    <Slide right>
      <div className={styles.footer}>
        <Fade top>
          <h1 className={styles.footer__head}>CONTACT</h1>
        </Fade>
        <div className={styles.footer__contents}>
          <div>
            <h3 style={{ marginBottom: "10px" }}>ME</h3>
            <Flip>
              <Hexagon
                className={styles.footer__image}
                style={{ stroke: "rgb(7, 109, 87)" }}
                backgroundImage="https://res.cloudinary.com/dpnapmmwm/image/upload/v1609433854/Museum%20Councel/xtds4jbyk2e5d1hnwjmm.jpg"
              />
            </Flip>
          </div>

          <div>
            <Flip>
              <h3 style={{ marginBottom: "10px" }}>SOCIAL</h3>
              <div className={styles.footer__details}>
                <div className={styles.footer__icons}>
                  <p>
                    <a href="https://www.facebook.com/vinay.matta.1">
                      <FacebookIcon style={iconStyle} />
                      <span>Facebook</span>
                    </a>
                  </p>
                  <p>
                    <a href="https://www.linkedin.com/in/vinay-matta-465578192">
                      <LinkedInIcon style={iconStyle} />
                      <span>LinkedIn</span>
                    </a>
                  </p>
                  <p>
                    <a href="https://www.instagram.com/vinay_matta_63/">
                      <InstagramIcon style={iconStyle} />
                      <span>Instagram</span>
                    </a>
                  </p>
                </div>
              </div>
            </Flip>
          </div>

          <div>
            <Flip>
              <h3 style={{ marginBottom: "10px" }}>ADDRESS AND EMAIL</h3>
              <div className={styles.footer__details}>
                <p>Vinay Matta</p>
                <p style={{ marginTop: "5px", marginBottom: "50px" }}>
                  <EmailIcon
                    style={{
                      verticalAlign: "middle",
                      fontSize: "25px",
                      marginRight: "10px",
                    }}
                  />
                  <span>vinaymatta63@gmail.com</span>
                </p>
                <p style={{ textAlign: "right" }}>
                  Pritam Nagar, Karnal, Haryana, India
                </p>
              </div>
            </Flip>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Footer;
