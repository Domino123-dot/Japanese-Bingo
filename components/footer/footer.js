import React from "react";
import styles from "../footer/footer.module.scss";
import Line from "../line";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Icon from "../icon/icon";
const Footer = () => {
  return (
    <>

      <div className={styles.footer}>
      <Line color="#241f1f" margin="30% 5% 0 5%" />  
        <div className={styles.text}>Website made by Jakub Kot.</div>
        <div className={styles.icons}>
          <Icon link="mailto:pl.kubakot@Gmail.com" icon={faEnvelope}>
            {" "}
            pl.kubakot@gmail.com
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

      <div className={styles.hiddenFooter}>
        <div className={styles.icons}>
          <Icon link="mailto:pl.kubakot@Gmail.com" icon={faEnvelope} />
        </div>

        <div className={styles.icons}>
          <Icon link="https://github.com/Domino123-dot" icon={faGithub} />
        </div>
        <div className={styles.icons}>
          <Icon
            link="https://www.linkedin.com/in/jakub-kot-337154112/"
            icon={faLinkedin}
          />
        </div>
        <div className={styles.text}>Website made by Jakub Kot.</div>
      </div>
    </>
  );
};

export default Footer;
