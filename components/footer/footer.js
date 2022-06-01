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
        <div className={styles.icons}>
          <Icon icon={faEnvelope}>pl.kubakot@Gmail.com</Icon>
        </div>

        <div className={styles.icons}>
          <Icon icon={faGithub}>Github.com/Domino123-dot</Icon>
        </div>
        <div className={styles.icons} >
          <Icon icon={faLinkedin}>
            www.linkedin.com/in/jakub-kot-337154112/
          </Icon>
        </div>
      </div>
    </>
  );
};

export default Footer;
