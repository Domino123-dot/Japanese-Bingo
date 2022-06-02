import React from "react";
import styles from "../footer/footer.module.scss";
import Line from "../line";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Icon from "../icon/icon";
const Footer = () => {
  return (
    <>
      <Line color="#241f1f" margin="20% 5% 0 5%" />
      
      <div className={styles.footer}>
      <div className={styles.text}>
          My first project! If you have any questions contact me via e-mail.
        </div>
        <div className={styles.icons}>
          <Icon link="mailto:pl.kubakot@Gmail.com" icon={faEnvelope}>
            pl.kubakot@Gmail.com
          </Icon>
        </div>

        <div className={styles.icons}>
          <Icon link="https://github.com/Domino123-dot" icon={faGithub}>
            My Github
          </Icon>
        </div>
        <div className={styles.icons}>
          <Icon
            link="https://www.linkedin.com/in/jakub-kot-337154112/"
            icon={faLinkedin}
          >
            LinkedIn
          </Icon>
        </div>
        
      </div>
    </>
  );
};

export default Footer;
