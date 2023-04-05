import React from "react";
import styles from "../footer/footer.module.scss";
import Line from "../line";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Icon from "../icon/icon";
const Footer = () => {
  return (
    <>

      <div className={styles.footer}>
      <Line color="#241f1f" margin="30% 5% 0 5%" />  
        <div className={styles.text}>Website made by J.K.</div>
        <div className={styles.icons}>
          <Icon link="mailto:feedback@e-hiragana.online" icon={faEnvelope}>
            {" "}
            feedback@e-hiragana.online
          </Icon>
        </div>
        <div className={styles.icons}>
          <Icon link="https://github.com/Domino123-dot" icon={faGithub}>
            My Github
          </Icon>
        </div>
        
      </div>

      <div className={styles.hiddenFooter}>

      <Line color="#241f1f" margin="15% 10% 2% 10%" />  
   
        <div className={styles.icons}>
         
          <Icon link="mailto:feedback@e-hiragana.online" icon={faEnvelope} />
        </div>

        <div className={styles.icons}>
          <Icon link="https://github.com/Domino123-dot" icon={faGithub} />
        </div>
       
        <div className={styles.text}>Made by J.K.</div>
      </div>
    </>
  );
};

export default Footer;
